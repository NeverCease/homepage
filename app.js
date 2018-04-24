/* jshint undef: true, unused: true, esversion: 6, -W098, -W097 */
/* global require, __dirname, module */



"use strict";

//
//  G E T
//  P A C K A G E S

const
  bodyParser = require("body-parser"),
  compression = require("compression"),
  cookieParser = require("cookie-parser"),
  express = require("express"),
  favicon = require("serve-favicon"),
  hbs = require("hbs"),
  hbsutils = require("hbs-utils")(hbs),
  logger = require("morgan"),
  minifyHTML = require("express-minify-html"),
  path = require("path");



//
//  I N I T

const app = express()
  .set("view engine", "html")
  .engine("html", hbs.__express)
  .set("views", path.join(__dirname, "views"))
  .set("layouts", path.join(__dirname, "/views/layouts"))

  .use(favicon(path.join(__dirname, "public/favicon.ico")))

  .use(logger("dev"))
  .use(compression())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "public")))
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

  // Custom header
  .use((req, res, next) => {
    res.header("X-Powered-By", "!NC");
    next();
  })

  // Customization
  .use((req, res, next) => {
    const result = {
      Title: "Ideas Never Cease",
      Tagline: "Delight, inform, and change the world",
      Description: "Our mission is simple: to delight, inform, and change the world. And then, other worlds."
    };

    app.set("result", result);
    next();
  });



//
//  P A R T I A L S
//

hbsutils.registerPartials(__dirname + "/views/partials");
hbsutils.registerWatchedPartials(__dirname + "/views/partials");



//
//  C O M P A R E
//  H E L P E R

// via https://gist.github.com/pheuter/3515945#gistcomment-1378171
hbs.registerHelper("compare", (lvalue, operator, rvalue, options) => {
  let
    operators,
    result;

  if (arguments.length < 3) {
    throw new Error("Handlerbars Helper \"compare\" needs 2 parameters");
  }

  if (options === undefined) {
    options = rvalue;
    rvalue = operator;
    operator = "===";
  }

  operators = {
    "==": (l, r) => {
      return l == r;
    },

    "===": (l, r) => {
      return l === r;
    },

    "!=": (l, r) => {
      return l != r;
    },

    "!==": (l, r) => {
      return l !== r;
    },

    "<": (l, r) => {
      return l < r;
    },

    ">": (l, r) => {
      return l > r;
    },

    "<=": (l, r) => {
      return l <= r;
    },

    ">=": (l, r) => {
      return l >= r;
    },

    "typeof": (l, r) => {
      return typeof l == r;
    }
  };

  if (!operators[operator]) {
    throw new Error("Handlerbars Helper \"compare\" doesn't know the operator " + operator);
  }

  result = operators[operator](lvalue, rvalue);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});



//
//  R O U T E S

const vendoRoutes = require("./routes");
vendoRoutes(app);



//
//  E R R O R   H A N D L I N G

if (typeof String.prototype.contains === "undefined") {
  String.prototype.contains = function (it) {
    return this.indexOf(it) != -1;
  };
}

if (typeof Array.prototype.contains === "undefined") {
  Array.prototype.contains = function (it) {
    for (var i in this) {
      var elem = this[i].toString();

      if (elem.contains(it)) {
        return true;
      }
    }

    return false;
  };
}

app.use((err, req, res, next) => {
  // console.log(err);

  if (err.stack.contains("Failed to lookup view")) {
    res.render("pages/error", Object.assign({ layout: "layouts/default", error: "This page doesn't exist" }));
  } else {
    res.render("pages/error", Object.assign({ layout: "layouts/default", error: err }));
  }
});



//
//  B E G I N

module.exports = app;
