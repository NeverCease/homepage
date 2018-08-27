"use strict";



//  P A C K A G E S

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";



//  E X P O R T

export default [
  { // choo
    external: [
      // "app-root-path",
      "@babel/register",
      // "@babel/polyfill",
      "choo",
      "choo/html",
      "choo/html/raw",
      "choo-devtools",
      "graceful-fs",
      "nanocomponent",
      "xtend"
    ],
    input: "app/index.js",
    output: [{
      file: "app/dist/bundle.js",
      format: "cjs",
      name: "inc",
      globals: {
        "@babel/plugin-external-helpers": "babelHelpers",
        choo: "choo",
        "choo-devtools": "chooDevtools",
        "choo/html": "html"
      }
    }],
    plugins: [
      babel({
        babelrc: false,
        exclude: [
          "node_modules/**",
          "app/sass/**"
        ],
        presets: [["@babel/env", { modules: false }]],
        runtimeHelpers : true
      }),
      resolve(),
      commonjs(),
      (process.env.NODE_ENV !== "development" && uglify()) // only minify in production
    ]
  }
];
