import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const publicDir = join(root, "public");
const outDir = join(root, ".output", "public");

if (!existsSync(outDir)) {
  console.error("Missing build output:", outDir);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

// Re-copy binary/static files after prerender so they are never overwritten.
const files = [
  "Farshad_Sangari_CV.pdf",
  "favicon.ico",
  "favicon.svg",
  "robots.txt",
];

for (const file of files) {
  const from = join(publicDir, file);
  const to = join(outDir, file);
  if (!existsSync(from)) {
    console.warn("Skip missing public asset:", file);
    continue;
  }
  copyFileSync(from, to);
  console.log("Restored", file);
}
