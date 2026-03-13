1. Contexto de la Empresa
Nombre: Tined Solutions.

Ubicación: Colón, Entre Ríos, Argentina.

Rubro: Consultoría tecnológica y desarrollo de software.

Servicios Principales: Menús digitales interactivos para gastronomía (ej. Pelican, La Gintonería), desarrollo de sitios web a medida y aplicaciones webs.

Propósito del Sitio: Landing page corporativa para captar clientes, mostrar portfolio y transmitir profesionalismo y modernidad.

2. Stack Tecnológico (Estricto)

Framework: Astro (ultima version).

Estilos: Tailwind CSS (Priorizar clases utilitarias, evitar CSS puro a menos que sea necesario).

Deploy: Optimizado para Cloudflare.

Código: TypeScript (tipado estricto), funcional, limpio y modular. 

3. Guía de Estilos y UX

Diseño: Minimalista, moderno y de alto impacto visual.

Tipografía: Limelight (para acentos/títulos específicos) y una sans-serif limpia (tipo Inter o Geist) para el cuerpo.

Tono de Voz: Profesional, innovador, cercano y encantador.

Responsive: Mobile-first obligatorio.

4. Reglas de Desarrollo (Instrucciones para la IA)

Arquitectura: Separar componentes de UI de la lógica de negocio.

Rendimiento: Priorizar la carga rápida de imágenes (WebP) y optimización de fuentes.

Componentes: Antes de crear un componente nuevo, verificar si se puede modularizar uno existente.

Tailwind: No usar valores arbitrarios si existen en la escala por defecto (ej. usar mb-4 en lugar de mb-[15px]).

Comentarios: El código debe estar documentado en español, explicando el "por qué" de las funciones complejas.

Test: Siempre que se cree una funcionalidad nueva, debe crearse su correspondiente test