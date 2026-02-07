# Developer Onboarding

Welcome to Force UI! This guide provides structured learning paths for developers at different stages of familiarity with the codebase.

## Quick Reference

| Timeframe | Goal | Key Activities |
|-----------|------|----------------|
| **1 Hour** | Get Force UI running locally | Clone, install, run Storybook |
| **1 Day** | Understand architecture and make first contribution | Explore codebase, fix a bug or improve docs |
| **1 Week** | Build confidence with components and patterns | Create new component or feature |

---

## 1-Hour Quick Start

**Goal:** Get Force UI running on your machine and understand the basics.

### Step 1: Clone and Install (10 minutes)

```bash
# Clone the repository
git clone https://github.com/brainstormforce/force-ui.git
cd force-ui

# Install dependencies
npm install
```

**Expected output:** Dependencies installed successfully.

### Step 2: Start Storybook (5 minutes)

```bash
# Start Storybook development server
npm run storybook
```

**Expected output:** Storybook opens at http://localhost:6006

### Step 3: Explore Storybook (20 minutes)

1. Browse component categories in the sidebar
2. Try interactive examples:
   - **Button** - Change variants, sizes
   - **Input** - Try error states, helper text
   - **Dialog** - Open/close, different sizes
3. Use the **Controls** tab to experiment with props
4. Check the **Accessibility** tab for a11y insights

**Key Learning:** Force UI has 40+ components with consistent APIs (variant, size, etc.).

### Step 4: Read Core Documentation (25 minutes)

Read these internal docs in order:

1. **[README.md](README.md)** (5 min) - Project overview
2. **[Product Vision](product-vision.md)** (10 min) - Why Force UI exists
3. **[Architecture](architecture.md)** (10 min) - How it's built

**Key Learning:** Force UI is a TypeScript + Tailwind component library for BSF products.

### Step 5: Run Build (Optional)

```bash
# Build the library
npm run build

# Check the output
ls dist/
```

**Expected output:** `dist/` folder with ESM/CJS files and TypeScript declarations.

---

## 1-Day Deep Dive

**Goal:** Understand the codebase structure and make your first contribution.

### Morning: Codebase Exploration (4 hours)

#### Hour 1: Read Documentation

- **[Codebase Map](codebase-map.md)** (30 min) - Folder structure
- **[APIs](apis.md)** (30 min) - Component APIs and patterns

#### Hour 2: Explore Components

Pick 3 components to study in detail:

1. **Simple:** `Button` (`src/components/button/button.tsx`)
   - Note how props are typed
   - See how Tailwind classes are composed
   - Check the `.stories.tsx` file

2. **Medium:** `Input` (`src/components/input/input.tsx`)
   - Note label/helper/error pattern
   - See how controlled/uncontrolled works
   - Check prefix/suffix implementation

3. **Complex:** `Dialog` (`src/components/dialog/dialog.tsx`)
   - Note focus management
   - See how Framer Motion is used
   - Check accessibility features

**Exercise:** For each component, answer:
- What props does it accept?
- How does it handle variants/sizes?
- How is accessibility implemented?

#### Hour 3: Understand Build System

1. Read `vite.config.ts` - note entry points, output formats
2. Read `package.json` - note scripts and dependencies
3. Read `tsconfig.json` - note path aliases

**Exercise:** Build the library and inspect the output:

```bash
npm run build
ls -R dist/ | head -30
```

**Question:** Why does `preserveModules: true` matter for tree-shaking?

#### Hour 4: Run Tests

```bash
# Run Storybook tests
npm test

# Check code quality
npm run lint:js
npm run pretty-lint
```

**Exercise:** Pick one component story and add an interaction test.

### Afternoon: First Contribution (4 hours)

Choose one of these starter tasks:

#### Option A: Fix a Documentation Issue

1. Find a typo or unclear section in `internal-docs/`
2. Fix it and create a PR
3. Practice the git workflow (see [maintenance.md](maintenance.md))

#### Option B: Improve a Component Story

1. Pick a component with incomplete Storybook coverage
2. Add a new story variant or interaction test
3. Run `npm run storybook` to verify
4. Create a PR

#### Option C: Add TypeScript Types

1. Find a component with implicit types
2. Add explicit prop types and JSDoc comments
3. Run `npm run build` to verify types compile
4. Create a PR

**Goal:** Make a small, focused contribution to practice the workflow.

---

## 1-Week Mastery

**Goal:** Build deep knowledge and ship a meaningful contribution.

### Day 1: Quick Start + Deep Dive

Follow the 1-Hour and 1-Day paths above.

### Day 2: Design System Mastery

#### Morning: Study Design Principles

1. Read **[UI and Copy](ui-and-copy.md)** (1 hour)
2. Read **[Coding Standards](coding-standards.md)** (1 hour)
3. Study Tailwind theme in `src/utilities/withTW.js` (1 hour)

**Exercise:** Create a test page using 10+ Force UI components.

