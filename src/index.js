import React, { Component } from "react";
import { render } from "react-dom";

const node = document.getElementById("root");
const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello, world!",
    React.createElement(
      "a",
      { href: "mailto:keenanrc@hotmail.com" },
      React.createElement("h1", {}, "React In Action"),
      React.createElement("em", {}, "...and now it really is!")
    )
  )
);

render(root, node);
