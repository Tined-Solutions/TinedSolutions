export interface Reason {
  title: string;
  description: string;
  icon: string;
}

export const reasons: Reason[] = [
  {
    title: "Código de Calidad",
    description:
      "Aplicamos clean code, revisiones rigurosas y pruebas automatizadas para garantizar software mantenible y libre de deuda técnica.",
    icon: "✦",
  },
  {
    title: "Entrega Puntual",
    description:
      "Metodologías ágiles y comunicación transparente que nos permiten cumplir plazos sin comprometer la calidad del producto final.",
    icon: "◆",
  },
  {
    title: "Soluciones a Medida",
    description:
      "No usamos plantillas genéricas. Cada proyecto se diseña desde cero pensando en las necesidades específicas de su negocio.",
    icon: "▲",
  },
  {
    title: "Soporte Continuo",
    description:
      "La relación no termina con el lanzamiento. Ofrecemos mantenimiento, actualizaciones y soporte técnico post-entrega.",
    icon: "●",
  },
];
