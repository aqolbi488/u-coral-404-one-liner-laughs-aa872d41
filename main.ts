import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I taught my cat to high-five and now she slaps every house guest like she's collecting a toll.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
