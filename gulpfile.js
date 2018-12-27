"use strict";



//  N A T I V E

const fs = require("fs");

//  P A C K A G E S

const babel = require("rollup-plugin-babel");
const browserSync = require("browser-sync");
const commonjs = require("rollup-plugin-commonjs");
const gulp = require("gulp");
const gzip = require("gulp-gzip");
const historyFallback = require("connect-history-api-fallback");
const minify = require("rollup-plugin-babel-minify");
const resolve = require("rollup-plugin-node-resolve");
const rollup = require("rollup");
const sass = require("sass");

//  U T I L S

const port = process.env.PORT || 3003;
const server = browserSync.create();



//  P R O G R A M

gulp.task("build:js", done => {
  rollup.rollup({
    input: "./src/scripts/app.js",
    plugins: [
      babel(),
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      minify({
        mangle: { topLevel: true },
        comments: false
      })
    ]
  })
    .then(bundle => {
      return bundle.write({
        format: "iife",
        name: "app",
        file: "./dist/scripts/app.js",
        sourcemap: true
      });
    })
    .then(() => {
      return gulp.src("./dist/scripts/app.js")
        .pipe(gzip({ extension: "gzip" }))
        .pipe(gulp.dest("./dist/scripts"));
    })
    .then(() => {
      done();
    });
});

gulp.task("build:css", done => {
  if (!fs.existsSync("./dist/css"))
    fs.mkdirSync("./dist/css");

  sass.render({
    file: "./src/sass/bundle.scss",
    outFile: "./dist/css/bundle.css",
    outputStyle: "compressed"
  }, (renderError, result) => {
    if (renderError) throw "Error rendering bundled CSS";

    fs.writeFile("./dist/css/bundle.css", result.css, writeError => {
      if (writeError) throw "Error writing CSS to disk";

      gulp.src("./dist/css/*.css")
        .pipe(gzip({ extension: "gzip" }))
        .pipe(gulp.dest("./dist/css"));
    });
  });

  done();
});

gulp.task("move-images", done => {
  gulp.src(["./src/images/*", "./src/images/**/*"])
    .pipe(gulp.dest("./dist/images"));
  done();
});

gulp.task("watch", done => {
  gulp.watch("./index.html").on("change", reload);
  gulp.watch(["./src/scripts/app.js", "src/scripts/**/*"]).on("change", gulp.series("build:js", reload));
  gulp.watch(["./src/sass/*.scss", "./src/sass/**/*.scss"]).on("change", gulp.series("build:css", reload));
  done();
});

// Process app.js and load page in browser:
gulp.task("default", gulp.series("build:js", "build:css", "move-images", "watch", serve), done => {
  done();
});

gulp.task("fresh-build", gulp.series("build:js", "build:css", "move-images"), done => {
  done();
});

// Create production-ready version of this project
gulp.task("production", done => {
  gulp.src(["./dist/*", "./dist/**/*", "./dist/**/**/*"])
    .pipe(gulp.dest("./production/dist"));

  gulp.src("./src/humans.txt")
    .pipe(gulp.dest("./production"));

  gulp.src("./index.html")
    .pipe(gulp.dest("./production"));

  done();
});



//  H E L P E R S

function reload() {
  server.reload();
}

function serve(done) {
  server.init({
    port,
    server: {
      baseDir: "./",
      open: false,
      middleware: [
        historyFallback()
      ]
    }
  });

  done();
}
