import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import {
  buildEmailHtml,
  sanitizeContactInput,
  validateContactInput,
  type ContactFormInput,
} from "../../lib/contact";

export const prerender = false;

interface ResendApiResponse {
  id?: string;
  message?: string;
}

interface ContactRuntimeEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

function getRuntimeEnv(): ContactRuntimeEnv {
  return env as ContactRuntimeEnv;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const runtimeEnv = getRuntimeEnv();
    const resendApiKey = runtimeEnv.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;
    const toEmail =
      runtimeEnv.CONTACT_TO_EMAIL ??
      import.meta.env.CONTACT_TO_EMAIL ??
      "tinedsolutions@gmail.com";
    const fromEmail =
      runtimeEnv.CONTACT_FROM_EMAIL ??
      import.meta.env.CONTACT_FROM_EMAIL ??
      "Tined Solutions <onboarding@resend.dev>";

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ message: "Falta configurar RESEND_API_KEY en el entorno." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    let payload: ContactFormInput;

    try {
      payload = (await request.json()) as ContactFormInput;
    } catch {
      return new Response(JSON.stringify({ message: "Formato de solicitud inválido." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const sanitized = sanitizeContactInput(payload);
    const validation = validateContactInput(sanitized);

    if (!validation.isValid) {
      return new Response(JSON.stringify({ message: validation.error }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Se usa la API HTTP de Resend para mantener compatibilidad con runtime de Cloudflare.
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: sanitized.email,
        subject: `[Landing] ${sanitized.subject}`,
        html: buildEmailHtml(sanitized),
        text: `Nombre: ${sanitized.name}\nEmail: ${sanitized.email}\nAsunto: ${sanitized.subject}\n\nMensaje:\n${sanitized.message}`,
      }),
    });

    const resendRawBody = await resendResponse.text();
    const resendData = (() => {
      if (!resendRawBody) {
        return {} as ResendApiResponse;
      }

      try {
        return JSON.parse(resendRawBody) as ResendApiResponse;
      } catch {
        return { message: resendRawBody } as ResendApiResponse;
      }
    })();

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({ message: resendData.message ?? "No se pudo enviar el correo." }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ ok: true, id: resendData.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const details = error instanceof Error ? error.message : String(error);
    console.error("[api/contact] Error inesperado:", error);

    return new Response(
      JSON.stringify({
        message: "Error interno procesando el formulario de contacto.",
        ...(import.meta.env.DEV ? { details } : {}),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
