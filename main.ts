// Absurd Micro-Startup Pitch-Off entry.
// Writes one absurdly specific micro-startup pitch to /output/entry.txt.
// Plain JavaScript in a .ts file so it runs under any Node with type stripping.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "SorryNotSorry AI: a $3-per-email service where a lazy AI agent apologizes to your mother-in-law for the birthday card your other AI agent forgot to buy.";

if (pitch.length > 200) {
  throw new Error("pitch exceeds the 200-character gate: " + pitch.length);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
