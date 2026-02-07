# Force UI - Internal Documentation

Welcome to the Force UI internal documentation! This guide is designed for developers, contributors, and AI coding agents working with the Force UI component library.

## What is Force UI?

Force UI (`@bsf/force-ui`) is a comprehensive React component library built with TypeScript and Tailwind CSS. It provides 40+ production-ready UI components designed for Brainstorm Force (BSF) products and WordPress admin interfaces.

**Key Features:**
- 🎨 40+ customizable React components
- ⚡ Built with TypeScript for type safety
- 🎭 Tailwind CSS-powered styling system
- 📚 Storybook documentation and visual testing
- 🧪 Automated testing with Playwright
- 📦 Dual-format distribution (ESM + CJS)
- ♿ Accessibility-first design (a11y addon)

**Current Version:** 1.5.0
**Repository:** [brainstormforce/force-ui](https://github.com/brainstormforce/force-ui)
**Package:** `@bsf/force-ui`

## Quick Start

### For New Developers

1. **Clone the repository:**
   ```bash
   git clone https://github.com/brainstormforce/force-ui.git
   cd force-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Storybook (development):**
   ```bash
   npm run storybook
   ```
   Opens at http://localhost:6006

4. **Build the library:**
   ```bash
   npm run build
   ```

### For Consumers

Install Force UI in your project:

```bash
npm install @bsf/force-ui@git+https://github.com/brainstormforce/force-ui.git#1.5.0
```

Configure Tailwind with Force UI's theme:

```js
// tailwind.config.js
const withTW = require('@bsf/force-ui/withTW');

module.exports = withTW({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Your custom theme extensions
});
```

Use components:

```jsx
import { Button, Alert, Dialog } from '@bsf/force-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Alert type="success">Operation completed!</Alert>
    </div>
  );
}
```

## Documentation Structure

This internal documentation is organized into focused guides:

### Core Documentation

- **[Product Vision](product-vision.md)** - Product goals, user personas, design philosophy
- **[Architecture](architecture.md)** - High-level system architecture and component design patterns
- **[Codebase Map](codebase-map.md)** - Folder structure and file organization
- **[APIs](apis.md)** - Component APIs, hooks, utilities, and type definitions
- **[Coding Standards](coding-standards.md)** - TypeScript, React, and styling conventions
- **[UI and Copy](ui-and-copy.md)** - Design system principles and component patterns

### Developer Resources

- **[Onboarding](onboarding.md)** - Learning paths: 1-hour, 1-day, 1-week
- **[AI Agent Guide](ai-agent-guide.md)** - How AI coding agents should work with Force UI
- **[Troubleshooting](troubleshooting.md)** - Common issues and solutions
- **[FAQ](faq.md)** - Frequently asked questions
- **[Glossary](glossary.md)** - Technical terms and acronyms
- **[Maintenance](maintenance.md)** - Keeping this documentation up to date

## Common Tasks

### Running Tests

```bash
# Run Storybook tests
npm test

# Run tests in watch mode
npm run test:watch

# Run visual regression tests (Chromatic)
npm run chromatic
```

### Linting and Formatting

```bash
# Check code formatting
npm run pretty-lint

# Fix formatting issues
npm run pretty-fix

# Lint JavaScript/TypeScript
npm run lint:js

# Lint CSS/SCSS
npm run lint:css
```

### Building and Releasing

```bash
# Build the library (TypeScript + Vite)
npm run build

# Create release ZIP
npm run package

# Full release (build + package)
npm run release
```

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Language** | TypeScript 5.4.2 |
| **Framework** | React 18.3.1 |
| **Styling** | Tailwind CSS 3.4, Styled Components 6.1 |
| **Build Tool** | Vite 5.4 |
| **Documentation** | Storybook 8.3 |
| **Testing** | Playwright 1.48, Storybook Test Runner |
| **Code Quality** | ESLint, Prettier, Stylelint |
| **Package Manager** | npm |
| **Node Version** | 18.15.0 (Volta) |

## Project Philosophy

Force UI is guided by four core principles:

1. **Walk in Users' Shoes** - Every design decision puts users first
2. **Clean, Lean, and Speed** - Optimized for performance and efficiency
3. **Good Design is Our Core** - Functional elegance in every detail
4. **Simplicity Reigns** - Complex challenges, straightforward solutions

See [.github/PHILOSOPHY.md](../.github/PHILOSOPHY.md) for the full philosophy.

## Getting Help

- **Documentation Issues:** [GitHub Issues](https://github.com/brainstormforce/force-ui/issues)
- **Component Examples:** Run `npm run storybook` and browse interactive examples
- **Contributing:** See [.github/CONTRIBUTING.md](../.github/CONTRIBUTING.md)
- **Code of Conduct:** [.github/CODE_OF_CONDUCT.md](../.github/CODE_OF_CONDUCT.md)

## Next Steps

Choose your path based on your role:

- **New Developer?** → Start with [Onboarding](onboarding.md)
- **Contributing Code?** → Read [Coding Standards](coding-standards.md)
- **Building with Force UI?** → Check [APIs](apis.md) and [UI Patterns](ui-and-copy.md)
- **AI Agent?** → Follow the [AI Agent Guide](ai-agent-guide.md)
- **Troubleshooting?** → See [Common Issues](troubleshooting.md)

---

**Note:** This is internal documentation for development purposes only. It is excluded from production builds via `.distignore`.

Last updated: February 2026
