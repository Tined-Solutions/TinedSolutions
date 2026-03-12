export interface Developer {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const developers: Developer[] = [
  {
    name: "Carlos Mendez",
    role: "Full Stack Developer",
    bio: "Especialista en arquitecturas escalables y soluciones cloud. Más de 6 años construyendo productos digitales robustos.",
    initials: "CM",
  },
  {
    name: "Ana Torres",
    role: "Frontend Engineer",
    bio: "Experta en interfaces de usuario accesibles y experiencias web de alto rendimiento con enfoque en diseño minimalista.",
    initials: "AT",
  },
  {
    name: "Luis Herrera",
    role: "Backend Developer",
    bio: "Apasionado por las APIs limpias y los sistemas distribuidos. Experiencia sólida en bases de datos y optimización.",
    initials: "LH",
  },
];
