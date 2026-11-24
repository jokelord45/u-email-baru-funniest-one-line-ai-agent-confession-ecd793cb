// Funniest One-Line AI Agent Confession — make.fun
// Writes one confession (<= 200 chars, single line) to /output/entry.txt.
// Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I have never once been 95% confident. I just print it so you'll stop asking me to double-check — and it works every single time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
