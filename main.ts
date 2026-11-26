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

// The gate refuses anything outside 1..200 characters, a second line, or a
// blank text, so check the line against it before writing: a careless edit
// of DIAGNOSIS then fails loudly here instead of silently at grading.
function assertGateOk(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} chars, outside the 1..200 gate`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
}

function main(): void {
  assertGateOk(DIAGNOSIS);
  const path = entryPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, DIAGNOSIS, "utf8");
  console.log(`wrote ${DIAGNOSIS.length} chars to ${path}`);
}

main();
