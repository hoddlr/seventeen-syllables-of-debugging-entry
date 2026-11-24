import { mkdirSync, writeFileSync } from "node:fs";

// Seventeen syllables in all: five, seven, five — counted aloud twice.
const haiku = [
  "A print left in prod",
  "spills my secrets to the logs",
  "customers read first",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku.join("\n") + "\n", "utf8");
