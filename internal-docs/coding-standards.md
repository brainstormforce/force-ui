# Coding Standards

This document defines the coding standards, patterns, and best practices for Force UI development.

## Philosophy

Our coding standards support our core values:
- **Clean, Lean, Speed** - Write efficient, readable code
- **Simplicity Reigns** - Prefer simple solutions over complex ones
- **Good Design** - Code is read more than written

## TypeScript Standards

### Type Safety

**Always use TypeScript, never `any`:**

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

**Use explicit return types for exported functions:**

```typescript
// ✅ Good
export function formatDate(date: Date): string {
  return date.toISOString();
}

// ❌ Bad - implicit return type
export function formatDate(date: Date) {
  return date.toISOString();
}
```

### Interfaces vs Types

**Prefer `interface` for component props, `type` for unions:**

```typescript
// ✅ Good
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

// ❌ Bad - type for props
type ButtonProps = {
  variant?: 'primary' | 'secondary';
};
```

### Naming Conventions

| Pattern | Convention | Example |
|---------|-----------|---------|
| **Components** | PascalCase | `Button`, `InputField` |
| **Files** | kebab-case | `button.tsx`, `input-field.tsx` |
| **Props Interfaces** | ComponentName + Props | `ButtonProps`, `InputProps` |
| **Functions** | camelCase | `handleClick`, `formatDate` |
| **Constants** | SCREAMING_SNAKE_CASE | `MAX_LENGTH`, `DEFAULT_TIMEOUT` |
| **Types/Interfaces** | PascalCase | `User`, `ApiResponse` |

---

## React Standards

### Component Structure

**Use functional components with hooks:**

```typescript
// ✅ Good
import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};
```

**Avoid class components** (legacy pattern).

### forwardRef for Components with Refs

```typescript
import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(baseClasses, className)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
```

### Hooks Rules

1. **Only call hooks at the top level** (not in loops/conditions)
2. **Custom hooks start with `use`:** `useToggle`, `useDebounce`
3. **Dependency arrays must be complete** (no ESLint disable)

```typescript
// ✅ Good
useEffect(() => {
  fetchData(userId);
}, [userId]); // userId in dependency array

// ❌ Bad
useEffect(() => {
  fetchData(userId);
}, []); // Missing dependency
```

### Props Destructuring

**Destructure props in the function signature:**

```typescript
// ✅ Good
export const Button = ({ variant, size, children, ...props }) => {
  // ...
};

// ❌ Bad
export const Button = (props) => {
  const variant = props.variant;
  // ...
};
```

---

## Styling Standards

### Tailwind CSS First

**Use Tailwind utility classes, avoid inline styles:**

```tsx
// ✅ Good
<div className="flex items-center gap-4 p-4 bg-background-primary">

// ❌ Bad
<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
```

### Semantic Color Tokens

**Use semantic color tokens, not raw colors:**

```tsx
// ✅ Good
<div className="bg-button-primary hover:bg-button-primary-hover">

// ❌ Bad
<div className="bg-blue-600 hover:bg-blue-700">
```

### Class Name Composition

**Use `cn()` utility for dynamic classes:**

```tsx
import { cn } from '@/utilities';

// ✅ Good
<button className={cn(
  'px-4 py-2 rounded',
  variant === 'primary' && 'bg-blue-500',
  variant === 'danger' && 'bg-red-500', // Overrides bg-blue-500
  disabled && 'opacity-50'
)}>

// ❌ Bad - class conflicts not resolved
<button className={`px-4 py-2 ${variant === 'primary' ? 'bg-blue-500' : ''} ${variant === 'danger' ? 'bg-red-500' : ''}`}>
```

### Responsive Design

**Use Tailwind responsive prefixes:**

```tsx
<div className="flex flex-col md:flex-row gap-2 md:gap-4">
```

### Styled Components (Limited Use)

**Only use Styled Components when Tailwind is insufficient:**

```typescript
// ✅ Good - dynamic runtime value
const ProgressBar = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease;
`;

// ❌ Bad - can be done with Tailwind
const Button = styled.button`
  padding: 0.5rem 1rem;
  background: blue;
`;
```

---

## File Organization

### Component File Structure

```
src/components/button/
├─ button.tsx           # Component implementation
├─ button.stories.tsx   # Storybook stories
├─ index.ts             # Export
└─ readme.md           # Component docs (optional)
```

### Import Order

**Group imports in this order:**

1. React and external libraries
2. Internal utilities and components (use path aliases)
3. Types
4. Styles

```typescript
// 1. React and external
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 2. Internal (use path aliases)
import { cn } from '@/utilities';
import { Button } from '@/components/button';

// 3. Types
import type { User } from '@/types';

