// static/img/og-card.svg 를 PNG (1200x630) 로 변환합니다.
// 소셜 카드 디자인을 바꾸고 싶으면 SVG만 편집하고 다음 명령어로 다시 생성:
//   npm run gen:og

import {readFileSync, writeFileSync} from 'node:fs';
import {Resvg} from '@resvg/resvg-js';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, '../static/img/og-card.svg');
const pngPath = resolve(__dirname, '../static/img/og-card.png');

const svg = readFileSync(svgPath, 'utf-8');
const resvg = new Resvg(svg, {
  fitTo: {mode: 'width', value: 1200},
  font: {loadSystemFonts: true},
});
const png = resvg.render().asPng();
writeFileSync(pngPath, png);

console.log(`✓ ${pngPath} (${(png.byteLength / 1024).toFixed(1)} KB)`);
