"use strict";



//  I M P O R T

import { h } from "@composi/core";

//  U T I L

const projects = [
  {
    description: "Ad network for !NC, to be open-sourced later",
    name: "Ad Network",
    status: "Paused",
    url: "",
    urlTitle: ""
  },
  {
    description: "Default web browser for hikari",
    name: "Aries",
    status: "Paused",
    url: "https://git.inc.sh/hikari/Aries",
    urlTitle: "Source code for Aries Browser"
  },
  {
    description: "A domain portfolio management tool",
    name: "Beachfront",
    status: "Progressing",
    url: "https://beachfront.digital",
    urlTitle: "Sign up for BeachfrontDigital's beta!"
  },
  {
    description: "Simple web app deployment",
    name: "Brisk",
    status: "Ideation",
    url: "",
    urlTitle: ""
  },
  {
    description: "Analytics you can count on",
    name: "Chew",
    status: "Progressing",
    url: "https://chew.sh",
    urlTitle: "Sign up for Chew's alpha!"
  },
  {
    description: "Design Services for the Good Natured",
    name: "DSGN",
    status: "Active",
    url: "https://dsgn.io",
    urlTitle: "The design studio behind everything !NC designs"
  },
  {
    description: "Music production and releases",
    name: "FRSH×BTS",
    status: "Paused",
    url: "https://thewibby.bandcamp.com",
    urlTitle: "Check out my music!"
  },
  {
    description: "Open-source operating system",
    name: "hikari",
    status: "Paused",
    url: "https://hikar.io",
    urlTitle:
      "This operating system passion project was inspired by Megaman Battle Network"
  },
  {
    description: "No configuration process management for servers",
    name: "Honk",
    status: "Ideation",
    url: "",
    urlTitle: ""
  },
  {
    description: "Content Management System",
    name: "Noto",
    status: "Paused",
    url: "",
    urlTitle: ""
  },
  {
    description: "IMAP client",
    name: "Pidge",
    status: "Progressing",
    url: "",
    urlTitle: ""
  },
  {
    description:
      "A better social network, focused on users' privacy and security",
    name: "Socii",
    status: "Progressing",
    url: "https://socii.network",
    urlTitle: "I got tired of dealing with Big Social so I made an alternative"
  },
  {
    description: "eCommerce platform",
    name: "VendoMarket",
    status: "Paused",
    url: "",
    urlTitle: ""
  },
  {
    description: "Our founder's fantastic blog",
    name: "theWebb.blog",
    status: "Active",
    url: "https://thewebb.blog",
    urlTitle: "Musings and rants by The Most Fantabulous"
  },
  {
    description: "Space-centric lifestyle brand",
    name: "WEÖM",
    status: "Paused",
    url: "https://weom.space",
    urlTitle:
      "Wisdom Escapes Ordinary Minds is a dope brand, and our snapback is super popular"
  }
];



//  E X P O R T

export default function() {
  return (<RenderProjects />);
}



//  H E L P E R

function RenderProjects() {
  const projectItems = projects.map(project => {
    return (
      <div class="grid">
        <div class="col">{project.name}</div>
        <div class="col">{project.description}</div>
        <div class="col">
          {project.urlTitle ?
            <a href={(project.url)} title={(project.urlTitle)}>
              {project.url.replace("https://", "")}
            </a> :
            "—"
          }
        </div>
        <div class={"col" + (" " + project.status.toLowerCase())}>{project.status}</div>
      </div>
    );
  });

  return (
    <span>
      <section class="table inner-wrap">
        <div class="grid">
          <div class="col">Project Name</div>
          <div class="col">Description</div>
          <div class="col">URL</div>
          <div class="col">Status</div>
        </div>

        {projectItems}
      </section>

      <section class="inner-wrap">
        <p>There is only so much one person with varied interests can do at one time. So, this list shifts a fair bit.</p>
      </section>
    </span>
  );
}
