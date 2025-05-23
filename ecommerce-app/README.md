🛍️ E-Commerce App (CommerceTools Integration Project)

## 📖 Overview

This project is a modern e-commerce web application built with a scalable front-end architecture and integrated with the [CommerceTools](https://commercetools.com/) headless commerce platform. The primary goal of this project is to set up a professional development environment and ensure clean code practices, while leveraging powerful APIs for product, cart, and customer management.

Trello board-https://trello.com/b/IbuJxgT9/e-commerce-app-1-sprint

---

## 📌 Sprint 1 Objectives

This sprint focuses on:
- Repository setup with collaboration features
- Project management via task board
- CommerceTools project and API client creation
- Configuration of development tools: TypeScript, ESLint, Prettier, Husky, and Vitest/Jest

---

## 🧱 Technology Stack

| Area               | Technology            |
|--------------------|------------------------|
| Frontend Framework | React (or other)       |
| Commerce Platform  | [CommerceTools](https://commercetools.com/) |
| Bundler            | Vite        |
| Language           | TypeScript             |
| Linting            | ESLint                 |
| Code Formatter     | Prettier               |
| Git Hooks          | Husky                  |
| Testing            | Jest                   |
| Package Manager    | npm                    |




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

