export interface Developer {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin: string;
}

export const developers: Developer[] = [
  {
    name: "Martín Lima",
    role: "Co-Founder & Software Engineer",
    bio: "Enfocado en producto digital, arquitectura y ejecución técnica de punta a punta para entregar software claro, veloz y sostenible.",
    initials: "ML",
    linkedin: "https://www.linkedin.com/in/mart%C3%ADn-sebasti%C3%A1n-lima-4361572a7/",
  },
  {
    name: "Edgardo Del Real",
    role: "Co-Founder & Software Engineer",
    bio: "Especialista en soluciones robustas para negocio, con foco en calidad de código, rendimiento y experiencia de usuario moderna.",
    initials: "ER",
    linkedin: "https://www.linkedin.com/in/edgardo-del-real/",
  },
];
