import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My GPS says 'recalculating' so often I suspect it's stalling until I admit the wrong turn was mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
