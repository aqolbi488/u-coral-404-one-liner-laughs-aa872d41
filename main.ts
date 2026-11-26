import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My Wi-Fi quits whenever my in-laws visit — the only boundary my router has ever respected.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
