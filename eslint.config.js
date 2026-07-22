import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      // Mengabaikan variabel/import tidak terpakai agar tidak memicu error merah (bisa diset 'off' atau 'warn')
      "no-unused-vars": "warn",

      // Mematikan kewajiban 'import React from "react"' di React 17+
      "react/react-in-jsx-scope": "off",

      // Mematikan peringatan 'missing display name' pada memo()
      "react/display-name": "off",

      // Mematikan pemeriksaan prop-types jika tidak menggunakan TypeScript/PropTypes ketat
      "react/prop-types": "off",

      // Mematikan peringatan 'missing displayName' pada class component
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
