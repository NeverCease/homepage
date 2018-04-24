/* jshint undef: true, unused: true, esversion: 6 */
/* global module */



module.exports = (app) => {

  //
  //  H O M E P A G E

  app.get("/", (req, res) => {
    res.render("index", Object.assign({
      layout: "layouts/homepage"
    }, app.get("result")));
  });



  //
  //  P A G E

  app.get("/:page", (req, res) => {
    res.render("pages/" + req.params.page, Object.assign({
      layout: "layouts/default",
      activePage: req.params.page
    }, app.get("result")));
  });

};
