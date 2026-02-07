# Architecture

## Overview

Force UI is a React component library architected for modularity, performance, and developer experience. The codebase follows a **component-first architecture** where each UI element is an independent, reusable module with its own TypeScript definitions, styles, and Storybook documentation.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Force UI Library                         │
├─────────────────────────────────────────────────────────────┤
│  Entry Point (src/index.ts)                                │
│  ├─ Global Styles (tailwind.css)                           │
│  └─ Component Exports (src/components/index.ts)            │
├─────────────────────────────────────────────────────────────┤
│  Component Layer (40+ Components)                          │
│  ├─ Form Controls (Button, Input, Checkbox, Select...)     │
│  ├─ Layout (Container, Sidebar, Topbar, Drawer...)         │
│  ├─ Feedback (Alert, Toast, Dialog, Loader...)             │
│  ├─ Data Display (Table, Badge, Avatar, Charts...)         │
│  └─ Navigation (Breadcrumb, Tabs, Menu, Pagination...)     │
├─────────────────────────────────────────────────────────────┤
│  Utilities Layer                                            │
│  ├─ withTW (Tailwind config wrapper)                       │
│  ├─ Theming utilities                                       │
│  └─ Helper functions                                        │
├─────────────────────────────────────────────────────────────┤
│  Foundation Layer                                           │
│  ├─ React 18.3.1                                           │
│  ├─ TypeScript 5.4.2                                       │
│  ├─ Tailwind CSS 3.4                                       │
│  ├─ Styled Components 6.1                                  │
│  ├─ Framer Motion 11.3 (animations)                        │
│  └─ Lexical 0.17 (rich text editor)                        │
└─────────────────────────────────────────────────────────────┘
```

## Build Architecture

### Source to Distribution Flow

```
src/
├─ components/        ──┐
│  ├─ button/          │
│  ├─ input/           │
│  └─ ...              │
├─ utilities/          │    TypeScript Compiler
├─ globals/            ├──► (tsc -b)
└─ index.ts           ─┘          ↓
                                  │
                      Vite Build Engine
                      - ESM output (preserveModules)
                      - CJS output (preserveModules)
                      - Type declarations (.d.ts)
                      - Tree-shaking optimization
                                  ↓
                              dist/
                              ├─ force-ui.es.js (ESM entry)
                              ├─ force-ui.cjs.js (CJS entry)
                              ├─ force-ui.d.ts (Types entry)
                              ├─ withTW.es.js
                              ├─ withTW.cjs.js
                              ├─ components/ (individual files)
                              ├─ utilities/ (individual files)
                              └─ ... (preserves source structure)
```

**Key Build Features:**
- **Dual Format** - ESM for modern bundlers, CJS for Node.js/legacy
- **Preserve Modules** - Keeps component files separate for optimal tree-shaking
- **Type Declarations** - Full TypeScript support with `rollupTypes: true`
- **Source Maps** - Debugging support with `.map` files

## Component Architecture Pattern

Every component follows a consistent structure:

```
src/components/button/
├─ button.tsx           # Main component implementation
├─ button.stories.tsx   # Storybook documentation
├─ index.ts             # Export barrel
└─ readme.md           # Component-specific docs (optional)
```

### Component Implementation Pattern

```typescript
// Typical component structure (simplified)
import React, { forwardRef } from 'react';
import { cn } from '@/utilities'; // Tailwind merge utility

// 1. Type definitions
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

// 2. Component implementation with forwardRef for ref support
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, icon, children, className, ...props }, ref) => {

    // 3. Computed class names using Tailwind
    const baseClasses = 'inline-flex items-center justify-center transition-colors';
    const variantClasses = {
      primary: 'bg-button-primary hover:bg-button-primary-hover text-text-on-color',
      secondary: 'bg-button-secondary hover:bg-button-secondary-hover text-text-on-color',
      // ... more variants
    };
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader className="mr-2" />}
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
```

## Styling Architecture

### Tailwind-First Approach

Force UI uses **Tailwind CSS as the primary styling system**, with three layers:

1. **Base Theme** - Default design tokens in `src/utilities/withTW.js`
2. **Component Styles** - Tailwind classes in component implementations
3. **Consumer Overrides** - Tailwind config extensions via `withTW()`

### Theme Token System

Force UI defines semantic color tokens that map to Tailwind classes:

```javascript
// Defined in src/utilities/withTW.js
colors: {
  // Brand colors
  'brand-primary-600': '#2563EB',
  'brand-hover-700': '#1D4ED8',

  // Background
  'background-primary': '#FFFFFF',
  'background-secondary': '#F3F4F6',

  // Text
  'text-primary': '#111827',
  'text-secondary': '#4B5563',

  // Buttons
  'button-primary': '#2563EB',
  'button-primary-hover': '#1D4ED8',

  // ... 100+ semantic tokens
}
```

**Consumer Customization:**

```javascript
// Consumer's tailwind.config.js
const withTW = require('@bsf/force-ui/withTW');

