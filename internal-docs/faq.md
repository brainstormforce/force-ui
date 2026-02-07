# Frequently Asked Questions

Common questions about Force UI development and usage.

## General Questions

### What is Force UI?

Force UI is a React component library built with TypeScript and Tailwind CSS. It provides 40+ production-ready UI components designed for Brainstorm Force (BSF) products and WordPress admin interfaces.

**Key Features:**
- TypeScript for type safety
- Tailwind CSS for styling
- Storybook for documentation
- Accessibility-first design
- Tree-shakeable bundle

---

### Who should use Force UI?

**Primary users:**
- BSF product developers (SureRank, SureForms, SureMails, etc.)
- WordPress plugin authors building admin UIs

**Not ideal for:**
- Public-facing websites (WordPress themes) - designed for admin interfaces
- Non-React projects - Force UI requires React

---

### Is Force UI open source?

The repository is hosted on GitHub but is primarily maintained by Brainstorm Force for internal use. External contributions are welcome via pull requests.

**Repository:** https://github.com/brainstormforce/force-ui

---

## Installation and Setup

### How do I install Force UI?

**Via npm (git dependency):**

```bash
npm install @bsf/force-ui@git+https://github.com/brainstormforce/force-ui.git#1.5.0
```

**Then configure Tailwind:**

```javascript
// tailwind.config.js
const withTW = require('@bsf/force-ui/withTW');

module.exports = withTW({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
});
```

See [README.md](README.md) for full setup instructions.

---

### Why isn't Force UI on npm?

Force UI is currently distributed via GitHub tags. Future plans include publishing to npm as `@bsf/force-ui`.

**Current approach:** Git-based installation works well for BSF internal use and provides version control via tags.

---

### Do I need to use Tailwind CSS?

**Yes.** Force UI is built on Tailwind CSS and requires it to function properly. All component styles are Tailwind utility classes.

**Why Tailwind?**
- Consistent design system
- Easy customization via theme
- Small bundle size (unused styles purged)
- Developer-friendly

---

## Usage Questions

### Can I customize component styles?

**Yes, in three ways:**

1. **Override Tailwind theme:**
   ```javascript
   // tailwind.config.js
   module.exports = withTW({
     theme: {
       extend: {
         colors: {
           'button-primary': '#6B21A8',  // Override blue to purple
         },
       },
     },
   });
   ```

2. **Add className prop:**
   ```tsx
   <Button className="mt-4 shadow-lg">Custom Styles</Button>
   ```

3. **Styled Components (not recommended):**
   ```tsx
   import styled from 'styled-components';
   const StyledButton = styled(Button)`
     custom-styles
   `;
   ```

**Recommendation:** Use Tailwind theme overrides for consistency.

---

### Can I use Force UI with Next.js/Gatsby/Remix?

**Yes!** Force UI works with any React framework that supports:
- React 18.3+
- Tailwind CSS 3.4+
- TypeScript (optional but recommended)

**Next.js example:**

```javascript
// next.config.js
module.exports = {
  transpilePackages: ['@bsf/force-ui'],
};
```

```javascript
// tailwind.config.js
const withTW = require('@bsf/force-ui/withTW');

module.exports = withTW({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
});
```

---

### Does Force UI support dark mode?

**Not out-of-the-box.** Force UI currently provides a light theme by default.

**Workaround:** Override color tokens for dark mode:

```javascript
module.exports = withTW({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--bg-primary)',
        'text-primary': 'var(--text-primary)',
      },
    },
  },
});
```

Then toggle CSS variables:

```css
:root {
  --bg-primary: #FFFFFF;
  --text-primary: #111827;
}

.dark {
  --bg-primary: #111827;
  --text-primary: #FFFFFF;
}
```

**Roadmap:** Native dark mode support is planned for future releases.

---

### Can I use Force UI without TypeScript?

**Yes, but not recommended.** Force UI is written in TypeScript and provides full type definitions. You'll lose:
- IntelliSense in your IDE
- Type-checking for props
- Autocomplete for component variants

**Plain JavaScript usage:**

```jsx
import { Button } from '@bsf/force-ui';

<Button variant="primary">Click Me</Button>
```

Works fine, but you miss type safety.

---

## Development Questions

### How do I run Force UI locally?

```bash
# Clone repository
git clone https://github.com/brainstormforce/force-ui.git
cd force-ui

# Install dependencies
npm install

# Start Storybook (component explorer)
npm run storybook
```

Storybook opens at http://localhost:6006

---

### How do I contribute to Force UI?

1. **Fork the repository** on GitHub
2. **Create a feature branch:** `git checkout -b feat/my-feature`
3. **Make changes** and test in Storybook
4. **Run tests:** `npm test`
5. **Lint code:** `npm run lint:js-fix`
6. **Create a pull request**

