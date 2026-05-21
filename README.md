# CDA JMontoya — Landing Page

Landing page para el **Centro de Diagnóstico Automotor JMontoya**, especializado en revisión técnico-mecánica y emisiones contaminantes para motocicletas en Villavicencio, Meta.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Embla Carousel** para el carrusel del Instagram
- **lucide-react** para iconografía
- Fuentes: **Bebas Neue** (display racing) + **DM Sans** (body) + **Allura** (cursiva acento)

## Setup local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Build de producción

```bash
npm run build
npm start
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Fuentes, metadata global, SEO
│   ├── page.tsx          # Página principal con JSON-LD
│   ├── globals.css       # Tokens CSS, scrollbar, noise
│   ├── icon.svg          # Favicon
│   └── sitemap.ts        # Sitemap automático
├── components/
│   ├── ui/Logo.tsx
│   └── shared/           # Navbar, Footer, WhatsAppButton
├── sections/             # Hero, Carousel, About, Services, Procedure, Requirements, Schedule, Contact
├── data/
│   ├── site.ts           # Config global (teléfono, email, hrs, navlinks)
│   ├── carousel.ts       # Slides del carrusel (placeholders)
│   ├── procedure.ts      # 5 pasos del procedimiento
│   └── services.ts       # Servicios (RTM y SOAT)
└── lib/
    └── animations.ts     # Variantes Framer reutilizables
```

## Personalización rápida

| Qué cambiar             | Archivo                       |
| ----------------------- | ----------------------------- |
| Teléfono, email, hrs    | `src/data/site.ts`            |
| Imágenes del carrusel   | `src/data/carousel.ts` + `/public/carousel/` |
| Servicios y precios     | `src/data/services.ts`        |
| Pasos del procedimiento | `src/data/procedure.ts`       |
| Coordenadas del mapa    | `src/data/site.ts` → `location.coordinates` |
| Colores/paleta          | `tailwind.config.ts` → `colors.signal/ink` |
| Fuentes                 | `src/app/layout.tsx`          |

## Pendientes marcados con TODO

Buscar `TODO:` en el código:

- **Imágenes del carrusel**: reemplazar URLs en `src/data/carousel.ts` con las imágenes reales del IG [@ceajmontoya](https://www.instagram.com/ceajmontoya/). Subirlas a `/public/carousel/` o usar un CDN.
- **Formulario de contacto**: conectar `Contact.tsx` (handleSubmit) con un servicio real — recomendado: [Resend](https://resend.com), [Formspree](https://formspree.io) o una API route propia.
- **Agendamiento**: actualmente el botón "Agendar" abre WhatsApp. Para integrar Calendly/sistema propio, modificar `siteConfig.whatsapp`.
- **OG image**: agregar `/public/og-image.jpg` (1200×630) para previews en redes sociales.

## Identidad visual

- **Negro profundo** `#0A0A0A` (fondo principal)
- **Rojo signature** `#E63946` (CTA, acentos)
- **Rojo oscuro** `#B81D24` (hovers, gradientes)
- **Gris carbón** `#1A1A1A` (secciones secundarias)

## Performance & SEO

- Schema.org `LocalBusiness` + `AutomotiveBusiness` ya configurado en `page.tsx`
- Sitemap automático en `/sitemap.xml`
- `robots.txt` listo
- Respeta `prefers-reduced-motion`
- Fonts con `display: swap` para evitar layout shift
- Lazy loading nativo en el iframe del mapa

## Deployment

### Railway (recomendado)

El proyecto ya viene configurado para Railway con [railway.json](railway.json) y [nixpacks.toml](nixpacks.toml). Pasos:

1. **Conectar el repo** en [railway.app](https://railway.app) → *New Project* → *Deploy from GitHub repo* → selecciona `JuanEdu1/JMontoya`.
2. Railway detecta automáticamente el `railway.json` y corre:
   - `npm ci` (install)
   - `npm run build`
   - `npm start` (puerto asignado por `$PORT`)
3. **Generar dominio**: Settings → Networking → *Generate Domain*. Listo, queda accesible en `https://tuapp.up.railway.app`.
4. (Opcional) **Dominio custom**: Settings → Domains → *Custom Domain* → apuntar `jmontoya.co` con un CNAME a Railway.

#### Variables de entorno (cuando se conecte el formulario)

Copiar [.env.example](.env.example) en Railway → Variables:

```env
RESEND_API_KEY=re_xxx
CONTACT_FORM_TO=info@jmontoya.co
```

### Alternativa: Vercel

Push del repo y *Import* en [vercel.com/new](https://vercel.com/new). Detecta Next.js automáticamente.

## Escalabilidad — preparado para

- Agregar más servicios → editar `src/data/services.ts`
- Blog/noticias → crear `src/app/blog/` (estructura lista)
- Multiidioma → strings ya centralizados en `data/`
- Agendamiento online → swap del CTA de WhatsApp por endpoint

---

Hecho con orgullo en Villavicencio · 2026