module.exports = withTW({
  theme: {
    extend: {
      colors: {
        // Override Force UI tokens
        'brand-primary-600': '#6B21A8', // Purple instead of blue
        'button-primary': '#6B21A8',
      }
    }
  }
});
```

### Styled Components (Limited Use)

Styled Components is used only for dynamic styles that can't be expressed with Tailwind:

- Complex animations requiring JavaScript values
- Runtime-computed styles
- CSS-in-JS patterns for specific components

## State Management

Force UI components use **local React state** - no global state management:

- **useState** - Component-level state (open/closed, selected value, etc.)
- **useReducer** - Complex state logic (e.g., multi-step forms)
- **Context API** - Compound components (Accordion.Item inside Accordion)
- **Props** - Controlled vs uncontrolled patterns

### Controlled vs Uncontrolled Pattern

Components support both controlled and uncontrolled usage:

```tsx
// Controlled - parent manages state
<Input value={value} onChange={setValue} />

// Uncontrolled - component manages internal state
<Input defaultValue="initial" />
```

## Animation Architecture

**Framer Motion** powers animations for smooth, accessible interactions:

- **Entry/Exit Animations** - Modals, dropdowns, toasts
- **Layout Animations** - Accordions, collapsible panels
- **Gesture Recognition** - Drag-and-drop, swipe
- **Accessible Motion** - Respects `prefers-reduced-motion`

Example:

```tsx
import { motion, AnimatePresence } from 'framer-motion';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

## TypeScript Architecture

### Type Safety Layers

1. **Component Props** - Strict prop types with JSDoc comments
2. **Type Exports** - Public types exported from `index.ts`
3. **Generic Components** - Polymorphic components like `<Button as="a">`
4. **Type Inference** - IntelliSense for variant/size options

### Path Aliases

TypeScript path aliases keep imports clean:

```typescript
// Instead of: import { Button } from '../../../components/button'
import { Button } from '@/components/button';
import { cn } from '@/utilities';
import { BrandIcon } from '@/icons';
```

Configured in `vite.config.ts`:

```typescript
resolve: {
  alias: {
    '@/components': resolve(process.cwd(), 'src/components'),
    '@/utilities': resolve(process.cwd(), 'src/utilities'),
    '@/icons': resolve(process.cwd(), 'src/ui/icons.jsx'),
    '@': resolve(process.cwd(), 'src'),
  }
}
```

## Testing Architecture

### Storybook as Testing Foundation

Storybook serves three purposes:

1. **Component Documentation** - Visual examples for developers
2. **Visual Testing** - Automated screenshot comparison via Chromatic
3. **Interaction Testing** - `@storybook/test` for user interactions

### Test Pyramid

```
           ┌───────────────┐
          │  E2E Tests      │  (Chromatic visual regression)
          │  (Fewer)        │
         ┌┴─────────────────┴┐
        │  Interaction Tests  │ (Storybook play functions)
        │  (Some)             │
       ┌┴─────────────────────┴┐
      │  Accessibility Tests    │ (a11y addon, axe-playwright)
      │  (Many)                 │
      └─────────────────────────┘
```

## Release Architecture

### Build → Package → Release

1. **npm run build**
   - Compiles TypeScript
   - Bundles with Vite
   - Generates type declarations
   - Outputs to `dist/`

2. **npm run package** (bin/build.sh)
   - Creates ZIP with:
     - `dist/` - Built library
     - `package.json` - Package metadata
     - `version.json` - Version info
     - `changelog.txt` - Release notes

3. **GitHub Tag Release** (manual or CI)
   - Tag version (e.g., `1.5.0`)
   - Create GitHub release
   - Attach ZIP artifact

### Consuming the Library

Consumers install via git tag:

```bash
npm install @bsf/force-ui@git+https://github.com/brainstormforce/force-ui.git#1.5.0
```

This downloads the repository at tag `1.5.0`, then runs `npm install` in the consumer's project, which triggers a build if needed.

## Accessibility Architecture

Accessibility is built into every layer:

1. **Semantic HTML** - `<button>`, `<input>`, `<dialog>` over `<div>`
2. **ARIA Attributes** - Roles, states, properties where needed
3. **Keyboard Navigation** - Tab order, Enter/Space/Escape handlers
4. **Focus Management** - Trap focus in modals, restore on close
5. **Screen Reader** - Announcements via `aria-live`, descriptive labels
6. **Motion Control** - Respect `prefers-reduced-motion`

### a11y Testing

- **Storybook a11y Addon** - Real-time accessibility audit in Storybook
- **axe-playwright** - Automated a11y tests in Playwright suite
- **Manual Testing** - Keyboard-only and screen reader testing

## Performance Optimizations

### Tree-Shaking

Force UI is optimized for tree-shaking:

```javascript
// Only Button code is included in final bundle
import { Button } from '@bsf/force-ui';
```

**How it works:**
- Vite's `preserveModules: true` keeps components separate
- ESM format allows bundlers to eliminate unused code
- `sideEffects: false` in package.json signals safety

### Bundle Size Strategy

- **No unnecessary deps** - Every dependency justified
- **Code splitting** - Components load independently
- **Minification** - esbuild minification in production
- **CSS purging** - Tailwind removes unused styles

## Future Architecture Considerations

### Planned Improvements

- **CSS-in-JS Reduction** - Move more styles to pure Tailwind
- **React Server Components** - Prepare for Next.js 13+ compatibility
- **Web Components** - Framework-agnostic component versions
- **Design Tokens** - JSON-based token system for multi-brand theming

---

**Key Takeaway:** Force UI's architecture prioritizes modularity, type safety, and developer experience while maintaining a small bundle size and excellent performance.

Last updated: February 2026
