"use strict";



//  P A C K A G E S

import html from "choo/html";

//  V A R I A B L E

let title = "Ideas Never Cease";



//  E X P O R T

export default function head(state, emit) {
  if (state.route !== "/" && state.params.wildcard) title = `${state.params.wildcard.capitalize()} ∙ Ideas Never Cease`;
  else title = "Ideas Never Cease";

  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title);
  state.page = state.page || { };

  // TODO:
  // - Support custom metadata (descriptions and whatnot)

  return html`
    <meta charset="utf-8"/>
    <title>${title}</title>

    <!--/ IDEAS NEVER CEASE
    //////// 01101001 01101110 01100011
    /-->

    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="author" content="Paul Anthony Webb"/>
    <meta name="description" content="Ideas Never Cease (!NC) is a holding company for whatever comes into the mind of Paul Anthony Webb."/>
    <meta name="keywords" content="!nc, ideas, inc, never cease"/>
    <meta name="title" content="Ideas Never Cease"/>
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/>

    <!--/ Open Graph /-->
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Ideas Never Cease"/>
    <meta property="og:url" content="url"/>
    <meta property="og:site_name" content="Ideas Never Cease"/>
    <meta property="og:image" content="/assets/images/apple-touch-icon.png"/>
    <meta property="og:locale" content="en_US"/>

    <!--/ Social/App Stuff /-->
    <meta name="apple-mobile-web-app-title" content="Ideas Never Cease"/>
    <meta name="application-name" content="Ideas Never Cease"/>
    <meta name="msapplication-TileColor" content="#010000"/>
    <meta name="msapplication-TileImage" content="/assets/images/apple-touch-icon.png"/>
    <meta name="theme-color" content="#010000"/>
    <meta name="socii:site" content="∴ inc"/>

    <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png"/>
    <link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml"/>
    <link rel="mask-icon" href="/assets/images/favicon.svg" color="#010000"/>

    <link href="//brick.a.ssl.fastly.net/Karla:400,700,400i,700i" rel="stylesheet"/>
    <link href="/assets/bundle.css" rel="stylesheet"/>

    <script src="/assets/bundle.js"></script>
  `;
}



//  H E L P E R

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
