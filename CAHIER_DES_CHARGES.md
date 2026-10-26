# Prompt Claude Code : site « Anamour Durum » (kebab et grillades turques, Saint-Brice-sous-Forêt)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet d'**Anamour Durum**, nouvelle adresse turque (ouverte en 2026) à Saint-Brice-sous-Forêt. Objectif business : installer la marque vite (elle a déjà fait le buzz sur TikTok), afficher la carte, et générer des visites et des commandes à emporter en direct.

## Fiche d'identité (informations vérifiées)
- **Nom** : Anamour Durum (Saint-Brice)
- **Type** : kebab / dürüm, **grillades**, **lahmacun** (« la pizza turque »), assiettes, cuisine turque ; halal (présenté comme « nouvelle adresse halal » par l'influenceur Le_U92)
- **Adresse** : 12 avenue Robert Schuman, 95350 Saint-Brice-sous-Forêt (zone commerciale, près du magasin Smyths Toys d'après un avis)
- **Téléphone** : 06 28 97 61 75
- **Horaires** : tous les jours 11h00–22h30
- **Note Google** : 4,6/5 sur 59 avis
- **Fonctionnement** : **commande sur borne, puis service à table**
- **Services** : sur place, à emporter, traiteur, adapté aux enfants, parking gratuit
- **Paiements** : CB
- **Réseaux** : Instagram @anamour_durum_saintbrice ; présent sur Uber Eats (ex. plat « Anamour sofrasi » : kebab, köfte, poulet, agneau, côtelettes : 23 € `[À CONFIRMER]`) ; vidéo TikTok de @le_u92 (plus de 100 000 vues)
- ⚠️ Il existe un **Anamour Steakhouse** à Sarcelles (kebab au feu de bois, buffet, déjà doté d'un site). Lien entre les deux : `[À CONFIRMER]`. N'affirme aucun lien sans confirmation.
- **Schema.org** : `Restaurant` (servesCuisine : Turkish, Kebab)

## Ce que disent les clients
Grillades excellentes, viande de kebab de qualité, le **grec** tendre et bien assaisonné, **pommes de terre maison** (« jamais mangé d'aussi bonnes »), **lahmacun** délicieux, **thé turc offert**, assiettes très garnies, **sauce cheddar** maison, salle « sophistiquée » au décor soigné, toilettes très propres, équipe souriante. Point d'attention : composition des mix grillades parfois différente de la commande sur borne.

Extraits d'avis utilisables (« Avis Google ») :
- « Grillades excellentes et viande de kebab de très bonne qualité. Accueil chaleureux avec un thé turc offert. Mention spéciale pour le lahmacun. »
- « La vraie surprise, ce sont les pommes de terre maison : croustillantes à l'extérieur, fondantes à l'intérieur. »
- « Rapport qualité-prix excellent, assiette bien garnie, l'équipe est accueillante. »
- « Le décor est simple mais efficace, et les toilettes sont vraiment très propres. L'accueil est chaleureux. »

## Direction artistique (angle : « la nuit à Istanbul, le grill qui fume »)
- Inspiration : **broches qui tournent, enseignes des ocakbaşı d'Istanbul, verre de çay en forme de tulipe**. Ambiance soir, chaleureuse, graphique.
- Palette : noir charbon, rouge piment, or/ambre (le thé), crème ; motif géométrique ottoman **original** dessiné en SVG très discret (différent d'un carreau portugais).
- Typo : une grotesque très grasse (ex. Archivo Black) + Archivo en texte.
- Idée signature : un **verre de çay en SVG** comme élément de marque (« le thé est offert »), et la **borne de commande expliquée en 3 étapes** visuelles.

## Structure
1. **Accueil** : « Dürüm, grillades et lahmacun, 7 jours sur 7 », note 4,6/5, boutons « Voir la carte » + « Appeler », statut ouvert/fermé.
2. **La carte** : dürüm, kebab/grec, assiettes, grillades (mix), lahmacun, sauces dont cheddar, accompagnements (pommes de terre maison, blé), boissons. `src/data/carte.json`, prix `[À CONFIRMER]`.
3. **Comment ça marche** : 1. je commande à la borne, 2. je m'installe, 3. on me sert à table (+ le thé offert).
4. **La salle** : décor, propreté, familles bienvenues (photos à prendre).
5. **Vu sur les réseaux** : lien Instagram + mention de la vidéo TikTok (sans l'intégrer).
6. **Avis** : 4 extraits + 4,6/5.
7. **Infos pratiques** : ouvert tous les jours 11h–22h30, adresse avenue Robert Schuman, parking gratuit, carte.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
