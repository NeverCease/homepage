"use strict";



//  I M P O R T S

import * as sapper from "@sapper/server";
import compression from "compression";
import polka from "polka";
import sirv from "sirv";



//  U T I L S

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";



//  P R O G R A M

polka()
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .get("*", () => {})
  .listen(PORT, err => {
    if (err)
      console.log("error", err);
  });


// 5ae8a853b13869077c37f622 // Chew ID
