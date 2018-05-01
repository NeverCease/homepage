"use strict";



//  P A C K A G E S

import bodyParser from "body-parser";
import chalk from "chalk";
import chew from "chewit";
import compress from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import hbs from "hbs";
import hbsutils from "hbs-utils";
import minifyHTML from "express-minify-html";

//  V A R I A B L E S

const handlebars = hbsutils(hbs);
const log = console.log; // eslint-disable-line



//  P R O G R A M

const app = express()
  .use(compress())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use("/", express.static("./public"))
  .use(cookieParser())
  .set("view engine", "html")
  .set("views", "./views")
  .set("layouts", "./views/layouts")
  .set("port", (process.env.PORT || 3003))
  .engine("html", hbs.__express)
  .use(minifyHTML({
    override: true,
    htmlMinifier: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      keepClosingSlash: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      minifyJS: true
    }
  }))
  .use(chew("5ae8a853b13869077c37f622"))
;



//  R E J E C T I O N
//  ~ H A N D L I N G

process.on("unhandledRejection", (reason, p) => {
  log(
    `${chalk.red("▸▸ Unhandled promise rejection")}\n`,
    `${chalk.magenta("▸▸▸▸", reason)}\n\n`, p,
    `\n\n${chalk.magenta("◂◂◂◂")}\n\n`
  );
});



//  G L O B A L S

app.locals.title = "Ideas Never Cease";
app.locals.tagline = "Delight, inform, and change the world";
app.locals.description = "Our mission is simple: to delight, inform, and change the world. And then, other worlds.";



//  P A R T I A L S

handlebars.registerPartials("./views/partials");
handlebars.registerWatchedPartials("./views/partials");



//  M I D D L E W A R E

import middleware from "./middleware";
middleware(app);



//  R O U T E S

import routes from "./routes";
routes(app);



//  B E G I N

const promise = new Promise(resolve => {
  const server = app.listen(app.get("port"));

  server.on("listening", function () {
    log(`\n${chalk.yellow("▸", app.locals.title, "⚡", app.get("port"))}\n`);
    resolve(server);
  });
});

module.exports = promise;
