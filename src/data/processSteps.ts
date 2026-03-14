export interface ProcessStep {
  stepLabel: string;
  title: string;
  description: string;
  isFinal?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    stepLabel: "Paso 1",
    title: "Nace la idea 💡",
    description:
      "Sabés que tu negocio necesita escalar, modernizar su presencia web o lanzar ese proyecto que no te deja dormir. La visión ya la tenés clara.",
  },
  {
    stepLabel: "Paso 2",
    title: "Buscás a los expertos 🚀",
    description:
      "Te das cuenta de que necesitás un equipo que entienda de código, cuide el diseño y te brinde soluciones reales, sin dolores de cabeza ni demoras.",
  },
  {
    stepLabel: "El gran final (o el inicio)",
    title: "¡Te contactás con nosotros! 🤝",
    description:
      "Nos mandás un mensaje a Tined Solutions. Nos contás tu idea y empezamos a diseñar la estrategia. Del código y la magia, nos encargamos nosotros.",
    isFinal: true,
  },
];
