# AGENTS.md - Developer Guide

## Commands
- **Dev**: `npm start` - Runs dev server at http://localhost:3000
- **Build**: `npm run build` - Production build to `build/` folder
- **Test**: `npm test` - Interactive test runner (Jest via react-scripts)
- **Test single**: `npm test -- --testNamePattern="test name"` or `npm test path/to/test.test.js`

## Architecture
- **Framework**: Create React App (CRA) with React 18.2.0 and react-router-dom v6
- **Structure**: `/src/paginas/` contains page components organized by feature
- **Routing**: Centralized in `App.js` using react-router-dom's BrowserRouter
- **Entry**: `index.js` renders App with StrictMode

## Code Style
- **Components**: Default exports, PascalCase for component names
- **Directories**: PascalCase for component folders (e.g., `Inicio/`, `SobreMim/`)
- **Imports**: React first, then libraries, then local imports
- **Exports**: Use `export default function ComponentName()` pattern
- **File naming**: `index.js` for main component files
- **No TypeScript**: Pure JavaScript project
- **ESLint**: Configured via react-app preset (extends react-app, react-app/jest)
