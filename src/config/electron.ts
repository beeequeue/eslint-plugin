import type { ESLintConfig } from "eslint-define-config"

export const electron = {
  extends: [
    /** Configures import plugin for Electron */
    "plugin:import/electron",
  ],
} satisfies ESLintConfig
