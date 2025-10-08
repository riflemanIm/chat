import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import pkg from "./package.json" with { type: "json" };

// Всё, что хотим оставить внешним (не бандлить):
// Фреймворк/рендер, MUI, Emotion и ваши внутренние пакеты.
const peerDeps = Object.keys(pkg.peerDependencies ?? {});
const external = (id: string): boolean =>
  peerDeps.some((dep) => id === dep || id.startsWith(`${dep}/`));

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      entryRoot: "src",
      outDir: "dist",
      insertTypesEntry: true,
      copyDtsFiles: true,
      // Если у вас есть .vue/.mdx — добавьте includePatterns
    }),
  ],
  build: {
    // Режим библиотеки — единственная точка входа
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Mobimed",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "mobimed.esm.js" : "index.cjs"),
    },
    rollupOptions: {
      external,
      output: {
        // чтобы externals корректно резолвились в CJS
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // при необходимости можно включить preserveModules
        // preserveModules: true,
      },
    },
    sourcemap: true,
    minify: "esbuild",
    target: "es2020",
    // для библиотек обычно не нужен assetsInlineLimit большой
  },
  // Ускоряет резолв под библиотечный use-case
  resolve: {
    conditions: ["module", "import", "default"],
  },
  // Если используется process.env.* в коде, можно раскомментировать:
  // define: {
  //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'production'),
  // },
});
