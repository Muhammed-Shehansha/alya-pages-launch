# Alya Pages — Launching Soon

A lightweight React + TypeScript launching-soon page using the supplied Alya Pages artwork.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files are created in `dist/`.

## Hostinger

For a normal Hostinger static deployment:

1. Run `npm install`.
2. Run `npm run build`.
3. Open Hostinger hPanel → File Manager.
4. Open the domain's `public_html` folder.
5. Upload the CONTENTS of `dist/` into `public_html`.
6. Visit the domain.

If Hostinger is already serving another website from `public_html`, back it up before replacing its files.

The page automatically uses:
- desktop artwork above 1100px
- tablet artwork from 701px–1100px
- mobile artwork at 700px and below
