"use strict";



//  P A C K A G E

const log = console.log; // eslint-disable-line



//  P R O G R A M

module.exports = (app) => {

  //  H O M E P A G E

  app.get("/", (req, res) => {
    res.render("index", {
      layout: "layouts/home"
    });
  });



  //  P A G E

  app.get("/:page", (req, res) => {
    res.render(`pages/${req.params.page}`, Object.assign({
      layout: "layouts/default"
    }));
  });

};
