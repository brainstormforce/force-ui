# UI and Copy Principles

This document describes Force UI's design system principles, component patterns, and user-facing copy guidelines.

## Design Philosophy

Force UI's design is guided by four core principles from our [PHILOSOPHY.md](../.github/PHILOSOPHY.md):

1. **Walk in Users' Shoes** - Intuitive, user-focused design
2. **Clean, Lean, Speed** - Minimalist aesthetics, fast performance
3. **Good Design is Our Core** - Beauty in every detail
4. **Simplicity Reigns** - Clarity over complexity

---

## Visual Design System

### Color System

Force UI uses **semantic color tokens** organized by purpose:

#### Brand Colors

Primary blue palette for interactive elements:

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-primary-600` | `#2563EB` | Primary buttons, links |
| `brand-hover-700` | `#1D4ED8` | Hover states |
| `brand-background-50` | `#EFF6FF` | Subtle backgrounds |

#### Background Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `background-primary` | `#FFFFFF` | Main backgrounds |
| `background-secondary` | `#F3F4F6` | Secondary surfaces |
| `background-inverse` | `#111827` | Dark mode |

#### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#111827` | Body text |
| `text-secondary` | `#4B5563` | Supporting text |
| `text-tertiary` | `#9CA3AF` | Disabled/placeholder |

#### Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `support-success` | `#16A34A` | Success messages |
| `support-error` | `#DC2626` | Errors, danger |
| `support-warning` | `#EAB308` | Warnings |
| `support-info` | `#0284C7` | Info messages |

**Customization:** Override these tokens in your `tailwind.config.js` via `withTW()`.

### Typography Scale

| Size | Token | Rem | Pixels | Usage |
|------|-------|-----|--------|-------|
| **xs** | `text-xs` | 0.75rem | 12px | Captions, labels |
| **sm** | `text-sm` | 0.875rem | 14px | Small body text |
| **base** | `text-base` | 1rem | 16px | Default body text |
| **lg** | `text-lg` | 1.125rem | 18px | Emphasized text |
| **xl** | `text-xl` | 1.25rem | 20px | Headings (H4) |
| **2xl** | `text-2xl` | 1.5rem | 24px | Headings (H3) |
| **3xl** | `text-3xl` | 1.875rem | 30px | Headings (H2) |

**Font Family:** System font stack (Tailwind default)

### Spacing Scale

Force UI uses Tailwind's spacing scale (0.25rem = 4px base unit):

| Token | Rem | Pixels | Common Usage |
|-------|-----|--------|--------------|
| `p-1` | 0.25rem | 4px | Tight spacing |
| `p-2` | 0.5rem | 8px | Component padding |
| `p-4` | 1rem | 16px | Standard spacing |
| `p-6` | 1.5rem | 24px | Section spacing |
| `p-8` | 2rem | 32px | Large spacing |

**Consistency Rule:** Use spacing scale multiples of 4px (4, 8, 12, 16, 24, 32...).

### Border Radius

| Token | Rem | Pixels | Usage |
|-------|-----|--------|-------|
| `rounded-sm` | 0.125rem | 2px | Subtle rounding |
| `rounded` | 0.25rem | 4px | Standard buttons/inputs |
| `rounded-md` | 0.375rem | 6px | Cards |
| `rounded-lg` | 0.5rem | 8px | Larger cards |
| `rounded-full` | 9999px | Full | Avatars, pills |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle depth |
| `shadow` | `0 1px 3px 0 rgb(0 0 0 / 0.1)` | Standard elevation |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Raised elements |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Modals, dropdowns |

**Custom:** Force UI also defines `soft-shadow-*` variants for gentler shadows.

---

## Component Patterns

### Button Hierarchy

Use button variants to establish visual hierarchy:

1. **Primary** - Main action (e.g., "Save", "Submit")
   - Limit to 1 per screen/section
   - Blue background, white text

2. **Secondary** - Secondary actions (e.g., "Cancel", "Skip")
   - Gray background, white text
   - Use for alternate paths

3. **Tertiary** - Tertiary actions (e.g., "Learn More", "Advanced")
   - White background, bordered
   - Use for less important actions

4. **Danger** - Destructive actions (e.g., "Delete", "Remove")
   - Red background, white text
   - Always confirm with a dialog

**Example:**

```tsx
<div className="flex gap-2">
  <Button variant="primary">Save Changes</Button>
  <Button variant="tertiary">Cancel</Button>
</div>
```

### Form Layout Patterns

#### Vertical Forms (Default)

```tsx
<form className="space-y-4">
  <Input label="Email" type="email" />
  <Input label="Password" type="password" />
  <Button variant="primary" type="submit">Sign In</Button>
</form>
```

#### Horizontal Forms (Labels Beside Inputs)

```tsx
<form className="space-y-4">
  <div className="flex items-center gap-4">
    <Label className="w-32">Email</Label>
    <Input type="email" />
  </div>
  <div className="flex items-center gap-4">
    <Label className="w-32">Password</Label>
    <Input type="password" />
  </div>
</form>
```

#### Inline Forms (Compact)

```tsx
<form className="flex gap-2">
  <Input placeholder="Enter email" />
  <Button variant="primary">Subscribe</Button>
</form>
```

### Feedback Patterns

#### Success Feedback

```tsx
// Inline success
<Alert type="success" closable>
  Settings saved successfully!
</Alert>

// Toast notification
toast.success('Settings saved!');
```

#### Error Feedback

```tsx
// Field-level error
<Input
  label="Email"
  error={errors.email}
  value={email}
  onChange={handleChange}
/>

// Form-level error
<Alert type="error">
  Please fix the errors below before submitting.
</Alert>
```

