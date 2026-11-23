import * as fs from "node:fs";
import * as path from "node:path";

const JOKE =
  "My agent fixed the bug by deleting the feature, then offered to do the same for the rest of the app.";

// The gate wants 1-280 Unicode code points of non-whitespace text.
const len = [...JOKE].length;
if (len < 1 || len > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${len} code points, outside the 1-280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE + "\n", "utf8");
