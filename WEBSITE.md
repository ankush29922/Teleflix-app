# Teleflix website

Live site: **https://ankush29922.github.io/Teleflix-app/**

The single-page website lives in `docs/`. GitHub Pages publishes from the `main` branch's `/docs` folder. Changes pushed there publish automatically. `.nojekyll` keeps the files static; no build tools, package install or framework are required.

To preview locally, run `python -m http.server 4173 --directory docs` from this repository and open http://localhost:4173. For production-path testing, serve the parent of a `Teleflix-app` directory containing the site and open `/Teleflix-app/`.

## Updating a release

Update the visible version, APK size, direct download links, release-note links and `SoftwareApplication` structured data in `docs/index.html` together. Download links are deliberately pinned to the version shown on the page. The generic official-release links always lead to GitHub's latest release.

## Assets and previews

- The icon, four WebP artwork images and sample MP4 are original Teleflix assets from the app project.
- The phone composition is labelled as an illustrated app preview. It contains fictional sample content, with no private account details or channel screenshots.
- `assets/social-card.png` is the 1200 × 630 link-sharing image.
- Grid controls and retention buttons are local demonstrations. They neither connect to Telegram nor change app settings.
- The video dialog plays only the short, original sample clip bundled with the app.
- All page assets are local. There are no third-party fonts, analytics scripts, API calls, credential forms or cookies set by this page.

Before publishing changes, check desktop and mobile layouts, keyboard focus, FAQ disclosure, video open/close, the two preview controls, relative asset paths and the official release links. Keep the app's setup requirements and supported-feature descriptions accurate.
