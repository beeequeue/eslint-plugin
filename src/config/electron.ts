import type { ESLintConfig } from "eslint-define-config"

export const electron: ESLintConfig = {
  extends: [
    /** Configures import plugin for Electron */
    "plugin:import/electron",
  ],
}
