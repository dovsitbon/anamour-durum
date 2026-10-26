# À compléter : Anamour Durum

Chaque point correspond à un marqueur [À CONFIRMER] visible sur le site (ou à une donnée volontairement omise).

## Carte (`src/data/carte.json`)
- [ ] Prix de chaque plat (dürüm, kebab, grec, assiettes, mix grillades, lahmacun, sauces, pommes de terre maison, blé, boissons)
- [ ] Prix de l'« Anamour sofrasi » : 23 € relevé sur Uber Eats, à vérifier en salle (le prix Uber Eats est souvent différent)
- [ ] Viandes proposées en dürüm, liste des autres sauces, liste des boissons
- [ ] Composition exacte des assiettes et du mix grillades
- [ ] Noms exacts des plats tels qu'affichés sur la borne

## Informations
- [ ] Halal : certification / organisme / fournisseur. Aujourd'hui, seule source = vidéo de l'influenceur Le_U92 (« nouvelle adresse halal »). Le site le présente comme tel, sans l'affirmer.
- [ ] Lien direct de la vidéo TikTok de @le_u92 (le site renvoie à son profil)
- [ ] Lien de la page Uber Eats du restaurant
- [ ] Service traiteur : conditions (délai, minimum, contact)
- [ ] **Lien avec Anamour Steakhouse (Sarcelles)** : aucun lien n'est affirmé ni mentionné sur le site. Si les deux établissements sont liés, le dire et ajouter le lien ; sinon, ne rien changer.
- [ ] Coordonnées GPS (latitude/longitude) : non renseignées dans le JSON-LD (`geo` omis faute de coordonnées sûres). Les relever sur la fiche Google Business et les ajouter dans `src/layouts/Base.astro`.
- [ ] Moyens de paiement autres que la CB (espèces, titres-restaurant ?)
- [ ] Adresse e-mail de contact

## Mentions légales (`src/pages/mentions-legales.astro`)
- [ ] Raison sociale et forme juridique
- [ ] SIRET, RCS, capital social, n° TVA
- [ ] Nom du directeur de la publication
- [ ] E-mail

## Après la mise en ligne
- [ ] Mettre l'URL définitive dans `src/data/url.mjs`
- [ ] Ajouter le site sur la fiche Google Business Profile et dans la bio Instagram
