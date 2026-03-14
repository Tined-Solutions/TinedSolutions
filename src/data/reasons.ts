export interface Reason {
  title: string;
  description: string;
  icon: string;
}

export const reasons: Reason[] = [
  {
    title: "Software que no se rompe",
    description:
      "Aplicamos buenas prácticas y pruebas rigurosas para entregarte un producto sólido. Nada de parches: código limpio para que tu plataforma escale sin darte dolores de cabeza.",
    icon: "✦",
  },
  {
    title: "Tiempos reales, sin vueltas",
    description:
      "Trabajamos con metodologías ágiles y comunicación súper transparente. Si nos comprometemos con una fecha de entrega, la cumplimos. Así de simple.",
    icon: "◆",
  },
  {
    title: "100% a tu medida",
    description:
      "Tu negocio es único, tu web también debería serlo. No atamos tu proyecto a plantillas prearmadas; diseñamos y desarrollamos desde cero según lo que realmente necesitás.",
    icon: "▲",
  },
  {
    title: "Te acompañamos siempre",
    description:
      "No te damos la llave y desaparecemos. Seguimos ahí para el mantenimiento, las actualizaciones y para darte soporte técnico cuando lo precises.",
    icon: "●",
  },
];
