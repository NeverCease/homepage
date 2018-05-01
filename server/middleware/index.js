"use strict";



//  P A C K A G E S

import hbs from "hbs";
const log = console.log; // eslint-disable-line



//  P R O G R A M

module.exports = (app) => {

  app.use((req, res, next) => {
    res.header("X-Powered-By", app.locals.title); // Header
    next();
  });



  // Handlerbars helpers
  // via https://gist.github.com/pheuter/3515945#gistcomment-1378171
  hbs.registerHelper("compare", (lvalue, operator, rvalue, options) => {
    let operators;
    let result;

    if (arguments.length < 3) throw new Error(`Handlerbars Helper "compare" needs 2 parameters`);

    if (options === undefined) {
      options = rvalue;
      rvalue = operator;
      operator = "===";
    }

    operators = {
      "==":     (l, r) => l == r,
      "===":    (l, r) => l === r,
      "!=":     (l, r) => l != r,
      "!==":    (l, r) => l !== r,
      "<":      (l, r) => l < r,
      ">":      (l, r) => l > r,
      "<=":     (l, r) => l <= r,
      ">=":     (l, r) => l >= r,
      "typeof": (l, r) => typeof l == r
    };

    if (!operators[operator]) throw new Error(`Handlerbars Helper "compare" doesn't know the operator "${operator}"`);
    result = operators[operator](lvalue, rvalue);

    if (result) return options.fn(this);
    else return options.inverse(this);
  });

};