// 4. Styles (rarely needed with Tailwind)
import './custom.css';
```

### Path Aliases

**Always use path aliases for internal imports:**

```typescript
// ✅ Good
import { Button } from '@/components/button';
import { cn } from '@/utilities';
import { BrandIcon } from '@/icons';

// ❌ Bad
import { Button } from '../../components/button';
import { cn } from '../utilities';
```

---

## Code Quality

### ESLint and Prettier

**All code must pass linting:**

```bash
npm run lint:js         # Check JavaScript/TypeScript
npm run lint:js-fix     # Auto-fix issues
npm run pretty-lint     # Check formatting
npm run pretty-fix      # Auto-format
```

**Do not disable rules without justification:**

```typescript
// ❌ Bad
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = fetchData();

// ✅ Better
interface ApiResponse {
  data: unknown; // Use unknown, then narrow type
}
```

### Code Comments

**Write comments for "why", not "what":**

```typescript
// ❌ Bad - obvious from code
// Set count to 0
const count = 0;

// ✅ Good - explains reasoning
// Reset count to prevent memory leak in long-running sessions
const count = 0;
```

**Use JSDoc for public APIs:**

```typescript
/**
 * Formats a date according to the user's locale
 * @param date - The date to format
 * @param locale - Optional locale (defaults to 'en-US')
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale).format(date);
}
```

### No Console Logs in Production

```typescript
// ❌ Bad - will appear in production
console.log('User data:', user);

// ✅ Good - only in development
if (process.env.NODE_ENV === 'development') {
  console.log('User data:', user);
}
```

---

## Accessibility Standards

### Semantic HTML

**Use semantic HTML elements:**

```tsx
// ✅ Good
<button onClick={handleClick}>Click me</button>
<nav>...</nav>
<main>...</main>

// ❌ Bad
<div onClick={handleClick}>Click me</div>
<div role="navigation">...</div>
```

### ARIA Attributes

**Use ARIA when semantic HTML isn't enough:**

```tsx
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <X />
</button>
```

### Keyboard Navigation

**All interactive elements must be keyboard-accessible:**

```typescript
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleClick();
  }
};

<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
```

### Focus Management

**Manage focus for dialogs and drawers:**

```typescript
useEffect(() => {
  if (isOpen) {
    // Trap focus inside modal
    const firstFocusable = modalRef.current?.querySelector('button');
    firstFocusable?.focus();
  }
}, [isOpen]);
```

---

## Performance Patterns

### Memoization

**Use `useMemo` for expensive calculations:**

```typescript
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
```

**Use `useCallback` for callbacks in dependencies:**

```typescript
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);

useEffect(() => {
  handleClick();
}, [handleClick]); // handleClick won't change unless value changes
```

**Use `React.memo` for expensive components:**

```typescript
export const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
  return <div>{/* ... */}</div>;
});
```

### Avoid Inline Functions in JSX

```tsx
// ❌ Bad - creates new function every render
<button onClick={() => handleClick(id)}>Click</button>

// ✅ Good - stable reference
const handleButtonClick = useCallback(() => {
  handleClick(id);
}, [id]);

<button onClick={handleButtonClick}>Click</button>
```

---

## Testing Standards

### Storybook Stories

**Every component must have a Storybook story:**

```typescript
// button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};
```

### Interaction Tests

**Add play functions for interactive tests:**

```typescript
import { userEvent, within } from '@storybook/test';

export const ClickTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
};
```

---

## Git Standards

### Commit Messages

**Format:** `type: short description`

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `refactor:` Code refactoring
- `style:` Code style (formatting, not CSS)
- `test:` Tests
- `chore:` Maintenance

**Examples:**
```
feat: add loading state to Button component
fix: resolve tooltip positioning on small screens
docs: update API reference for Input component
refactor: extract common validation logic
```

### Branch Naming

- `feat/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `chore/task-description` - Maintenance

---

## Security Standards

### Input Validation

**Always validate user input:**

```typescript
// ✅ Good
const sanitizedEmail = email.trim().toLowerCase();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
  throw new Error('Invalid email');
}
```

### XSS Prevention

**React escapes by default, but be careful with `dangerouslySetInnerHTML`:**

```tsx
// ❌ Dangerous
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ Safe
<div>{userInput}</div>
```

---

## WordPress-Specific Standards

### Scoped CSS

**Use CSS scoping to avoid WordPress admin conflicts:**

```javascript
// tailwind.config.js
module.exports = {
  important: '.force-ui-scope', // All styles prefixed
};
```

```tsx
// Wrap components in scoped div
<div className="force-ui-scope">
  <Button>Click</Button>
</div>
```

---

**Key Takeaway:** Follow TypeScript-first, Tailwind-first patterns. Write clean, accessible, performant code that aligns with Force UI's philosophy.

Last updated: February 2026
