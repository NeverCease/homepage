"use strict";



//  I M P O R T

import { h } from "@composi/core";

//  U T I L S

import about from "../views/about";
import contact from "../views/contact";
import home from "../views/home";
import nope from "../views/nope";
import projects from "../views/projects";



//  E X P O R T

export default function Main({ currentPath }) {
  return (<RenderPage current={currentPath} />);
}



//  H E L P E R

function RenderPage(props) {
  const path = props.current;
  const className = path.replace(path.charAt(0), "");

  switch(true) {
    case path === "/":
      return (
        <main class="homepage">
          {home()}
        </main>
      );

    case path === "/about":
      return (
        <main class={className}>
          {about()}
        </main>
      );

    case path === "/contact":
      return (
        <main class={className}>
          {contact()}
        </main>
      );

    case path === "/projects":
      return (
        <main class={className}>
          {projects()}
        </main>
      );

    default:
      return (
        <main class="nope">
          {nope()}
        </main>
      );
  }
}
