# Documentation Maintenance

How to keep the internal documentation up to date as Force UI evolves.

## Overview

Internal documentation (this folder) requires regular updates to stay accurate and useful. This guide explains when and how to update docs.

## When to Update Documentation

### Always Update When:

1. **Adding a new component**
   - Add component to list in `README.md`
   - Document API in `apis.md`
   - Update `codebase-map.md` if new folder created

2. **Changing component APIs**
   - Update prop types in `apis.md`
   - Add migration notes if breaking change
   - Update code examples

3. **Changing build system**
   - Update `architecture.md` if build process changes
   - Update `README.md` if install/build commands change

4. **Adding new patterns or conventions**
   - Update `coding-standards.md` with new patterns
   - Update `ai-agent-guide.md` with new conventions

### Consider Updating When:

1. **Fixing common bugs**
   - Add to `troubleshooting.md` if bug is recurring
   - Update `faq.md` if question asked multiple times

2. **Improving onboarding**
   - Update `onboarding.md` based on new developer feedback
   - Add missing steps or clarifications

3. **Changing design principles**
   - Update `product-vision.md` for strategy changes
   - Update `ui-and-copy.md` for design system changes

## Update Workflow

### Step 1: Identify What Changed

Use git to see recent changes:

```bash
# See files changed in last 10 commits
git log --name-only --oneline -10

# See changes in specific component
git log --oneline --follow src/components/button/
```

### Step 2: Determine Affected Docs

| Change | Docs to Update |
|--------|----------------|
| New component | `README.md`, `apis.md`, `codebase-map.md` |
| API change | `apis.md`, `ai-agent-guide.md` (if pattern changes) |
| Build change | `architecture.md`, `README.md` |
| New pattern | `coding-standards.md`, `ai-agent-guide.md` |
| Bug fix | `troubleshooting.md` (if recurring issue) |
| Design change | `ui-and-copy.md`, `product-vision.md` |

### Step 3: Make Updates

#### Updating Component Lists

**In `README.md`:**

Keep component count accurate:

```markdown
**Key Features:**
- 🎨 45+ customizable React components  <!-- Update count -->
```

**In `apis.md`:**

Add new component section:

```markdown
### NewComponent

**File:** `src/components/new-component/new-component.tsx`

**Props:**

\```typescript
interface NewComponentProps {
  variant?: 'primary' | 'secondary';
}
\```

**Usage:**

\```tsx
<NewComponent variant="primary">Content</NewComponent>
\```
```

**In `codebase-map.md`:**

Add to component list:

```markdown
| **New Category** | NewComponent, ... |
```

#### Updating Architecture Docs

**When build process changes:**

Update `architecture.md` diagrams and explanations:

```markdown
## Build Architecture

### Source to Distribution Flow

\```
src/ ──► TypeScript ──► Vite ──► dist/
    (updated flow diagram)
\```
```

#### Updating Code Examples

**Find outdated examples:**

```bash
# Search for old API usage
grep -r "oldPropName" internal-docs/
```

**Update to new API:**

```markdown
<!-- Old -->
<Button color="blue">Click</Button>

<!-- New -->
<Button variant="primary">Click</Button>
```

### Step 4: Verify Changes

1. **Check markdown formatting:**
   ```bash
   # Install markdown linter (if not installed)
   npm install -g markdownlint-cli

   # Lint docs
   markdownlint internal-docs/*.md
   ```

2. **Check links work:**

   Manually click through relative links in each file.

3. **Test code examples:**

   Copy code examples into Storybook to verify they work.

### Step 5: Commit Updates

**Commit message format:**

```
docs(internal): update [file] for [reason]

- Specific change 1
- Specific change 2
```

**Examples:**

```
docs(internal): update apis.md with DatePicker component

- Add DatePicker API reference
- Include usage examples
- Document all props
```

```
docs(internal): update architecture.md for Vite 5 upgrade

- Reflect new build configuration
- Update entry point structure
- Add note about compatibility
```

---

## Automation Script

Use the provided automation script to identify docs needing updates:

### `scripts/update-internal-docs.sh`

**Usage:**

```bash
# Check last 10 commits
./scripts/update-internal-docs.sh

# Check specific commit range
./scripts/update-internal-docs.sh HEAD~20..HEAD

# Check changes since last tag
./scripts/update-internal-docs.sh 1.5.0..HEAD
```

