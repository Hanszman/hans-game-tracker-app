import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import RootLayout from "./layout";

vi.mock("@/components/ClientRoot/ClientRoot", () => ({
  ClientRoot: () => React.createElement("div", null, "ClientRoot mock"),
}));

vi.mock("hans-ui-design-lib/style.css", () => ({}));
vi.mock("./globals.css", () => ({}));

describe("RootLayout", () => {
  it('Should render html with the default data-theme and project content', () => {
    const markup = renderToStaticMarkup(
      React.createElement(
        RootLayout,
        null,
        React.createElement("main", null, "Child content"),
      ),
    );

    expect(markup).toContain('data-theme="combination1"');
    expect(markup).toContain("TESTE:");
    expect(markup).toContain("ClientRoot mock");
    expect(markup).toContain("Child content");
  });
});
