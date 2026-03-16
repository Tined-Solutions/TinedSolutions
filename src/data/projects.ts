export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  siteUrl: string;
}

export const projects: Project[] = [
  {
    title: "Menu digital para Pelican Bar",
    description:
      "Permite a los clientes explorar platos y tragos, todo con una interfaz intuitiva y sin complicaciones. Su fin, ademas de facilitar la experiencia del cliente, es mejorar la eficiencia del manejo de las cartas para el personal del bar, permitiendo actualizaciones rápidas y sin errores.",
    tags: ["HTML", "tailwind", "JavaScript",  "Google Sheets"],
    category: "Sitio Web",
    siteUrl: "https://pelican-menu-digital.pages.dev/",
  },
  {
    title: "Menu Digital para La Gintoneria Bar",
    description:
      "Permite a los clientes explorar platos y tragos, todo con una interfaz intuitiva y sin complicaciones. Su fin, ademas de facilitar la experiencia del cliente, es mejorar la eficiencia del manejo de las cartas para el personal del bar, permitiendo actualizaciones rápidas y sin errores.",
    tags: ["HTML", "tailwind", "JavaScript",  "Google Sheets"],
    category: "Sitio Web",
    siteUrl: "https://lagintoneriamenu.pages.dev/",
  },
  {
    title: "Sitio Web para Rauda Boutique",
    description:
      "Una extension digital de su local fisico para mostrar y vender sus productos de manera atractiva y funcional. Con un diseño elegante y fácil de navegar, el sitio web permite a los clientes explorar la colección de Rauda, conocer la marca y realizar compras en línea de manera segura.",
    tags: ["HTML", "tailwind", "JavaScript", "google sheets"],
    category: "Sitio Web",
    siteUrl: "https://raudacolon.com/",
  },
  {
    title: "Landing Page informativa para un Airbnb",
    description:
      "Una landing page diseñada para un Airbnb, con el objetivo de mostrarle y proporcionar toda la información necesaria a los huespedes sobre la propiedad. La página presenta imágenes atractivas, una descripción detallada de las comodidades y servicios, sitios turisticos cercanos y un chatbot integrado para responder preguntas frecuentes, brindando a los visitantes una experiencia informativa y atractiva que los motive en su estadía.",
    tags: ["HTML", "tailwind", "JavaScript", "astro"],
    category: "Landing page",
    siteUrl: "https://tobias-airbnb.pages.dev/",
  },
];