#### Afternoon: Accessibility Deep Dive

1. Run Storybook and check **Accessibility** tab for all components
2. Test keyboard navigation: Tab, Enter, Escape, Arrow keys
3. Test with a screen reader (VoiceOver on Mac, NVDA on Windows)

**Exercise:** Document any accessibility gaps you find.

### Day 3: Build a New Component

Pick a component not yet in Force UI (or a variant of an existing one):

**Suggested components:**
- **Stepper** - Multi-step form indicator
- **Chip** - Removable tag component
- **Rating** - Star rating input
- **Timeline** - Vertical timeline component

**Requirements:**
1. Follow the component structure pattern:
   ```
   src/components/my-component/
   ├─ my-component.tsx
   ├─ my-component.stories.tsx
   └─ index.ts
   ```
2. Use TypeScript with full type definitions
3. Support Tailwind theming
4. Create comprehensive Storybook stories
5. Ensure accessibility (keyboard nav, ARIA, focus management)
6. Add to `src/components/index.ts` export

**Deliverable:** Working component with stories, ready for review.

### Day 4: Refactoring and Optimization

Choose a refactoring task:

#### Option A: Extract Common Pattern

Find repeated logic across components and extract to a utility:
- Form validation logic
- Class name composition
- Focus trap logic

#### Option B: Performance Optimization

Profile a complex component and optimize:
- Add `React.memo` where beneficial
- Use `useCallback` for stable references
- Optimize re-renders

#### Option C: TypeScript Improvements

Improve type safety:
- Add generics to polymorphic components
- Create shared type definitions
- Add JSDoc comments to utilities

**Deliverable:** PR with measurable improvement.

### Day 5: Integration and Testing

#### Morning: Build an Example App

Create a small demo app using Force UI:

```bash
# Create new React app
npx create-react-app force-ui-demo
cd force-ui-demo

# Install Force UI
npm install @bsf/force-ui@git+https://github.com/brainstormforce/force-ui.git#1.5.0

# Configure Tailwind with withTW
```

**Build:** A settings page with:
- Form inputs (text, select, checkbox)
- Buttons (primary, secondary, danger)
- Alerts for feedback
- Dialog for confirmations

#### Afternoon: Write Comprehensive Tests

Add tests for your new component:
- Unit tests for utilities
- Interaction tests in Storybook
- Accessibility tests

```bash
npm run test
```

**Goal:** Achieve 100% coverage for your component.

---

## Learning Resources

### Internal Documentation

- **[README.md](README.md)** - Start here
- **[Architecture](architecture.md)** - System design
- **[APIs](apis.md)** - Component reference
- **[Troubleshooting](troubleshooting.md)** - Common issues

### External Resources

| Resource | Purpose |
|----------|---------|
| [React Docs](https://react.dev) | React patterns and hooks |
| [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | TypeScript fundamentals |
| [Tailwind CSS Docs](https://tailwindcss.com/docs) | Styling reference |
| [Storybook Docs](https://storybook.js.org/docs) | Component documentation |
| [Framer Motion Docs](https://www.framer.com/motion/) | Animation library |

### Code Examples

Browse existing components for patterns:
- **Simple component:** `src/components/badge/`
- **Form component:** `src/components/input/`
- **Complex component:** `src/components/dialog/`
- **Compound component:** `src/components/accordion/`

---

## Common Questions

### "Where do I start if I've never used Tailwind?"

1. Read [Tailwind Docs](https://tailwindcss.com/docs) - Core Concepts section
2. Study `src/utilities/withTW.js` to see Force UI's theme
3. Inspect existing components to see Tailwind in action
4. Use Storybook's **Controls** to see how utility classes affect appearance

### "I'm not familiar with TypeScript. Can I still contribute?"

Yes! Start with:
1. Documentation improvements (no TypeScript needed)
2. Storybook stories (minimal TypeScript)
3. Simple bug fixes (guided by existing patterns)

Then gradually learn TypeScript by reading component files.

### "How do I know if my code meets standards?"

Run these checks before committing:

```bash
npm run lint:js       # Check JavaScript/TypeScript
npm run pretty-lint   # Check formatting
npm test              # Run tests
```

All checks must pass before creating a PR.

### "Who do I ask for help?"

1. **Check docs first:** Search `internal-docs/` for answers
2. **Browse issues:** [GitHub Issues](https://github.com/brainstormforce/force-ui/issues)
3. **Ask the team:** Create a new GitHub issue with your question

---

## Next Steps After Week 1

Once you're comfortable with Force UI:

1. **Mentor others** - Help new developers onboard
2. **Review PRs** - Provide feedback on contributions
3. **Improve docs** - Keep internal docs up to date
4. **Advocate** - Encourage adoption in BSF products

---

**Key Takeaway:** Take it step by step. Start by exploring, then contributing small fixes, then building features. You'll be a Force UI expert in no time!

Last updated: February 2026
