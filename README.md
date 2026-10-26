# Anamour Durum Saint-Brice : site vitrine

Astro 7 + Tailwind 4, site 100 % statique.

## Lancer en local
```
npm install
npm run dev        # http://localhost:4414
npm run build      # génère dist/
npm run preview    # sert dist/ sur le port 4414
npm run captures   # captures 390 px et 1440 px dans captures/ (après un build)
npm run og         # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer
Projet Vercel importé depuis le dépôt GitHub : chaque `git push` sur `main` redéploie. Astro statique est détecté automatiquement (pas de configuration).
Après branchement d'un nom de domaine, changer l'URL dans `src/data/url.mjs` (un seul endroit : canonical, sitemap, robots.txt, JSON-LD, og).

## Où changer quoi
- **Téléphone, adresse, horaires, Instagram, avis** : `src/data/site.ts`
- **Carte et prix** : `src/data/carte.json` (`"prix": null` affiche [À CONFIRMER] ; mettre par ex. `"9,50 €"`)
- **Textes de l'accueil** : `src/pages/index.astro`
- **Mentions légales / confidentialité** : `src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro`
- **Photos** : remplacer les blocs `<figure class="photo-vide">` de `src/pages/index.astro` par des `<Image>` d'`astro:assets` (fichiers dans `src/assets/`). Voir `PHOTOS_A_PRENDRE.md`.
- **Couleurs et polices** : `src/styles/global.css` (bloc `@theme`)

Ce qui reste à fournir : `A_COMPLETER.md`.
