import { defineConfig } from "vite";
import path from "path";
import { readdirSync } from "fs";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";
const absolutePathAliases: { [key: string]: string } = {};
// Root resources folder
const srcPath = path.resolve("./src/");
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
  (dirent) => dirent.name.replace(/(\.ts){1}(x?)/, "")
);

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

export default defineConfig({
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },

  build: {
    outDir: "./dist",
  },
  plugins: [reactRefresh(), tailwindcss()],
});
