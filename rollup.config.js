import autoprefixer from "autoprefixer";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";

const esm = {
  plugins: [
    typescript({
      useTsconfigDeclarationDir: false,
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extensions: [".css"],
      inject: false,
    }),
    string({
      include: "**/template.html",
    }),
  ],
  input: "lib/wc-menu-button.ts",
  output: {
    file: "dist/esm/wc-menu-button.js",
    format: "esm",
  },
};

const esmMin = {
  ...esm,
  plugins: [
    ...esm.plugins,
    terser({
      compress: { ecma: 6 },
    }),
  ],
  output: {
    file: "dist/esm/wc-menu-button.min.js",
    format: "esm",
  },
};

const iife = {
  ...esm,
  output: {
    file: "dist/iife/wc-menu-button.js",
    format: "iife",
    name: "WcMenuButton",
  },
};

const iifeMin = {
  ...esmMin,
  output: {
    file: "dist/iife/wc-menu-button.min.js",
    format: "iife",
    name: "WcMenuButton",
  },
};

export default [esm, esmMin, iife, iifeMin];
