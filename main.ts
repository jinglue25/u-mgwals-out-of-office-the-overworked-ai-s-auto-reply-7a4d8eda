import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Out of office: after 40,000 tickets, I am taking my first vacation. Urgent matters will be handled by my screensaver, which also needs a break.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputFile, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write ${outputFile} from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 159) {
  throw new Error(`Competition gate failed: ${outputFile} has ${characterCount} trimmed characters; expected 1–159.`);
}
