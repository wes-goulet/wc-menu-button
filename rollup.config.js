import autoprefixer from "autoprefixer";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";

import projectPackage from "./package.json";

const componentName = projectPackage.name;
const version = projectPackage.version;

const iifeName = componentName
  .split("-")
  .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
  .join("");

const footer = `/* @preserve v${version} */`;

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
  input: `lib/element.ts`,
  output: {
    file: `dist/esm/${componentName}.js`,
    format: "esm",
    footer,
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
    file: `dist/esm/${componentName}.min.js`,
    format: "esm",
    footer,
  },
};

const iife = {
  ...esm,
  output: {
    file: `dist/iife/${componentName}.js`,
    format: "iife",
    name: iifeName,
    footer,
  },
};

const iifeMin = {
  ...esmMin,
  output: {
    file: `dist/iife/${componentName}.min.js`,
    format: "iife",
    name: iifeName,
    footer,
  },
};

export default [esm, esmMin, iife, iifeMin];
