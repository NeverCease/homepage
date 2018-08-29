"use strict";



//  P A C K A G E

import html from "choo/html";



//  E X P O R T

module.exports = exports = (state, emit) => { // eslint-disable-line
  return html`
    <footer class="footer">
      <div class="inner-wrap">
        <small>&copy; Ideas Never Cease, LLC. All Rights Reserved.</small>
      </div>
    </footer>

    <script>
      const links = document.querySelectorAll("a[href]");

      for (const link of links) {
        if (link.href.indexOf(location.hostname) === -1) {
          link.target = "_blank";
        }
      }
    </script>
  `;
};
