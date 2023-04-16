import { defineConfig } from "tsup";

export default defineConfig({
    entry: { index: "src/main.ts" },
    outDir: "./dist/"
})