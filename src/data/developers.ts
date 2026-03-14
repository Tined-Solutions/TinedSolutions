export interface Developer {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin: string;
}

export const developers: Developer[] = [
  {
    name: "Edgardo Del Real",
    role: "Desarrollador",
    bio: "Trabajo en todas las etapas de tu software, prestando especial atención a sus bases y las buenas prácticas. Me encargo de que la tecnología detrás de tu negocio sea eficiente y a prueba de fallas.",
    initials: "ER",
    linkedin: "https://www.linkedin.com/in/edgardo-del-real/",
  },
  {
    name: "Martín Lima",
    role: "Desarrollador",
    bio: "Abarco todo el ciclo de desarrollo, pero mi debilidad es el pulido final. Me dedico a afinar la interfaz y los detalles visuales para que usar tu solución sea cómoda, intuitiva y se destaque sobre las demás.",
    initials: "ML",
    linkedin: "https://www.linkedin.com/in/mart%C3%ADn-sebasti%C3%A1n-lima-4361572a7/",
  },
];
