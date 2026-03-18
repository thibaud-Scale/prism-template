# Prism — Creative Digital Agency Template

A dark, bold, editorial portfolio template for creative agencies & freelancers. Built with Next.js 16, Tailwind CSS v4 and Framer Motion.

**[Live Demo →](https://your-demo-url.vercel.app)**

---

## ✦ Features

- **Dark / Light mode** — toggle with smooth CSS variable transitions, persisted via localStorage
- **Custom cursor** — dot + lagging ring, expands on interactive elements
- **Scramble text** — letters randomize then resolve on hover
- **Parallax** — decorative elements shift at different scroll speeds
- **Animated counters** — numbers count up when entering the viewport
- **Page transitions** — double-layer accent sweep on every navigation
- **Marquee bands** — infinite scrolling service tickers
- **Editorial services list** — numbered, hover-reveals description
- **Asymmetric project grid** — 12-col layout with per-project accent colors
- **Project detail pages** — `/projects/[slug]` with full-page hero & metadata
- **Contact form** — integrated with Formspree (no backend needed)
- **Noise/grain texture** — subtle SVG overlay across the page
- **OG Image** — auto-generated with `next/og`
- **Sitemap** — auto-generated for SEO
- **404 page** — on-brand error page

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Customization

### Colors

All design tokens are CSS custom properties in `src/app/globals.css`:

```css
@layer base {
  :root {                    /* Dark theme (default) */
    --bg:      #0D0D0D;
    --text:    #F2EFE7;
    --accent:  #CDFF3B;      /* ← Change this for a different accent color */
    --border:  #1A1A1A;
    --muted:   #777777;
  }

  [data-theme="light"] {     /* Light theme */
    --bg:      #F5F0E8;
    --text:    #0A0A0A;
    --accent:  #CDFF3B;
    --border:  #D5CFC7;
  }
}
```

**Alternative accent colors:**

| Name            | Hex       |
|-----------------|-----------|
| Acid Yellow-Green | `#CDFF3B` ← default |
| Electric Orange | `#FF4500` |
| Neon Blue       | `#00C8FF` |
| Hot Pink        | `#FF2D78` |
| Pure White      | `#FFFFFF` |

---

### Site content

Edit **`src/lib/data.ts`** — this single file controls all text content:

```ts
export const siteConfig = {
  name:         "Your Agency",
  tagline:      "Creative Digital Agency",
  email:        "hello@youragency.com",
  location:     "Your City, Country",
  availability: "Available for projects",
  social: {
    github:   "https://github.com/yourusername",
    twitter:  "https://x.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};
```

### Projects

Add or edit projects in `src/lib/data.ts`:

```ts
export const projects: Project[] = [
  {
    id:              "my-project",    // → URL: /projects/my-project
    title:           "My Project",
    description:     "Short description (shown on hover in grid)",
    longDescription: "Full paragraph for the project detail page.",
    tags:            ["React", "Figma", "Node.js"],
    image:           "/images/projects/project.webp",
    color:           "#8b5cf6",       // Accent color for this project card
    year:            2025,
    role:            "Design & Development",
    link:            "https://example.com",
  },
];
```

### Contact form (Formspree)

The contact form works in **demo mode** out of the box — it simulates a successful send without any account. To receive real emails:

**Step 1 — Create a Formspree account**

Go to [formspree.io](https://formspree.io) and sign up for free (up to 50 submissions/month).

**Step 2 — Create a new form**

1. Click **+ New Form** in your Formspree dashboard
2. Give it a name (e.g. "Prism Contact")
3. Set the destination email to the address where you want to receive messages
4. Click **Create Form**

**Step 3 — Copy your Form ID**

After creation you'll see an endpoint like:
```
https://formspree.io/f/xpwzgkqr
                          ^^^^^^^^
                          This is your Form ID
```

**Step 4 — Paste it into the template**

Open `src/components/sections/Contact.tsx` and replace:

```ts
const FORMSPREE_ID = "YOUR_FORM_ID"; // ← Paste your form ID here (e.g. "xpwzgkqr")
```

That's it — no backend, no environment variables needed. Formspree handles spam filtering, email delivery, and a submission dashboard.

> **Note:** The free Formspree plan includes 50 submissions/month. For higher volume, upgrade to a paid plan at formspree.io.

### Legal pages

Two legal pages are included and linked in the footer: **Mentions Légales** (`/legal`) and **Privacy Policy** (`/privacy`).

Both pages have a block of constants at the top — fill them in before going live:

**`src/app/legal/page.tsx`**
```ts
const OWNER_NAME   = "[Prénom Nom]";                      // Your full name or company
const OWNER_STATUS = "[Auto-entrepreneur / SAS / etc.]";  // Legal form
const SIRET        = "[123 456 789 00010]";               // Your SIRET number
const ADDRESS      = "[Votre adresse complète]";          // Registered address
const EMAIL        = "hello@prism.agency";                // Contact email
const PHONE        = "[+33 6 00 00 00 00]";              // Phone (delete line if unused)
```

**`src/app/privacy/page.tsx`**
```ts
const OWNER_NAME   = "[Prénom Nom / Société]";  // Your name or company
const EMAIL        = "hello@prism.agency";       // Contact email
const LAST_UPDATED = "January 2025";             // Update whenever you edit the policy
```

The cookie banner (`CookieBanner.tsx`) is already wired up — it appears automatically on first visit if no consent has been stored, and links to the Privacy Policy page.

---

### Domain & URL

Replace `https://your-domain.com` in two files:
- `src/app/layout.tsx` → `BASE_URL`
- `src/app/sitemap.ts` → `BASE_URL`

---

## 📁 File structure

```
src/
├── app/
│   ├── globals.css             # Design tokens (CSS vars) + base styles
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── template.tsx            # Page transition overlay
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # 404 page
│   ├── icon.tsx                # Favicon (auto-generated)
│   ├── opengraph-image.tsx     # OG image 1200×630 (auto-generated)
│   ├── sitemap.ts              # XML sitemap (auto-generated)
│   ├── legal/
│   │   └── page.tsx            # Mentions légales (French legal notice)
│   ├── privacy/
│   │   └── page.tsx            # Privacy Policy (GDPR-compliant)
│   └── projects/[slug]/
│       └── page.tsx            # Project detail page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav + theme toggle + mobile menu
│   │   └── Footer.tsx          # Minimal footer + legal links
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero + parallax + counters
│   │   ├── Projects.tsx        # Asymmetric 12-col project grid
│   │   ├── Services.tsx        # Editorial numbered services list
│   │   └── Contact.tsx         # Typographic CTA + contact form
│   └── ui/
│       ├── AnimateOnScroll.tsx # Scroll-triggered fade+slide wrapper
│       ├── CookieBanner.tsx    # GDPR cookie consent banner
│       ├── CountUp.tsx         # Animated number counter
│       ├── Cursor.tsx          # Custom cursor (dot + lagging ring)
│       ├── Marquee.tsx         # Infinite scroll ticker
│       ├── NoiseOverlay.tsx    # Grain texture overlay
│       ├── ScrambleText.tsx    # Letter scramble on hover
│       ├── ThemeProvider.tsx   # Theme context + localStorage
│       └── ThemeToggle.tsx     # Dark/light toggle button
│
└── lib/
    └── data.ts                 # ← All site content lives here
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Next.js](https://nextjs.org) | 16 | Framework + routing |
| [React](https://react.dev) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility styling |
| [Framer Motion](https://framer.com/motion) | 12 | Animations |
| [TypeScript](https://typescriptlang.org) | 5 | Type safety |

---

## 🌐 Deploy on Vercel

1. Push your code to a **GitHub** repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repo → click **Deploy**
4. Copy the Vercel URL → paste it as `BASE_URL` in `layout.tsx` and `sitemap.ts`

Zero configuration required. Vercel auto-detects Next.js.

---

## 📄 License

See [LICENSE](./LICENSE) — **Personal & Commercial use** allowed for a single end product.
Redistribution or resale of the template source code is not permitted.

---

For support, contact the seller via Gumroad.
