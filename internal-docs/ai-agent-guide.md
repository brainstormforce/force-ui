# AI Agent Guide

This guide helps AI coding agents (like Claude, GitHub Copilot, Cursor, etc.) work effectively with the Force UI codebase.

## Quick Context

**What is Force UI?**
- React component library built with TypeScript and Tailwind CSS
- 40+ production-ready UI components
- Powers Brainstorm Force (BSF) WordPress products
- Version: 1.5.0
- Repository: https://github.com/brainstormforce/force-ui

**Key Technologies:**
- React 18.3, TypeScript 5.4, Tailwind CSS 3.4, Vite 5.4, Storybook 8.3

---

## Working with Force UI

### Project Structure

```
force-ui/
├─ src/                     # Source code (main development folder)
│  ├─ components/           # 40+ React components
│  ├─ utilities/            # Helper functions
│  └─ index.ts             # Main entry point
├─ .storybook/             # Storybook configuration
├─ internal-docs/          # Internal documentation (you are here!)
├─ dist/                   # Build output (generated, git-ignored)
└─ vite.config.ts          # Build configuration
```

### Path Aliases

Always use path aliases for internal imports:

```typescript
import { Button } from '@/components/button';
import { cn } from '@/utilities';
import { BrandIcon } from '@/icons';
```

**Configured in:** `vite.config.ts`

---

## Code Patterns

### Component Structure

Every component follows this pattern:

```typescript
import React, { forwardRef } from 'react';
import { cn } from '@/utilities';

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // ... other props
}

const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const classes = cn(
      'base-classes',
      variant === 'primary' && 'primary-classes',
      variant === 'secondary' && 'secondary-classes',
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
export default MyComponent;
```

**Key Points:**
- Use `forwardRef` for ref support
- Extend HTML element props for native attributes
- Use `cn()` utility for class name composition
- Set `displayName` for debugging
- Export as default

### Styling with Tailwind

**Always use Tailwind utility classes, never inline styles:**

```tsx
// ✅ Good
<button className="px-4 py-2 bg-button-primary hover:bg-button-primary-hover">

// ❌ Bad
<button style={{ padding: '0.5rem 1rem', background: '#2563EB' }}>
```

**Use semantic color tokens:**

```tsx
// ✅ Good
className="bg-button-primary text-text-on-color"

// ❌ Bad
className="bg-blue-600 text-white"
```

**Use `cn()` for conditional classes:**

```tsx
import { cn } from '@/utilities';

const className = cn(
  'base-classes',
  isActive && 'active-classes',
  isDisabled && 'disabled-classes'
);
```

### TypeScript Patterns

**Always use explicit types:**

```typescript
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// ❌ Bad
interface ButtonProps {
  variant: any;
  onClick: any;
}
```

**Extend HTML element props:**

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
```

---

## Creating New Components

When asked to create a new component:

### Step 1: Create Component File

**Location:** `src/components/my-component/my-component.tsx`

**Template:**

```typescript
import React, { forwardRef } from 'react';
import { cn } from '@/utilities';

export interface MyComponentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const MyComponent = forwardRef<HTMLElement, MyComponentProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-classes',
          // variant classes
          // size classes
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
export default MyComponent;
```

### Step 2: Create Export File

**Location:** `src/components/my-component/index.ts`

```typescript
export { default } from './my-component';
export type { MyComponentProps } from './my-component';
```

### Step 3: Create Storybook Story

**Location:** `src/components/my-component/my-component.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import MyComponent from './my-component';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'My Component',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'My Component',
  },
};
```

### Step 4: Add to Component Exports

**Location:** `src/components/index.ts`

```typescript
export { default as MyComponent } from './my-component';
```

---

## Modifying Existing Components

### Before Making Changes

1. **Read the component file** to understand current implementation
2. **Check Storybook stories** to see all use cases
3. **Check type definitions** to understand the API

### Making Changes

1. **Update TypeScript types first** if props change
2. **Update implementation** with new logic
3. **Update Storybook stories** to cover new cases
4. **Test in Storybook** to verify changes

### Example: Adding a New Prop

```typescript
// 1. Add to type definition
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  // ✅ Add new prop
  loading?: boolean;
}

// 2. Update component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={loading || props.disabled} // Use new prop
        {...props}
      >
        {loading && <Loader className="mr-2" />}
        {children}
      </button>
    );
  }
);

