export interface ProcessStep {
  stepLabel: string;
  title: string;
  description: string;
  isFinal?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    stepLabel: "Paso 1",
    title: "La idea 💡",
    description:
      "Sabés que es el momento de dar el salto. Querés modernizarte, automatizar procesos o lanzar ese proyecto que te viene dando vueltas en la cabeza. La visión ya la tenés clara.",
  },
  {
    stepLabel: "Paso 2",
    title: "El equipo ideal 🚀",
    description:
      "Buscás gente que entienda tu negocio y hable tu mismo idioma. Necesitás desarrolladores que te den soluciones reales, sin tecnicismos raros, sin dolores de cabeza ni demoras interminables.",
  },
  {
    stepLabel: "Paso 3",
    title: "¡Manos a la obra! 🤝",
    description:
      "Nos mandás un mensaje a Tined Solutions. Nos contás qué tenés en mente y armamos la estrategia. De la programación, el diseño y los detalles técnicos nos encargamos nosotros.",
    isFinal: true,
  },
];
