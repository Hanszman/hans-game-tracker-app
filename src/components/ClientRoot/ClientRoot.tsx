"use client";
import React, { useEffect } from "react";
import * as HansUiDesignLib from "hans-ui-design-lib";

const GAME_TRACKER_THEME = {
  primary: {
    strong: "#14532d",
    default: "#22c55e",
    neutral: "#bbf7d0",
  },
  secondary: {
    strong: "#1d4ed8",
    default: "#3b82f6",
    neutral: "#bfdbfe",
  },
  backgroundColor: "#f8fafc",
  textColor: "#0f172a",
};
const themeApi = HansUiDesignLib as typeof HansUiDesignLib & {
  setHansTheme?: (theme: typeof GAME_TRACKER_THEME) => void;
  resetHansTheme?: () => void;
};

export function ClientRoot() {
  const { HansButton, HansIcon } = HansUiDesignLib;

  useEffect(() => {
    themeApi.setHansTheme?.(GAME_TRACKER_THEME);

    return () => {
      themeApi.resetHansTheme?.();
    };
  }, []);

  return (
    <>
      <p>
        Dynamic combination override on top of <code>data-theme=&quot;combination1&quot;</code>
      </p>
      <HansButton label="Track game" />
      <HansButton label="Sync library" buttonColor="secondary" />
      <HansIcon name="FaGamepad" />
    </>
  );
}
