"use strict";



//  P A C K A G E S

import asyncHtml from "choo-async/html";
import { require as local } from "app-root-path";

//  V A R I A B L E S

const footer = local("app/components/footer").default;
const navigation = local("app/components/navigation").default;



//  E X P O R T

export default children => (state, emit) => {
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

        ${navigation(state.href)}
      </div>
    </header>

    <main${contentClass}>
      ${children(state, emit)}
    </main>

    ${footer()}
  `;
};
