# APIs and Component Reference

This document provides a comprehensive reference for Force UI's component APIs, hooks, utilities, and type definitions.

## Component API Patterns

All Force UI components follow consistent API patterns:

### Common Props

Every component extends HTML element props and supports:

```typescript
interface CommonProps {
  className?: string;           // Additional Tailwind classes
  style?: React.CSSProperties;  // Inline styles (use sparingly)
  children?: React.ReactNode;   // Child elements
  // ... plus all native HTML attributes
}
```

### Variant Pattern

Components with visual variants use a `variant` prop:

```typescript
<Button variant="primary | secondary | tertiary | danger" />
<Alert type="info | success | warning | error" />
<Badge variant="gray | red | yellow | green | sky" />
```

### Size Pattern

Components supporting sizes use a `size` prop:

```typescript
<Button size="sm | md | lg" />
<Input size="sm | md | lg" />
<Avatar size="xs | sm | md | lg | xl" />
```

### Controlled vs Uncontrolled

Form components support both patterns:

```typescript
// Controlled
<Input value={value} onChange={(e) => setValue(e.target.value)} />

// Uncontrolled
<Input defaultValue="initial" />
```

---

## Core Components

### Button

**File:** `src/components/button/button.tsx`

**Props:**

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;              // Shows loader, disables button
  icon?: React.ReactNode;         // Icon before text
  iconPosition?: 'left' | 'right'; // Icon placement
  fullWidth?: boolean;            // w-full
  as?: 'button' | 'a' | 'Link';   // Polymorphic component
}
```

**Usage:**

```tsx
import { Button } from '@bsf/force-ui';

<Button variant="primary" size="md" loading={isSubmitting}>
  Submit Form
</Button>

<Button variant="danger" icon={<TrashIcon />} iconPosition="left">
  Delete
</Button>
```

---

### Input

**File:** `src/components/input/input.tsx`

**Props:**

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;                 // Input label
  helper?: string;                // Helper text below input
  error?: string;                 // Error message (shows error state)
  required?: boolean;             // Shows required indicator
  prefix?: React.ReactNode;       // Icon/text before input
  suffix?: React.ReactNode;       // Icon/text after input
  size?: 'sm' | 'md' | 'lg';
}
```

**Usage:**

```tsx
import { Input } from '@bsf/force-ui';

<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  helper="We'll never share your email"
  error={errors.email}
  required
  prefix={<MailIcon />}
/>
```

---

### Select

**File:** `src/components/select/select.tsx`

**Props:**

```typescript
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helper?: string;
  error?: string;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
}
```

**Usage:**

```tsx
import { Select } from '@bsf/force-ui';

<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
/>
```

---

### Alert

**File:** `src/components/alert/alert.tsx`

**Props:**

```typescript
interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error' | 'neutral';
  title?: string;                 // Alert title
  closable?: boolean;             // Show close button
  onClose?: () => void;           // Close handler
  icon?: React.ReactNode;         // Custom icon
  children: React.ReactNode;      // Alert message
}
```

**Usage:**

```tsx
import { Alert } from '@bsf/force-ui';

<Alert type="success" title="Success!" closable onClose={handleClose}>
  Your changes have been saved successfully.
</Alert>

<Alert type="error">
  Please fix the validation errors before submitting.
</Alert>
```

---

### Dialog (Modal)

**File:** `src/components/dialog/dialog.tsx`

**Props:**

```typescript
interface DialogProps {
  open: boolean;                  // Controlled open state
  onOpenChange: (open: boolean) => void; // State updater
  title?: string;                 // Dialog title
  description?: string;           // Dialog description
  showCloseButton?: boolean;      // Show X button
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;      // Dialog content
}
```

**Usage:**

```tsx
import { Dialog, Button } from '@bsf/force-ui';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm Deletion"
        description="This action cannot be undone."
        size="md"
      >
        <div className="flex gap-2 justify-end">
          <Button variant="tertiary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Dialog>
    </>
  );
}
```

---

### Drawer

**File:** `src/components/drawer/drawer.tsx`

**Props:**

```typescript
interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}
```

**Usage:**

```tsx
import { Drawer, Button } from '@bsf/force-ui';

<Drawer open={isOpen} onOpenChange={setIsOpen} position="right" size="md">
  <div className="p-6">
    <h2>Settings</h2>
    {/* Drawer content */}
  </div>
</Drawer>
```

---

### Toast (Toaster)

**File:** `src/components/toaster/toaster.tsx`

**API:**

```typescript
import { toast } from '@bsf/force-ui';

// Show toast
toast.success('Settings saved!');
toast.error('Failed to save');
toast.info('New update available');
toast.warning('Disk space low');

// Custom options
toast.success('Saved!', {
  duration: 5000,
  position: 'top-right',
  icon: <CustomIcon />,
});

// Promise-based
toast.promise(
  saveSettings(),
  {
    loading: 'Saving...',
    success: 'Saved successfully!',
    error: 'Failed to save',
  }
);
```

**Toaster Component:**

```tsx
import { Toaster } from '@bsf/force-ui';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      {/* Your app */}
    </>
  );
}
```

---

### Tooltip

**File:** `src/components/tooltip/tooltip.tsx`

**Props:**

```typescript
interface TooltipProps {
  content: React.ReactNode;       // Tooltip content
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;   // Trigger element
}
```

**Usage:**

```tsx
import { Tooltip, Button } from '@bsf/force-ui';

<Tooltip content="This will delete your account" placement="top">
  <Button variant="danger">Delete Account</Button>
</Tooltip>
```

