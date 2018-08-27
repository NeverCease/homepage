"use strict";



//  P A C K A G E S

import choo from "choo";
import devtools from "choo-devtools";

//  V A R I A B L E

import wrapper from "./components/wrapper";



//  P R O G R A M

function main() {
  const app = choo();
  if (process.env.NODE_ENV !== "production") app.use(devtools());

  /*
  const app = async(choo());

  app.use(ssr());
  app.use(data());
  app.use(bundles());

  const page = content => (html(
    ssr.head(
      head(),
      bundles.assets()
    ),
    ssr.body(
      async.catch(
        layout(content),
        require("./views/pages/error")(app)
      ),
      ssr.state()
    )
  ));
  */

  app.route("/", wrapper(require("./views/home")));
  app.route("/*", wrapper(require("./views/redirect")));

  return app;
}

if (typeof window !== "undefined") {
  const app = main();
  app.mount("html");
}



//  E X P O R T

module.exports = exports = main;
