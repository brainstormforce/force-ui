# Glossary

Technical terms, acronyms, and concepts used in Force UI development.

## A

**a11y**
- Short for "accessibility" (a + 11 letters + y)
- Refers to making software usable by people with disabilities
- Force UI components are tested with a11y tools

**ARIA (Accessible Rich Internet Applications)**
- W3C specification for accessible web content
- Provides semantic roles and attributes (e.g., `aria-label`, `role="button"`)
- Used in Force UI for screen reader support

---

## B

**BSF (Brainstorm Force)**
- Software company behind Force UI
- Develops WordPress products: SureRank, SureForms, SureMails, etc.

**Bundle Size**
- The file size of compiled JavaScript/CSS
- Force UI optimizes for small bundles via tree-shaking

---

## C

**CJS (CommonJS)**
- Module system used by Node.js (`require()`, `module.exports`)
- Force UI outputs CJS format for compatibility: `dist/force-ui.cjs.js`

**Component Library**
- Collection of reusable UI components
- Force UI is a component library for React

**Compound Component**
- Pattern where parent and children work together
- Example: `<Accordion>` with `<Accordion.Item>`

**Controlled Component**
- Component where parent manages state via props
- Example: `<Input value={value} onChange={handleChange} />`

---

## D

**Design System**
- Comprehensive guide for UI consistency (colors, spacing, typography)
- Force UI implements a design system via Tailwind tokens

**Design Tokens**
- Named variables for design values (e.g., `brand-primary-600: #2563EB`)
- Enables theme customization without changing components

**DTS (TypeScript Declaration)**
- `.d.ts` files containing type definitions
- Force UI generates `dist/force-ui.d.ts` for TypeScript support

---

## E

**ESLint**
- JavaScript/TypeScript linter for code quality
- Force UI uses `@wordpress/eslint-plugin`

**ESM (ECMAScript Modules)**
- Modern JavaScript module system (`import`/`export`)
- Force UI outputs ESM format: `dist/force-ui.es.js`

---

## F

**forwardRef**
- React API for passing refs to child components
- All Force UI components use `forwardRef` for ref support

**Framer Motion**
- Animation library for React
- Used in Force UI for Dialog, Drawer, Toast animations

---

## G

**Git Tag**
- Named reference to a specific commit (e.g., `1.5.0`)
- Force UI uses tags for versioning releases

---

## H

**HOC (Higher-Order Component)**
- Function that takes a component and returns an enhanced component
- Force UI provides HOCs in `src/hoc/` (e.g., `withTooltip`)

**Hooks**
- React API for state and side effects (`useState`, `useEffect`, etc.)
- Force UI components use hooks exclusively (no class components)

---

## I

**IntelliSense**
- IDE feature for autocomplete and type hints
- Enabled by Force UI's TypeScript definitions

---

## J

**JSDoc**
- Comment syntax for documenting JavaScript/TypeScript
- Used in Force UI to describe function parameters and return types

**JSX (JavaScript XML)**
- Syntax extension for writing HTML-like code in JavaScript
- React components are written in JSX/TSX

---

## L

**Lexical**
- Rich text editor framework from Meta
- Used in Force UI's `EditorInput` component

---

## M

**Microcopy**
- Short UI text (button labels, error messages, placeholders)
- See [UI and Copy](ui-and-copy.md) for guidelines

**Monorepo**
- Repository containing multiple related projects
- Force UI is currently a single-repo project (not a monorepo)

---

## N

**npm (Node Package Manager)**
- Package manager for JavaScript
- Force UI is installed via npm (git dependency)

---

## P

**Path Alias**
- Shortcut import path (e.g., `@/components` instead of `../../components`)
- Configured in `vite.config.ts` and `tsconfig.json`

**Peer Dependency**
- Dependency that consuming project must provide
- Force UI's peer deps: React, React DOM

**Polymorphic Component**
- Component that can render as different elements
- Example: `<Button as="a" href="/link">`

**Prettier**
- Code formatter for consistent style
- Force UI uses `@wordpress/prettier-config`

