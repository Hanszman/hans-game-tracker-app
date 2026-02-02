# Hans Game Tracker App

A **Next.js + React + TypeScript Front-End App** that can organize your game backlog!

## 🚀 Features

- ⚛️ **Next.js 15.5.5** with **React 19.1.0** and **TypeScript 5** for type safety
- 🎨 **TailwindCSS + SCSS** for styling flexibility
- ✅ **Vitest + React Testing Library + JSDOM** for unit and integration testing
- 📊 **Test Coverage (V8)** with HTML reports
- 🧹 **ESLint + Prettier** for code quality and formatting
- ♾️ Deployed by **Vercel** at https://hans-game-tracker.vercel.app/
- **Node Version to build this project: 22.18.0 and npm 11.8.0**

## 🧑‍💻 Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/Hanszman/hans-game-tracker-app.git
cd hans-game-tracker-app
npm install
```

Start the dev server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

Run tests with coverage:

```bash
npm run test:coverage
```

Lint code:

```bash
npm run lint
```

Build the package:

```bash
npm run build
```

Start the server (after build):

```bash
npm run start
```

## 🛠️ Tech Stack

- **Next.js 15.5.5**
- **React 19.1.0**
- **TypeScript 5**
- **TailwindCSS**
- **SCSS**
- **Vitest**
- **React Testing Library**
- **JSDOM**
- **ESLint (flat config)**
- **Prettier**

## 📜 History of commands used to build this project:

```bash
npx create-next-app@latest hans-game-tracker-app

npm i -D sass

npm i -D hans-ui-design-lib

npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

npm i -D @vitest/coverage-v8 @vitest/ui

npm install next@15.5.7 react@19.1.5 react-dom@19.1.5 eslint-config-next@15.5.7
```
