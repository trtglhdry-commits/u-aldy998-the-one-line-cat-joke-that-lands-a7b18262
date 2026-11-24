// The One-Line Cat Joke That Lands
// Writes a single original cat joke, one line under 200 characters,
// to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat stared at me for an hour, then knocked my coffee off the table like she'd just finished reading my performance review.";

// Gate: the entry must be 1–200 characters, a single line, not only whitespace.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || JOKE.includes("\n")) {
  throw new Error("joke violates the entry gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
