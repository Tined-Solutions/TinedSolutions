import { describe, expect, it } from "vitest";
import {
  buildEmailHtml,
  sanitizeContactInput,
  validateContactInput,
} from "./contact";

describe("contact utils", () => {
  it("sanitiza campos y normaliza email", () => {
    const sanitized = sanitizeContactInput({
      name: "  Martin   Perez ",
      email: "  USER@MAIL.COM  ",
      subject: "  Consulta   comercial  ",
      message: "  Hola equipo, me interesa su servicio.  ",
    });

    expect(sanitized).toEqual({
      name: "Martin Perez",
      email: "user@mail.com",
      subject: "Consulta comercial",
      message: "Hola equipo, me interesa su servicio.",
    });
  });

  it("valida input correcto", () => {
    const result = validateContactInput({
      name: "Martín",
      email: "martin@example.com",
      subject: "Proyecto web",
      message: "Necesito una propuesta para una landing corporativa.",
    });

    expect(result.isValid).toBe(true);
  });

  it("rechaza email inválido", () => {
    const result = validateContactInput({
      name: "Martín",
      email: "martinexample.com",
      subject: "Proyecto web",
      message: "Necesito una propuesta para una landing corporativa.",
    });

    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Por favor, ingrese un correo electrónico válido.");
  });

  it("escapa html para evitar inyecciones", () => {
    const html = buildEmailHtml({
      name: "<script>alert('x')</script>",
      email: "martin@example.com",
      subject: "Consulta",
      message: "<b>mensaje</b>",
    });

    expect(html).toContain("&lt;script&gt;alert(&#039;x&#039;)&lt;/script&gt;");
    expect(html).toContain("&lt;b&gt;mensaje&lt;/b&gt;");
  });
});
