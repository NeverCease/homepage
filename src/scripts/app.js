"use strict";



//  I M P O R T S

import {
  h,
  render,
  run
} from "@composi/core";

//  U T I L S

import Footer from "./components/footer";
import Main from "./components/main";
import Navigation from "./components/navigation";

const state = {
  currentPath: window.location.pathname
};



//  P R O G R A M

const program = {
  init() {
    return [state];
  },
  view(state, send) {
    return render(<IdeasNeverCease {...{ state, send }} />, "body");
  }
};

run(program);



//  H E L P E R

function IdeasNeverCease({ state }) {
  const { currentPath } = state;

  return (
    <span id="app">
      <header class="header">
        <div class="inner-wrap">
          <h1 class="header__logo">
            <a href="/" title="Ideas Never Cease homepage">Ideas Never Cease</a>
          </h1>

          <Navigation {...{ currentPath }} />
        </div>
      </header>

      <Main {...{ currentPath }} />

      <Footer />
    </span>
  );
}

// function test() {
//   const links = document.querySelectorAll("a[href]");

//   for (const link of links) {
//     if (link.href.indexOf(location.hostname) === -1)
//       link.target = "_blank";
//   }
// }