---

### DatePicker

**File:** `src/components/datepicker/datepicker.tsx`

**Props:**

```typescript
interface DatePickerProps {
  label?: string;
  value?: Date;
  onChange?: (date: Date) => void;
  defaultValue?: Date;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  placeholder?: string;
}
```

**Usage:**

```tsx
import { DatePicker } from '@bsf/force-ui';

<DatePicker
  label="Start Date"
  value={startDate}
  onChange={setStartDate}
  minDate={new Date()}
  placeholder="Select date"
/>
```

---

### Table

**File:** `src/components/table/table.tsx`

**Props:**

```typescript
interface TableProps {
  columns: Array<{
    key: string;
    label: string;
    width?: string;
    render?: (value: any, row: any) => React.ReactNode;
  }>;
  data: Array<Record<string, any>>;
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: any) => void;
}
```

**Usage:**

```tsx
import { Table } from '@bsf/force-ui';

<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'actions',
      label: 'Actions',
      render: (value, row) => (
        <Button size="sm" onClick={() => handleEdit(row)}>Edit</Button>
      ),
    },
  ]}
  data={users}
  loading={isLoading}
  onRowClick={handleRowClick}
/>
```

---

### Charts (BarChart, LineChart, PieChart, AreaChart)

**Files:** `src/components/bar-chart/`, `line-chart/`, `pie-chart/`, `area-chart/`

**BarChart Props:**

```typescript
interface BarChartProps {
  data: Array<Record<string, any>>;
  xKey: string;
  yKeys: string[];
  colors?: string[];
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
}
```

**Usage:**

```tsx
import { BarChart } from '@bsf/force-ui';

<BarChart
  data={[
    { month: 'Jan', sales: 4000, revenue: 2400 },
    { month: 'Feb', sales: 3000, revenue: 1398 },
    { month: 'Mar', sales: 2000, revenue: 9800 },
  ]}
  xKey="month"
  yKeys={['sales', 'revenue']}
  colors={['#2563EB', '#16A34A']}
  height={300}
  showLegend
/>
```

---

## Utilities

### `cn()` - Class Name Merger

**File:** `src/utilities/cn.ts`

**Purpose:** Merges Tailwind classes intelligently (handles conflicts).

```typescript
import { cn } from '@bsf/force-ui';

const className = cn(
  'bg-blue-500 text-white',
  isDanger && 'bg-red-500',   // Overrides bg-blue-500
  'px-4 py-2'
);
// Result: "bg-red-500 text-white px-4 py-2"
```

**Implementation:** Uses `clsx` + `tailwind-merge`.

---

### `withTW()` - Tailwind Config Wrapper

**File:** `src/utilities/withTW.js`

**Purpose:** Wraps Tailwind config with Force UI's default theme.

```javascript
// tailwind.config.js
const withTW = require('@bsf/force-ui/withTW');

module.exports = withTW({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Override Force UI colors
        'brand-primary-600': '#6B21A8',
      },
    },
  },
});
```

**What it does:**
- Merges your config with Force UI's default theme
- Provides 100+ semantic color tokens
- Configures Tailwind for Force UI compatibility

---

## TypeScript Types

### Exported Types

Force UI exports TypeScript types for all components:

```typescript
import type { ButtonProps, InputProps, AlertProps } from '@bsf/force-ui';

// Use in your components
interface MyFormProps {
  submitButton?: ButtonProps;
}
```

### Generic Component Pattern

Some components support polymorphic `as` prop:

```typescript
<Button as="a" href="/link">Link styled as button</Button>
<Button as={Link} to="/route">React Router link</Button>
```

---

## Component Composition

### Compound Components

Some components use compound component patterns:

```tsx
import { Accordion } from '@bsf/force-ui';

<Accordion>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

**Pattern:** Parent component provides context to children via React Context API.

---

## Best Practices

### 1. Use Semantic Variants

```tsx
// ✅ Good - semantic meaning
<Alert type="error">Failed to save</Alert>
<Button variant="danger">Delete</Button>

// ❌ Avoid - purely visual
<div className="bg-red-500 text-white">Error</div>
```

### 2. Prefer Controlled Components for Forms

```tsx
// ✅ Good - centralized state
const [email, setEmail] = useState('');
<Input value={email} onChange={(e) => setEmail(e.target.value)} />

// ⚠️ Use defaultValue only for simple cases
<Input defaultValue="default@example.com" />
```

### 3. Use TypeScript for Props

```tsx
// ✅ Good - type safety
import { Button } from '@bsf/force-ui';
<Button variant="primary">Click</Button>

// ❌ Bad - typo not caught
<Button varient="primary">Click</Button>
```

### 4. Leverage Storybook for API Reference

```bash
npm run storybook
```

Browse to http://localhost:6006 to see:
- All component variants
- Interactive props controls
- Code examples
- Accessibility tests

---

## API Documentation Locations

| Resource | Location |
|----------|----------|
| **Component Props** | TypeScript definitions in each component file |
| **Usage Examples** | Storybook stories (`*.stories.tsx`) |
| **Type Exports** | `dist/force-ui.d.ts` (after build) |
| **Tailwind Theme** | `src/utilities/withTW.js` |
| **Utility Functions** | `src/utilities/index.ts` |

---

**Key Takeaway:** Force UI components follow consistent API patterns (variant, size, controlled/uncontrolled). Use Storybook for interactive exploration and TypeScript for type safety.

Last updated: February 2026
