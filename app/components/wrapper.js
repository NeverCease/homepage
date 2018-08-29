"use strict";



//  P A C K A G E

import asyncHtml from "choo-async/html";

//  V A R I A B L E S

import footer from "./footer";
import Navigation from "./navigation";

const navigation = new Navigation();



//  E X P O R T

module.exports = exports = children => (state, emit) => {
  const route = state.href.split("/")[1];
  let contentClass = "";

  // Dynamically add class based on viewed page
  if (route !== undefined) contentClass = ` class=${route}`;
  else contentClass = " class=homepage";

  return asyncHtml`
    <header class="header">
      <div class="inner-wrap">
        <h1 class="header__logo">
          <a href="/" title="Ideas Never Cease homepage">Ideas Never Cease</a>
        </h1>

        ${navigation.render({ href: state.href || "/" })}
      </div>
    </header>

    <main${contentClass}>
      ${children(state, emit)}
    </main>

    ${footer(state, emit)}
  `;
};
