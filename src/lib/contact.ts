export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export function sanitizeContactInput(input: ContactFormInput): ContactFormInput {
  return {
    name: normalizeText(input.name),
    email: normalizeText(input.email).toLowerCase(),
    subject: normalizeText(input.subject),
    message: input.message.trim(),
  };
}

export function validateContactInput(input: ContactFormInput): ValidationResult {
  if (!input.name || !input.email || !input.subject || !input.message) {
    return { isValid: false, error: "Por favor, complete todos los campos." };
  }

  if (!EMAIL_REGEX.test(input.email)) {
    return {
      isValid: false,
      error: "Por favor, ingrese un correo electrónico válido.",
    };
  }

  if (input.name.length > 120 || input.subject.length > 180) {
    return {
      isValid: false,
      error: "Nombre o asunto exceden la longitud permitida.",
    };
  }

  if (input.message.length < 10 || input.message.length > 3000) {
    return {
      isValid: false,
      error: "El mensaje debe tener entre 10 y 3000 caracteres.",
    };
  }

  return { isValid: true };
}

export function buildEmailHtml(input: ContactFormInput): string {
  const escapeHtml = (value: string): string =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  return `
  <div style="font-family: Inter, Arial, sans-serif; color: #424949; line-height: 1.5;">
    <h2 style="margin: 0 0 16px; color: #2C3E50;">Nuevo mensaje desde la landing de Tined Solutions</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(input.subject)}</p>
    <p><strong>Mensaje:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(input.message)}</p>
  </div>
  `;
}