// 3. Add story
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};
```

---

## Common Tasks

### Task: Add a Utility Function

**Location:** `src/utilities/my-util.ts`

```typescript
/**
 * Formats a date according to locale
 * @param date - The date to format
 * @param locale - Locale string (default: 'en-US')
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale).format(date);
}
```

**Export from:** `src/utilities/index.ts`

```typescript
export { formatDate } from './my-util';
```

### Task: Update Tailwind Theme

**Location:** `src/utilities/withTW.js`

Add new color token:

```javascript
colors: {
  // ... existing colors
  'my-new-color': '#123456',
}
```

### Task: Fix a Bug

1. **Reproduce the bug** in Storybook
2. **Locate the code** causing the issue
3. **Fix the code**
4. **Verify the fix** in Storybook
5. **Add a test** to prevent regression

---

## Best Practices for AI Agents

### Do:

✅ **Read component files before modifying** - Understand existing patterns
✅ **Use path aliases** - `@/components`, `@/utilities`, not relative paths
✅ **Follow existing patterns** - Match the style of surrounding code
✅ **Add TypeScript types** - Never use `any`
✅ **Update Storybook stories** - When changing component APIs
✅ **Use semantic color tokens** - Not raw hex values
✅ **Test changes** - Verify in Storybook before committing

### Don't:

❌ **Don't use inline styles** - Use Tailwind classes
❌ **Don't use raw colors** - Use semantic tokens (e.g., `bg-button-primary`)
❌ **Don't skip TypeScript types** - Type everything explicitly
❌ **Don't create new patterns** - Follow existing conventions
❌ **Don't use `any` type** - Use proper TypeScript types
❌ **Don't ignore accessibility** - Add ARIA labels, keyboard support

---

## Understanding the Codebase

### Where to Find Things

| Need | Location |
|------|----------|
| **Component implementation** | `src/components/{name}/{name}.tsx` |
| **Component types** | Same file as implementation |
| **Component examples** | `src/components/{name}/{name}.stories.tsx` |
| **Utilities** | `src/utilities/` |
| **Tailwind theme** | `src/utilities/withTW.js` |
| **Build config** | `vite.config.ts` |
| **TypeScript config** | `tsconfig.json` |

### Key Files to Reference

- **Component patterns:** `src/components/button/button.tsx` (simple example)
- **Form patterns:** `src/components/input/input.tsx` (with label/error)
- **Complex patterns:** `src/components/dialog/dialog.tsx` (with focus management)
- **Tailwind usage:** Any component file
- **TypeScript types:** Any component file

---

## Debugging Tips

### Component Not Rendering?

1. Check if component is exported from `src/components/index.ts`
2. Check for TypeScript errors: `npm run build`
3. Check console for errors in Storybook

### Styles Not Applied?

1. Verify Tailwind classes are correct
2. Check if `cn()` utility is used correctly
3. Check if semantic tokens exist in `withTW.js`
4. Verify Tailwind config is loaded (Storybook should show styles)

### TypeScript Errors?

1. Check prop types match component usage
2. Verify path aliases are correct
3. Run `npm run build` to see full error output

---

## Testing Changes

### Run Storybook

```bash
npm run storybook
```

Browse to http://localhost:6006 and:
1. Find your component
2. Test all variants
3. Check accessibility tab
4. Verify interactive states

### Run Tests

```bash
npm run test
```

### Check Code Quality

```bash
npm run lint:js
npm run pretty-lint
```

---

## Reference Documentation

For deeper understanding, read:

1. **[README.md](README.md)** - Project overview
2. **[Architecture](architecture.md)** - System design
3. **[APIs](apis.md)** - Component API reference
4. **[Coding Standards](coding-standards.md)** - Code style guide
5. **[UI and Copy](ui-and-copy.md)** - Design principles

---

## Key Principles

When working with Force UI code:

1. **Match existing patterns** - Consistency is critical
2. **Use TypeScript strictly** - Type safety prevents bugs
3. **Tailwind first** - No inline styles, use utilities
4. **Accessibility matters** - Keyboard nav, ARIA, focus management
5. **Test in Storybook** - Visual verification is essential
6. **Follow the philosophy** - Clean, lean, simple, well-designed

---

**Key Takeaway:** Force UI follows consistent patterns. Read existing components to understand the patterns, then apply them to new code. When in doubt, match the existing style.

Last updated: February 2026