**What it does:**

1. Lists files changed in commit range
2. Suggests which docs might need updates
3. Outputs a checklist of docs to review

**Example output:**

```
Files changed:
  src/components/button/button.tsx
  src/components/new-component/

Suggested doc updates:
  ☐ apis.md - Button API changed
  ☐ codebase-map.md - New component folder created
  ☐ README.md - Update component count

Review these docs and update as needed.
```

---

## Regular Maintenance Schedule

### After Each Release

- [ ] Update version numbers in `README.md`
- [ ] Update "Last updated" dates in all files
- [ ] Review `product-vision.md` roadmap
- [ ] Check all code examples still work

### Monthly

- [ ] Review `troubleshooting.md` for new common issues
- [ ] Review `faq.md` for questions from GitHub issues
- [ ] Check for broken links
- [ ] Review `onboarding.md` for clarity

### Quarterly

- [ ] Full audit of all documentation
- [ ] Remove outdated information
- [ ] Add new sections based on team feedback
- [ ] Update screenshots/diagrams if UI changed

---

## Documentation Quality Checklist

Before considering docs "updated":

- [ ] **Accurate** - Information reflects current codebase
- [ ] **Complete** - No missing sections or TBD placeholders
- [ ] **Clear** - Written for target audience (developers, AI agents)
- [ ] **Tested** - Code examples run without errors
- [ ] **Linked** - Cross-references to related docs
- [ ] **Formatted** - Consistent markdown formatting
- [ ] **Dated** - "Last updated" date is current

---

## Handling Breaking Changes

When documenting breaking changes:

1. **Update affected docs** (APIs, coding standards, etc.)

2. **Add migration guide** in `CHANGELOG.md`:

   ```markdown
   ## 2.0.0 - Breaking Changes

   ### Button API Changed

   **Before:**
   \```tsx
   <Button color="blue">Click</Button>
   \```

   **After:**
   \```tsx
   <Button variant="primary">Click</Button>
   \```

   **Migration:**
   - Replace `color="blue"` with `variant="primary"`
   - Replace `color="red"` with `variant="danger"`
   ```

3. **Update README.md** with migration instructions

4. **Note in `troubleshooting.md`** if change causes common issues

---

## Documentation Style Guide

### Tone

- **Clear and concise** - Respect reader's time
- **Friendly but professional** - Not too casual, not too formal
- **Action-oriented** - Use imperatives (e.g., "Update the file", not "You should update")

### Formatting

**Headings:**
- Use sentence case: "Component structure" not "Component Structure"
- Be descriptive: "Adding a new component" not "New components"

**Code blocks:**
- Always specify language for syntax highlighting
- Include comments for clarity
- Show both good and bad examples when helpful

**Lists:**
- Use bullets for unordered items
- Use numbers for sequential steps
- Keep items parallel in structure

**Links:**
- Use relative links for internal docs: `[Architecture](architecture.md)`
- Use descriptive link text: `[Coding Standards](coding-standards.md)` not `[click here](coding-standards.md)`

### Examples

```markdown
<!-- ✅ Good -->
### Adding a New Component

Create the component file:

\```typescript
// src/components/my-component/my-component.tsx
import React from 'react';

export interface MyComponentProps {
  variant?: 'primary' | 'secondary';
}

export const MyComponent: React.FC<MyComponentProps> = ({ variant = 'primary' }) => {
  return <div>My Component</div>;
};
\```

<!-- ❌ Bad -->
### New component

You can create a new component like this:

\```
const MyComponent = () => <div>My Component</div>
\```
```

---

## Getting Help

If you're unsure how to update docs:

1. **Look at git history:**
   ```bash
   git log internal-docs/apis.md
   ```

2. **Ask the team:**
   Create a GitHub issue: "How should I document [change]?"

3. **Follow existing patterns:**
   Look at how similar changes were documented before

---

## Automation Ideas (Future)

Potential automation to consider:

1. **Auto-generate component list** from `src/components/`
2. **Auto-update "Last updated" dates** on commit
3. **Lint code examples** in markdown files
4. **Check for broken links** in CI
5. **Generate API docs** from TypeScript definitions

---

**Key Takeaway:** Keep docs updated as the code changes. Set reminders for regular maintenance. Well-maintained docs make everyone more productive.

Last updated: February 2026
