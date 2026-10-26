// Données du restaurant : NAP, horaires, liens, avis. Modifier ici, tout le site suit.
import { URL_SITE } from './url.mjs';

export const SITE = {
  url: URL_SITE,
  nom: 'Anamour Durum',
  nomComplet: 'Anamour Durum Saint-Brice',
  adresse: { rue: '12 avenue Robert Schuman', cp: '95350', ville: 'Saint-Brice-sous-Forêt', pays: 'FR' },
  telAffiche: '06 28 97 61 75',
  telLien: '+33628976175',
  note: '4,6',
  noteNum: 4.6,
  nbAvis: 59,
  instagram: 'https://www.instagram.com/anamour_durum_saintbrice/',
  instagramPseudo: '@anamour_durum_saintbrice',
  tiktokCreateur: 'https://www.tiktok.com/@le_u92',
  itineraire:
    'https://www.google.com/maps/dir/?api=1&destination=12%20avenue%20Robert%20Schuman%2C%2095350%20Saint-Brice-sous-For%C3%AAt',
  carte:
    'https://www.google.com/maps?q=Anamour%20Durum%2C%2012%20avenue%20Robert%20Schuman%2C%2095350%20Saint-Brice-sous-For%C3%AAt&output=embed',
  voisines: ['Groslay', 'Montmorency', 'Sarcelles', 'Deuil-la-Barre', 'Montmagny', 'Domont', 'Ézanville'],
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Format 24 h "HH:MM".
// Plusieurs créneaux possibles par jour (ex. coupure midi) : ajouter un objet avec le même "jour".
export const HORAIRES = [
  { jour: 1, nom: 'Lundi', ouvre: '11:00', ferme: '22:30' },
  { jour: 2, nom: 'Mardi', ouvre: '11:00', ferme: '22:30' },
  { jour: 3, nom: 'Mercredi', ouvre: '11:00', ferme: '22:30' },
  { jour: 4, nom: 'Jeudi', ouvre: '11:00', ferme: '22:30' },
  { jour: 5, nom: 'Vendredi', ouvre: '11:00', ferme: '22:30' },
  { jour: 6, nom: 'Samedi', ouvre: '11:00', ferme: '22:30' },
  { jour: 0, nom: 'Dimanche', ouvre: '11:00', ferme: '22:30' },
];

export const fmtHeure = (h: string) => h.replace(':00', 'h').replace(':', 'h');

// Les 4 extraits d'avis fournis (Avis Google). Ne pas en ajouter d'inventés.
export const AVIS = [
  'Grillades excellentes et viande de kebab de très bonne qualité. Accueil chaleureux avec un thé turc offert. Mention spéciale pour le lahmacun.',
  'La vraie surprise, ce sont les pommes de terre maison : croustillantes à l’extérieur, fondantes à l’intérieur.',
  'Rapport qualité-prix excellent, assiette bien garnie, l’équipe est accueillante.',
  'Le décor est simple mais efficace, et les toilettes sont vraiment très propres. L’accueil est chaleureux.',
];
