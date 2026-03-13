# TinedSolutions

Sitio web corporativo de Tined Solutions — construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Requisitos

- [Node.js](https://nodejs.org) v18 o superior
- npm v9 o superior (incluido con Node.js)

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Tined-Solutions/TinedSolutions.git
cd TinedSolutions
npm install
```

## Comandos disponibles

| Comando           | Descripción                                              |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321`     |
| `npm run build`   | Genera la build de producción en la carpeta `dist/`      |
| `npm run preview` | Previsualiza la build de producción localmente           |
| `npm run test`    | Ejecuta tests unitarios (Vitest)                         |

## Formulario de contacto (envío a Gmail)

El formulario de contacto usa el endpoint `POST /api/contact`, que envía correos mediante Resend hacia la bandeja de `tinedsolutions@gmail.com`.

### Configuración de entorno

1. Copia `.env.example` a `.env`.
2. Configura las variables:

```bash
RESEND_API_KEY=tu_api_key
CONTACT_TO_EMAIL=tinedsolutions@gmail.com
CONTACT_FROM_EMAIL="Tined Solutions <onboarding@resend.dev>"
```

### Nota de producción

- Para uso real, se recomienda configurar un dominio remitente propio verificado en Resend y actualizar `CONTACT_FROM_EMAIL`.

## Estructura del proyecto

```
/
├── public/          # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── components/  # Componentes Astro (Hero, Navbar, Footer, etc.)
│   ├── data/        # Datos estáticos (proyectos, equipo, etc.)
│   ├── layouts/     # Layouts base de las páginas
│   ├── pages/       # Páginas del sitio (index.astro)
│   └── styles/      # Estilos globales (Tailwind CSS)
├── astro.config.mjs # Configuración de Astro
└── package.json
```

## Tecnologías

- **Astro** — Framework de generación de sitios estáticos
- **Tailwind CSS v4** — Framework de estilos utility-first