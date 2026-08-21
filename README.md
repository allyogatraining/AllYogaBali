# All Yoga Training — Bali (static site)

One-page static site. No build step, no dependencies. Deploys as-is to Cloudflare Pages.

## Structure

```
website/
├── index.html
├── css/styles.css
├── js/script.js
├── images/
│   ├── all-yoga-training-logo.png          (included)
│   ├── yoga-teacher-training-bali-shala.jpg (PLACEHOLDER — hero, 1600×900)
│   └── nusa-lembongan-beachfront-yoga-shala.jpg (PLACEHOLDER — location, 1200×900)
├── robots.txt
└── sitemap.xml
```

## Assets needed

All images are in place:

1. `images/yoga-teacher-training-bali-shala.jpg` — hero, 1600×900. LCP image, not lazy-loaded.
2. `images/nusa-lembongan-beachfront-yoga-shala.jpg` — location, 1200×900. Lazy-loaded.
3. `images/all-yoga-training-logo.png` — header and footer logo.

Optional: add a `favicon.ico` at the site root and swap the `<link rel="icon">` in `index.html` — it currently points at the logo PNG.

If you supply WebP instead, rename the `src` in `index.html` accordingly and keep the same `width`/`height` attributes so layout does not shift. Both image containers have a fixed aspect ratio and a cream fallback background, so the layout holds even before the files are added.

## Preview locally

Open `index.html` in a browser — it works from the file system.

For a local server (needed if you later add fetch-based features):

```
cd website
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Cloudflare Pages

1. Create a GitHub repository and push the **contents of `website/`** to the repo root, so `index.html` sits at the top level.
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:USER/REPO.git
   git push -u origin main
   ```
2. In Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Save and Deploy.
5. Add your custom domain under the project's **Custom domains** tab.

## Placeholders to replace

- Domain `https://www.allyogabali.com/` appears in the canonical tag, Open Graph URLs, JSON-LD `@id`s, `robots.txt` and `sitemap.xml`. Find-and-replace if the final domain differs.
- `sitemap.xml` `<lastmod>` should be updated when content changes.

## Notes

- No forms on the page — all conversion points link to allyogatraining.com.
- Smooth scrolling is CSS-based and disabled automatically under `prefers-reduced-motion`.
- The only JavaScript is the mobile menu toggle (~1 KB, deferred).