See [.github/CONTRIBUTING.md](../.github/CONTRIBUTING.md) for details.

---

### How do I add a new component?

Follow the component structure pattern:

```
src/components/my-component/
├─ my-component.tsx           # Implementation
├─ my-component.stories.tsx   # Storybook stories
└─ index.ts                   # Export
```

Then add to `src/components/index.ts`:

```typescript
export { default as MyComponent } from './my-component';
```

See [AI Agent Guide](ai-agent-guide.md#creating-new-components) for detailed steps.

---

### How do I test my changes?

**Option 1: Storybook (recommended)**

```bash
npm run storybook
```

Browse your component stories and test interactively.

**Option 2: Test in a consumer project**

```bash
# In force-ui directory
npm run build
npm link

# In your project directory
npm link @bsf/force-ui
```

Now your project uses your local Force UI build.

---

## Build and Release Questions

### How does versioning work?

Force UI follows Semantic Versioning (SemVer):

- **Major (1.x.x):** Breaking changes
- **Minor (x.5.x):** New features (backward compatible)
- **Patch (x.x.0):** Bug fixes

**Current version:** 1.5.0

---

### How do I create a release?

1. **Update version in `package.json`:**
   ```json
   {
     "version": "1.6.0"
   }
   ```

2. **Update `changelog.txt`** with changes

3. **Build and package:**
   ```bash
   npm run release  # Runs build + package
   ```

4. **Create git tag:**
   ```bash
   git tag 1.6.0
   git push origin 1.6.0
   ```

5. **Create GitHub release** and attach `force-ui.zip`

See `.github/workflows/tag-release.yml` for automated release process.

---

### What's included in the release bundle?

The `force-ui.zip` created by `npm run package` contains:

- `dist/` - Compiled library (ESM + CJS + types)
- `package.json` - Package metadata
- `version.json` - Version info
- `changelog.txt` - Release notes

**Not included:** Source code, tests, Storybook, dev tools

---

## Performance Questions

### What's the bundle size?

**Full library:** ~200KB (minified, gzipped)

**Tree-shaken single component:** ~5-15KB (varies by component)

**Example:**
```javascript
import { Button } from '@bsf/force-ui';
// Only Button code is bundled (~8KB)
```

**Dependencies:** Adds ~100KB for React, Tailwind, Framer Motion (if not already in your project).

---

### How can I reduce bundle size?

1. **Import only what you need:**
   ```javascript
   // ✅ Good - tree-shakeable
   import { Button, Input } from '@bsf/force-ui';

   // ❌ Bad - imports everything
   import * as ForceUI from '@bsf/force-ui';
   ```

2. **Configure Tailwind to purge unused styles:**
   ```javascript
   module.exports = withTW({
     content: ['./src/**/*.{js,jsx,ts,tsx}'],  // Purges unused styles
   });
   ```

3. **Use code splitting:**
   ```javascript
   const Dialog = lazy(() => import('@bsf/force-ui').then(m => ({ default: m.Dialog })));
   ```

---

## Compatibility Questions

### What React version is required?

**Minimum:** React 18.3.1

Force UI uses React 18 features like `useId` and concurrent rendering.

---

### Does Force UI work with React 17?

**No.** React 18+ is required. Upgrade your project:

```bash
npm install react@18 react-dom@18
```

---

### What browsers are supported?

**Modern browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

**Legacy:** Limited IE11 support (via Babel polyfills, not recommended)

See `browserslist` in `package.json`:

```json
{
  "browserslist": [
    "last 1 version",
    "> 1%",
    "IE 10"
  ]
}
```

---

## Accessibility Questions

### Are Force UI components accessible?

**Yes.** Force UI prioritizes accessibility:

- ✅ Semantic HTML elements
- ✅ ARIA attributes where needed
- ✅ Keyboard navigation support
- ✅ Focus management (modals, dropdowns)
- ✅ Screen reader announcements
- ✅ Automated a11y testing via Storybook

**Testing:** Every component is tested with `@storybook/addon-a11y` and `axe-playwright`.

---

### How do I report accessibility issues?

Create a GitHub issue with:
- Component name
- Description of the issue
- WCAG criterion violated (if known)
- Steps to reproduce

We take accessibility seriously and prioritize a11y bug fixes.

---

## Still Have Questions?

- **Read the docs:** Browse [internal-docs/](README.md)
- **Check GitHub:** [github.com/brainstormforce/force-ui/issues](https://github.com/brainstormforce/force-ui/issues)
- **Ask the team:** Create a new GitHub issue

---

**Key Takeaway:** Force UI is a TypeScript + Tailwind component library designed for BSF products. It's customizable, accessible, and optimized for WordPress admin interfaces.

Last updated: February 2026
