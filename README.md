# LaneLoaf Website

Static marketing site for LaneLoaf, built with Next.js static export and intended for GitHub Pages hosting under `laneloaf.1sec.plus`.

## Local development

From this directory:

```sh
npm install
npm run dev
```

## Build static output

```sh
npm run export
```

This will:

1. Copy screenshot assets from:
   - `../AppStore/Store`
   - `../AppStore/Exports/framed/signal-glow`
2. Build Next.js with `output: "export"`.
3. Produce static files in `./out`.

The privacy page is emitted as `out/privacy.html`.

## Deploy to a separate website repo

For your public website repo, keep generated files in a `gh-pages/` folder on `main`.

Example flow:

1. Build in this repo: `npm run export`
2. Copy `Website/out/*` into your website repo `gh-pages/`
3. Commit + push on website repo `main`
4. In GitHub Pages settings for website repo:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/gh-pages`
5. Set custom domain to `laneloaf.1sec.plus`

