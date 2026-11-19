// news-image-20261119 entry (Node 22, standard library only, no network).
// The entry is the entry.png beside this file: a newspaper front page drawn
// for Thursday 19 November 2026 — five verified stories of the day plus three
// more in the footer — and this program copies it to /output/entry.png.
// The copy is byte-for-byte deterministic, so both grader runs write the
// same file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const png = readFileSync(new URL('./entry.png', import.meta.url));
writeFileSync(join(outDir, 'entry.png'), png);