---

## R

**React**
- JavaScript library for building user interfaces
- Force UI is built on React 18.3

**Recharts**
- Chart library for React
- Used in Force UI's chart components (BarChart, LineChart, etc.)

**Ref (React Reference)**
- Object for accessing DOM elements directly
- Force UI components support refs via `forwardRef`

---

## S

**Semantic HTML**
- Using HTML elements for their intended purpose
- Example: `<button>` instead of `<div role="button">`

**SemVer (Semantic Versioning)**
- Versioning scheme: MAJOR.MINOR.PATCH (e.g., 1.5.0)
- Force UI follows SemVer

**SSR (Server-Side Rendering)**
- Rendering React components on the server
- Force UI components are SSR-compatible (Next.js, Gatsby)

**Storybook**
- Tool for developing and documenting UI components
- Force UI uses Storybook for component playground and testing

**Styled Components**
- CSS-in-JS library for styling React components
- Used sparingly in Force UI (Tailwind is preferred)

---

## T

**Tailwind CSS**
- Utility-first CSS framework
- Force UI's primary styling system

**Tree-Shaking**
- Build optimization that removes unused code
- Force UI supports tree-shaking via ESM output

**TSX (TypeScript JSX)**
- TypeScript with JSX syntax
- Force UI components are written in `.tsx` files

**Type Safety**
- Compile-time checking of data types
- Provided by TypeScript in Force UI

**TypeScript**
- Typed superset of JavaScript
- Force UI is written in TypeScript 5.4

---

## U

**Uncontrolled Component**
- Component that manages its own state internally
- Example: `<Input defaultValue="initial" />`

---

## V

**Vite**
- Fast build tool for modern web projects
- Force UI uses Vite for building the library

**Volta**
- Node.js version manager
- Recommended for Force UI development (pinned to Node 18.15.0)

---

## W

**WCAG (Web Content Accessibility Guidelines)**
- Standards for web accessibility (A, AA, AAA levels)
- Force UI targets WCAG 2.1 Level AA compliance

**withTW**
- Utility function that wraps Tailwind config with Force UI defaults
- Located in `src/utilities/withTW.js`

**WordPress**
- Content management system (CMS)
- Force UI is designed for WordPress admin interfaces

---

## Common Acronyms

| Acronym | Meaning |
|---------|---------|
| **API** | Application Programming Interface |
| **CLI** | Command-Line Interface |
| **CJS** | CommonJS |
| **CSS** | Cascading Style Sheets |
| **DX** | Developer Experience |
| **ESM** | ECMAScript Modules |
| **HOC** | Higher-Order Component |
| **IDE** | Integrated Development Environment |
| **JSX** | JavaScript XML |
| **PR** | Pull Request |
| **SSR** | Server-Side Rendering |
| **TSX** | TypeScript JSX |
| **UI** | User Interface |
| **UX** | User Experience |
| **WCAG** | Web Content Accessibility Guidelines |

---

## Component-Specific Terms

**Accordion**
- Collapsible content panels
- Force UI: `<Accordion>` component

**Avatar**
- User profile image or initials
- Force UI: `<Avatar>` component

**Badge**
- Small label or status indicator
- Force UI: `<Badge>` component

**Breadcrumb**
- Navigation showing current page location
- Force UI: `<Breadcrumb>` component

**Dialog/Modal**
- Overlay window requiring user interaction
- Force UI: `<Dialog>` component

**Drawer/Sidebar**
- Sliding panel from screen edge
- Force UI: `<Drawer>` and `<Sidebar>` components

**Dropdown**
- Menu that appears when triggered
- Force UI: `<DropdownMenu>` component

**Toast/Toaster**
- Brief notification message
- Force UI: `toast()` function and `<Toaster>` component

**Tooltip**
- Small popup with helpful text
- Force UI: `<Tooltip>` component

---

**Key Takeaway:** This glossary covers common terms in Force UI development. Refer back when you encounter unfamiliar concepts.

Last updated: February 2026
