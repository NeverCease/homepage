"use strict";



//  I M P O R T

import { h } from "@composi/core";

//  U T I L

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



//  E X P O R T

export default function Navigation({ currentPath }) {
  return (<RenderNavigation current={currentPath} />);
}



//  H E L P E R S

function RenderNavigation(props) {
  const listItems = links.map(link => (
    <a
      class={"header__navigation__item" + (props.current.indexOf(link.url) >= 0 ? " active" : "")}
      href={link.url}
      title={link.title}
    >{link.name}</a>
  ));

  return (
    <nav class="header__navigation">
      {listItems}

      <a
        class="header__navigation__item"
        data-toggle="navigation"
        href="#"
        onClick={toggleNavigation}
        title="Toggle navigation menu"
      >Menu</a>
    </nav>
  );
}

function toggleNavigation(event) {
  event.preventDefault();
  document.querySelector(".header__navigation").classList.toggle("active");
}
