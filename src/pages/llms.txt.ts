import type { APIRoute } from 'astro';
import { SITE, HORAIRES, fmtHeure } from '../data/site';
import carte from '../data/carte.json';

export const GET: APIRoute = () => {
  const h = HORAIRES[0];
  const rub = carte.rubriques.map((r) => `- ${r.titre} : ${r.plats.map((p) => p.nom).join(', ')}`).join('\n');
  const txt = `# ${SITE.nomComplet}

> Restaurant turc (kebab, dürüm, grillades, lahmacun) au ${SITE.adresse.rue}, ${SITE.adresse.cp} ${SITE.adresse.ville} (Val-d'Oise). Ouvert tous les jours de ${fmtHeure(h.ouvre)} à ${fmtHeure(h.ferme)}. Commande sur borne, puis service à table. Thé turc offert.

- Téléphone : ${SITE.telAffiche}
- Note Google : ${SITE.note}/5 (${SITE.nbAvis} avis)
- Services : sur place, à emporter, traiteur, adapté aux enfants, parking gratuit
- Paiement : carte bancaire
- Instagram : ${SITE.instagram}

## Carte (prix affichés sur la borne du restaurant)
${rub}

## Pages
- [Accueil, carte, horaires et accès](${new URL('/', SITE.url).href})
- [Mentions légales](${new URL('/mentions-legales/', SITE.url).href})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
