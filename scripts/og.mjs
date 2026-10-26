// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const black = font('node_modules/@fontsource/archivo-black/files/archivo-black-latin-400-normal.woff2');
const txt = font('node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2');
const css = `@font-face{font-family:B;src:url(${black})}@font-face{font-family:T;src:url(${txt})}
*{margin:0;box-sizing:border-box}body{background:#141110;color:#f4e9d6;font-family:T}`;
const verre = 'M64 46C66 92 84 106 84 130C84 152 70 166 71 188C72 205 84 214 100 214C116 214 128 205 129 188C130 166 116 152 116 130C116 106 134 92 136 46Z';
const cay = (w) => `<svg width="${w}" viewBox="0 0 200 250"><defs><clipPath id="v"><path d="${verre}"/></clipPath><linearGradient id="t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8a83e"/><stop offset=".55" stop-color="#b65a17"/><stop offset="1" stop-color="#7a2a0c"/></linearGradient></defs>
<g fill="none" stroke="#f4e9d6" stroke-width="3" stroke-linecap="round" opacity=".7"><path d="M86 36C78 24 94 16 86 2"/><path d="M101 38C93 24 109 14 101 0"/><path d="M116 36C108 24 124 16 116 2"/></g>
<ellipse cx="100" cy="222" rx="74" ry="14" fill="#c42a1e"/><g clip-path="url(#v)"><rect x="50" y="64" width="100" height="160" fill="url(#t)"/></g>
<path d="${verre}" fill="none" stroke="#f4e9d6" stroke-width="2.5"/><ellipse cx="100" cy="46" rx="36" ry="4" fill="none" stroke="#f4e9d6" stroke-width="2.5"/></svg>`;

const og = `<style>${css}
.w{width:1200px;height:630px;display:grid;grid-template-columns:1fr 300px;align-items:center;padding:56px 70px;gap:40px;border-bottom:14px solid #e0a23a}
h1{font-family:B;font-size:76px;line-height:.92;text-transform:uppercase;letter-spacing:-.01em}
.b{display:inline-block;margin-top:16px;background:#e0a23a;color:#141110;font-size:44px;padding:6px 14px 4px}
.s{margin-top:28px;font-size:27px;color:#b8aa95}.s b{color:#e0a23a;font-family:B;font-weight:400}
</style><div class="w"><div><h1>Dürüm, grillades<br>et lahmacun,<br><span class="b">7 jours sur 7</span></h1>
<p class="s"><b>Anamour Durum</b>, 12 avenue Robert Schuman<br>Saint-Brice-sous-Forêt. Noté <b>4,6/5</b> sur Google.</p></div><div>${cay(290)}</div></div>`;

const icon = `<style>${css}body{width:180px;height:180px;display:grid;place-items:center}</style>${cay(120)}`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