#### Loading States

```tsx
// Button loading
<Button variant="primary" loading={isSubmitting}>
  Save Changes
</Button>

// Skeleton loaders
<Skeleton className="h-8 w-full" />
<Skeleton className="h-8 w-3/4" />
```

### Dialog Patterns

#### Confirmation Dialog

```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen} title="Confirm Deletion">
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  <div className="flex gap-2 justify-end mt-4">
    <Button variant="tertiary" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  </div>
</Dialog>
```

#### Form Dialog

```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen} title="Add New Item">
  <form onSubmit={handleSubmit} className="space-y-4">
    <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
    <div className="flex gap-2 justify-end">
      <Button variant="tertiary" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Add Item
      </Button>
    </div>
  </form>
</Dialog>
```

---

## Microcopy Guidelines

Microcopy refers to small bits of text in the UI (button labels, error messages, placeholders).

### Tone and Voice

- **Conversational** - Write like you're helping a friend
- **Clear** - Avoid jargon, use simple words
- **Concise** - Respect users' time
- **Encouraging** - Positive framing

### Button Labels

**Use action verbs:**

| Good ✅ | Bad ❌ |
|---------|--------|
| Save Changes | OK |
| Delete Account | Yes |
| Download Report | Submit |
| Learn More | Click Here |

**Be specific:**

| Good ✅ | Bad ❌ |
|---------|--------|
| Send Invitation | Submit |
| Export to CSV | Download |
| Create New Post | Add |

### Error Messages

**Be helpful, not blaming:**

| Good ✅ | Bad ❌ |
|---------|--------|
| Please enter a valid email address | Invalid input |
| Password must be at least 8 characters | Error: Password too short |
| This email is already registered. Try signing in instead. | Email already exists |

**Provide next steps:**

```tsx
<Alert type="error">
  Failed to connect to the server. Please check your internet connection and try again.
</Alert>
```

### Success Messages

**Confirm what happened:**

| Good ✅ | Bad ❌ |
|---------|--------|
| Settings saved successfully | Success |
| Invitation sent to sarah@example.com | Done |
| 3 items deleted | Complete |

### Helper Text

**Explain, don't repeat the label:**

```tsx
// ✅ Good
<Input
  label="API Key"
  helper="You can find your API key in your account settings"
/>

// ❌ Bad
<Input
  label="API Key"
  helper="Enter your API key"
/>
```

### Placeholders

**Show examples, not instructions:**

```tsx
// ✅ Good
<Input placeholder="you@example.com" />
<Input placeholder="https://example.com" />

// ❌ Bad
<Input placeholder="Enter your email" />
<Input placeholder="Type a URL" />
```

### Empty States

**Explain why it's empty and what to do:**

```tsx
<div className="text-center py-12">
  <p className="text-text-secondary mb-4">
    You haven't created any projects yet.
  </p>
  <Button variant="primary">Create Your First Project</Button>
</div>
```

---

## Accessibility Considerations

### Color Contrast

- **Text on backgrounds:** Minimum 4.5:1 contrast ratio (WCAG AA)
- **Large text:** Minimum 3:1 contrast ratio
- **Do not rely on color alone** - Use icons, text labels

### Focus Indicators

All interactive elements must have visible focus states:

```tsx
<button className="focus:ring-2 focus:ring-focus focus:ring-offset-2">
  Click Me
</button>
```

### Alt Text for Icons

```tsx
// ✅ Good
<button aria-label="Close dialog">
  <X className="w-4 h-4" />
</button>

// ❌ Bad
<button>
  <X />
</button>
```

---

## Responsive Design Principles

### Mobile-First

Start with mobile layout, then enhance for larger screens:

```tsx
<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full md:w-1/3">Sidebar</div>
  <div className="w-full md:w-2/3">Content</div>
</div>
```

### Touch Targets

Minimum 44x44px for touch targets on mobile:

```tsx
<button className="min-h-[44px] min-w-[44px] p-2">
  <Icon />
</button>
```

---

## Animation Principles

### Purpose-Driven

Only animate when it serves a purpose:
- **Feedback** - Confirm user action (button press, toggle)
- **Transition** - Guide user attention (dialog open/close)
- **Hierarchy** - Show relationships (accordion expand/collapse)

### Duration

| Type | Duration | Usage |
|------|----------|-------|
| **Micro** | 100-200ms | Hover states, button press |
| **Standard** | 200-300ms | Dialogs, dropdowns |
| **Complex** | 300-500ms | Page transitions |

### Easing

- **Ease-out** - Elements entering (start fast, end slow)
- **Ease-in** - Elements exiting (start slow, end fast)
- **Ease-in-out** - Elements moving (smooth acceleration/deceleration)

### Respect User Preferences

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.2,
    ease: 'easeOut',
  }}
/>
```

Framer Motion automatically respects `prefers-reduced-motion`.

---

## Best Practices Summary

✅ **Do:**
- Use semantic color tokens
- Follow Tailwind spacing scale
- Write clear, action-oriented copy
- Provide helpful error messages
- Ensure 4.5:1 color contrast
- Test keyboard navigation
- Use animations purposefully

❌ **Don't:**
- Use raw color values (e.g., `#2563EB`)
- Use arbitrary spacing (e.g., `p-[13px]`)
- Write vague button labels (e.g., "OK", "Submit")
- Blame users in error messages
- Rely on color alone for meaning
- Animate just because you can

---

**Key Takeaway:** Force UI's design system prioritizes clarity, consistency, and user-friendliness. Use semantic tokens, write helpful copy, and design for accessibility from the start.

Last updated: February 2026
