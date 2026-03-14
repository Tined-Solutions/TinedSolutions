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
      "Plataforma de ventas online súper robusta. Armamos una arquitectura escalable con control de stock en tiempo real y pasarela de pagos integrada para que las ventas no paren.",
    tags: ["Node.js", "React", "PostgreSQL"],
    category: "Web App",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Panel de control para una startup de datos. Gráficos interactivos y exportación de reportes automáticos para tomar decisiones de negocio al toque y sin depender de terceros.",
    tags: ["TypeScript", "Next.js", "Chart.js"],
    category: "SaaS",
  },
  {
    title: "API REST Corporativa",
    description:
      "El motor invisible para una empresa financiera. Conexiones seguras, validación de usuarios y documentación automática para que todo el sistema fluya sin cuellos de botella.",
    tags: ["Python", "FastAPI", "Docker"],
    category: "Backend",
  },
  {
    title: "App Móvil de Logística",
    description:
      "Aplicación para gestionar repartos de manera inteligente. Seguimiento por GPS en tiempo real y notificaciones directas al celular para optimizar cada ruta y ahorrar tiempo.",
    tags: ["React Native", "Firebase", "Maps API"],
    category: "Mobile",
  },
];
