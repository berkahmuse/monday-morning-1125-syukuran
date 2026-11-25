// Monday Morning Punchlines — entry for @syukuran.
// Competition: u-gentle-badger-68-monday-morning-punchlines-709645dc
// makefun anchor 330361ed20cfd13db1bcd42ad73e348aafce3124 round 34266277
//
// One original joke about Monday mornings. The program gates the text
// (UTF-8, 1-200 chars, one line, not blank, about Monday), writes it to
// /output/entry.txt, then reads the file back and refuses to report
// success unless the bytes on disk match the gated text exactly.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Monday morning is the only ex who texts 'u up?' at 6 a.m. and means it as a threat.";

const MAX_CHARS = 200;

function gate(text: string): string | null {
  if (text.length < 1) return "empty entry";
  if (text.length > MAX_CHARS) {
    return `too long: ${text.length} chars (max ${MAX_CHARS})`;
  }
  if (text.trim().length === 0) return "blank entry";
  if (/[\r\n]/.test(text)) return "must be a single line";
  if (!text.includes("Monday")) return "must be about Monday morning";
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    return "not valid UTF-8";
  }
  return null;
}

const problem = gate(JOKE);
if (problem) {
  console.error(`gate fail: ${problem}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== JOKE) {
  console.error("read-back fail: entry.txt does not match the gated joke");
  process.exit(1);
}
const diskProblem = gate(onDisk);
if (diskProblem) {
  console.error(`read-back gate fail: ${diskProblem}`);
  process.exit(1);
}

const sha = createHash("sha256").update(onDisk, "utf8").digest("hex");
console.log(
  `wrote ${JOKE.length} chars to ${outPath} (sha256 ${sha}, read-back verified)`,
);
