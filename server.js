"use strict";



//  P A C K A G E S

const color = require("colorette");

const fastify = require("fastify")({
  logger: {
    level: "warn",
    prettyPrint: process.env.NODE_ENV === "development" ? true : false
  }
});



//  P R O G R A M

fastify.register(require("chewit/fastify"), {
  id: "5b88ddc225acf0538d8d4079"
});

fastify.register(require("fastify-compress"));

fastify.register(require("fastify-helmet"), {
  hidePoweredBy: { setTo: "!NC" }
});

fastify.register(require("fastify-static"), {
  root: `${__dirname}/app/dist/`,
  prefix: "/assets/"
});

fastify.register(require("choo-ssr/fastify"), {
  app: require("./app")
});

fastify.ready(err => {
  if (err) throw err;
});



//  B E G I N

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3003, process.env.IP || "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  process.stdout.write(`\n— ${color.green("⚡")} ${fastify.server.address().port}\n\n`);
};

start();
