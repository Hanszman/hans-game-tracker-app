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
  success: {
    strong: "#166534",
    default: "#16a34a",
    neutral: "#bbf7d0",
  },
  danger: {
    strong: "#991b1b",
    default: "#ef4444",
    neutral: "#fecaca",
  },
  warning: {
    strong: "#92400e",
    default: "#f59e0b",
    neutral: "#fde68a",
  },
  info: {
    strong: "#155e75",
    default: "#06b6d4",
    neutral: "#cffafe",
  },
  base: {
    strong: "#334155",
    default: "#64748b",
    neutral: "#cbd5e1",
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
