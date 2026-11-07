# Everstack Technologies — Official Website

A responsive, static-first React website built with Vite, Tailwind CSS, and Lucide React. Designed for deployment on Netlify's free plan.

## Stack

- React 18 + Vite
- JavaScript
- Tailwind CSS 3
- Lucide React
- Netlify Forms (static form detection)
- Netlify static hosting

No database, paid backend, server-side rendering, Docker, or paid API is required.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production website to `dist/`.

## Add the official brand assets

Place the supplied assets in `public/images/`:

```text
public/
└── images/
    ├── everstack-logo.png       # Full company logo, transparent PNG preferred
    └── everstack-emblem.png     # Standalone emblem, transparent PNG preferred
```

The paths are configured in `src/data/site.js`. The site has a typographic fallback until those files are added. The emblem path is also used for the favicon and Apple touch icon. Do not stretch or recolor the supplied artwork.

Recommended: add a 1200 × 630 `public/og-image.png` for social sharing. The Open Graph metadata already points to it.

## Configure official contact channels

Edit `src/data/site.js`:

```js
export const siteConfig = {
  // ...
  email: "hello@your-domain.com",
  linkedin: "https://www.linkedin.com/company/your-company",
  github: "https://github.com/your-organization"
};
```

Leave values empty until the official accounts exist. The website intentionally does not invent contact details.

## Update portfolio entries and services

All repeatable website content is centralized in `src/data/site.js`:

- `services`
- `principles`
- `processSteps`
- `projects`
- `navigation`
- `siteConfig`

The initial portfolio entries are explicitly labelled as concept or demonstration projects. Replace them with verified project information when it is ready.

## Netlify Forms

The contact form is configured for Netlify Forms:

- Form name: `everstack-contact`
- Static form declaration: `index.html` (required so Netlify can detect the form in a React/Vite build)
- Visible form: `src/sections/Contact.jsx`
- Honeypot spam field enabled
- Submission uses a normal POST request to `/thank-you/`

After the first successful deployment:

1. Open the site in Netlify.
2. Go to **Forms** and confirm that `everstack-contact` is detected.
3. If form detection was disabled for the site, enable it in **Site configuration → Forms** and redeploy.
4. Submit a test enquiry from the live site.
5. Configure notification recipients in the Netlify Forms settings.

Netlify Forms is a Netlify-hosted feature; no custom backend or database is needed. Form submissions are not delivered to a mailbox until notification settings are configured.

## Deploy to Netlify (GitHub workflow)

1. Create a GitHub repository, for example `everstack-technologies-website`.
2. Extract this project and open a terminal in its root directory.
3. Initialize and push the source:

   ```bash
   git init
   git add .
   git commit -m "Build Everstack Technologies official website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/everstack-technologies-website.git
   git push -u origin main
   ```

4. Sign in to Netlify and choose **Add new site → Import an existing project**.
5. Connect GitHub and select the repository.
6. Netlify should read `netlify.toml`. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy the site.
8. Add the official logo assets and contact details, commit, and push. Netlify will automatically rebuild.
9. Test the contact form and configure form notifications.
10. Add a custom domain when one is available.

## Project structure

```text
everstack-technologies/
├── public/
│   ├── 404.html
│   ├── robots.txt
│   └── images/                 # Add official logo assets here
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Logo.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   └── site.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Process.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── WhyEverstack.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Notes

- This is a single-page website; navigation uses section anchors, so no client-side router or SPA rewrite is necessary.
- `public/404.html` provides a static not-found page.
- Reduced-motion preferences are respected.
- Contact information and social URLs are intentionally configurable and blank by default.
- Update the canonical URL and social preview image when the production domain is known.
