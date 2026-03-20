import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("Should render the home content", () => {
    expect(renderToStaticMarkup(React.createElement(Home))).toContain("HOME");
  });
});
