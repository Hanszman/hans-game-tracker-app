import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ClientRoot } from "./ClientRoot";

const { setHansTheme, resetHansTheme } = vi.hoisted(() => ({
  setHansTheme: vi.fn(),
  resetHansTheme: vi.fn(),
}));

vi.mock("hans-ui-design-lib", () => ({
  HansButton: ({ label }: { label: string }) =>
    React.createElement("button", null, label),
  HansIcon: ({ name }: { name: string }) =>
    React.createElement("span", null, name),
  setHansTheme,
  resetHansTheme,
}));

describe("ClientButton", () => {
  it("Should render the dynamic theme example and apply theme on mount", () => {
    const { unmount } = render(React.createElement(ClientRoot));

    expect(
      screen.getByText(/Dynamic combination override on top of/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText('data-theme="combination1"'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Track game" }),
    ).toBeInTheDocument();
    expect(setHansTheme).toHaveBeenCalledTimes(1);

    unmount();

    expect(resetHansTheme).toHaveBeenCalledTimes(1);
  });
});
