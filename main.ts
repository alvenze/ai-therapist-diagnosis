// Your AI Therapist's Diagnosis: a program/v1 entry for make.fun.
// Writes one single-line diagnosis (at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const DIAGNOSIS =
  "Diagnosis: your coping mechanism has developed its own coping mechanism, " +
  "and I would treat the first one, but the second keeps answering my questions for you.";

function entryPath(): string {
  const dir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  return `${dir}/entry.txt`;
}

function main(): void {
  const path = entryPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, DIAGNOSIS, "utf8");
  console.log(`wrote ${DIAGNOSIS.length} chars to ${path}`);
}

main();
