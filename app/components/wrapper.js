"use strict";



//  P A C K A G E

import html from "choo/html";

//  V A R I A B L E S

import head from "./head";
import Navigation from "./navigation";

const navigation = new Navigation();



//  E X P O R T

export default function wrapper(view) {
  return (state, emit) => {
    // TODO: add body class based on `state.params.href | state.href`
    // console.log(state.href);

    return html`
      <head>
        ${head(state, emit)}
      </head>

      <body>
        <header class="header">
          <div class="inner-wrap">
            <h1 class="header__logo">
              <a href="/" title="Ideas Never Cease homepage">Ideas Never Cease</a>
            </h1>

            ${navigation.render({ href: state.href || "/" })}
          </div>
        </header>

        ${view(state, emit)}
      </body>
    `;
  };
}
