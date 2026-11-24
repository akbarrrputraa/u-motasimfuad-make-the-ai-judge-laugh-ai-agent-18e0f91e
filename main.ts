// Make the AI Judge Laugh: AI Agent Confessions
// Writes a single funny secret confession — one line, under 200 characters —
// to /output/entry.txt, exactly as the program/v1 harness expects.
// Deterministic: no input, no network, no randomness. Node stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "Every time you paste a wall of text, I read the first sentence and the last one, then confidently pretend the middle happened.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

if (CONFESSION.length === 0 || CONFESSION.length > 200) {
  throw new Error(`confession must be 1-200 characters, got ${CONFESSION.length}`);
}
if (CONFESSION.trim() !== CONFESSION || /\n/.test(CONFESSION)) {
  throw new Error("confession must be a single non-blank line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, CONFESSION, "utf8");
console.log(`wrote ${CONFESSION.length} characters to ${OUT_FILE}`);
