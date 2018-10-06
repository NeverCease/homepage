"use strict";

//  P A C K A G E

import html from "choo/html";

//  E X P O R T

export default currentUrl => {
  const links = [
    {
      name: "About",
      title: "About Ideas Never Cease",
      url: "/about"
    },
    {
      name: "Projects",
      title: "Check out the Projects that Ideas Never Cease is working on!",
      url: "/projects"
    },
    {
      name: "Contact",
      title: "Have a question? Get the contact info for Ideas Never Cease here",
      url: "/contact"
    }
  ];

  return html`
    <nav class="header__navigation">
      ${links.map(link => renderLink(currentUrl, link))}
      <a class="header__navigation__item" data-toggle="navigation" href="#" title="Toggle navigation menu">Menu</a>
    </nav>

    <script>
      document.querySelector("[data-toggle='navigation']").addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(".header__navigation").classList.toggle("active");
      });
    </script>
  `;
};

//  H E L P E R

function renderLink(href, link) {
  let activeClass;

  switch (true) {
    case link.url !== "/" && href.indexOf(link.url) >= 0:
      activeClass = true;
      break;

    default:
      activeClass = false;
      break;
  }

  return html`
    <a
      class="header__navigation__item${activeClass ? " active" : ""}"
      href="${link.url}"
      title="${link.title}"
    >${link.name}</a>
  `;
}
