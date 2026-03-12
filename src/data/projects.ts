export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico con arquitectura de microservicios, gestión de inventario en tiempo real y pasarela de pagos integrada.",
    tags: ["Node.js", "React", "PostgreSQL"],
    category: "Web App",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Panel de administración para una startup de analítica de datos, con visualizaciones interactivas y exportación de reportes automatizada.",
    tags: ["TypeScript", "Next.js", "Chart.js"],
    category: "SaaS",
  },
  {
    title: "API REST Corporativa",
    description:
      "Diseño e implementación de una API REST para una empresa financiera, con autenticación OAuth2, rate limiting y documentación automática.",
    tags: ["Python", "FastAPI", "Docker"],
    category: "Backend",
  },
  {
    title: "App Móvil de Logística",
    description:
      "Aplicación multiplataforma para la gestión de rutas de entrega, con seguimiento GPS en tiempo real y notificaciones push.",
    tags: ["React Native", "Firebase", "Maps API"],
    category: "Mobile",
  },
];
