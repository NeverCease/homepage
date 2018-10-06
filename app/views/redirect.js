"use strict";



//  P A C K A G E S

import fs from "graceful-fs";
import { require as local } from "app-root-path";



//  E X P O R T

module.exports = exports = state => {
  if (!fs.existsSync(`./app/views/${state.params.wildcard}.js`))
    return local("app/views/nope")();

  return local(`app/views/${state.params.wildcard}`)();
};
