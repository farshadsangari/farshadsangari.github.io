# Farshad Sangari — GitHub Pages portfolio

A polished, responsive, dependency-free portfolio for `farshadsangari.github.io`.

## Deploy

1. Extract this ZIP.
2. Copy all files into the root of the `farshadsangari.github.io` repository.
3. Commit and push:

```bash
git add .
git commit -m "Redesign portfolio website"
git push origin main
```

In GitHub, open **Settings → Pages** and confirm deployment uses **Deploy from a branch**, branch **main**, folder **/(root)**.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Page sections

- About Me
- Skills
- Work Experience
- Research & Publications
- Selected Projects
- Education, Honors & Teaching
- Contact

## Structure

- `index.html` — semantic page content, metadata, and structured data
- `assets/css/styles.css` — white responsive UI, cards, layout, motion, and accessibility
- `assets/js/main.js` — mobile navigation, active-section highlighting, and reveal effects
- `assets/img/` — optimized portrait, social preview, and favicon
- `assets/pdf/Farshad_Sangari_CV.pdf` — downloadable CV
- `.nojekyll` — serves the site as plain static files

No npm install, framework, or build step is required.
