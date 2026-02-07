# Troubleshooting

Common issues and solutions when working with Force UI.

## Installation Issues

### Problem: `npm install` Fails

**Symptoms:**
- Error: "Cannot find module..."
- Error: "ERESOLVE unable to resolve dependency tree"

**Solutions:**

1. **Use correct Node version:**
   ```bash
   node --version  # Should be 18.15.0 (or compatible)
   ```

   Install Node 18.15.0 via Volta (recommended):
   ```bash
   curl https://get.volta.sh | bash
   volta install node@18.15.0
   ```

2. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   ```

3. **Check npm version:**
   ```bash
   npm --version  # Should be 8.x or higher
   npm install -g npm@latest
   ```

---

### Problem: Git Installation Fails (Installing as Dependency)

**Symptoms:**
- Error: "fatal: could not read Username for 'https://github.com'"
- Installation hangs

**Solutions:**

1. **Use SSH instead of HTTPS:**
   ```bash
   npm install git+ssh://git@github.com:brainstormforce/force-ui.git#1.5.0
   ```

2. **Use personal access token:**
   ```bash
   npm install git+https://<TOKEN>@github.com/brainstormforce/force-ui.git#1.5.0
   ```

3. **Clone manually then install:**
   ```bash
   git clone https://github.com/brainstormforce/force-ui.git
   cd force-ui
   npm install
   npm run build
   npm link  # Use in other projects with `npm link @bsf/force-ui`
   ```

---

## Build Issues

### Problem: `npm run build` Fails

**Symptoms:**
- TypeScript errors
- Vite build errors

**Solutions:**

1. **Check TypeScript errors:**
   ```bash
   npm run tsc -b
   ```

   Fix any type errors before building.

2. **Clear build cache:**
   ```bash
   rm -rf dist/
   rm -rf tsconfig.*.tsbuildinfo
   npm run build
   ```

3. **Check for syntax errors:**
   ```bash
   npm run lint:js
   ```

---

### Problem: Build Output Missing Files

**Symptoms:**
- `dist/` folder incomplete
- Components missing from build

**Solutions:**

1. **Verify component is exported:**

   Check `src/components/index.ts`:
   ```typescript
   export { default as MyComponent } from './my-component';
   ```

2. **Check Vite config:**

   Ensure entry point includes component:
   ```typescript
   // vite.config.ts
   entry: {
     'force-ui': resolve(process.cwd(), 'src/index.ts'),
   }
   ```

3. **Rebuild from scratch:**
   ```bash
   rm -rf dist/ node_modules/
   npm install
   npm run build
   ```

---

## Storybook Issues

### Problem: Storybook Won't Start

**Symptoms:**
- Error: "Cannot find module '@storybook/...'"
- Port 6006 already in use

**Solutions:**

1. **Reinstall Storybook dependencies:**
   ```bash
   npm install --save-dev @storybook/react-vite @storybook/test
   ```

2. **Use different port:**
   ```bash
   npm run storybook -- --port 6007
   ```

3. **Kill process on port 6006:**
   ```bash
   lsof -ti:6006 | xargs kill -9
   npm run storybook
   ```

---

### Problem: Components Not Showing in Storybook

**Symptoms:**
- Component missing from sidebar
- Story file exists but doesn't appear

**Solutions:**

1. **Check story file naming:**

   Must end with `.stories.tsx`:
   ```
   my-component.stories.tsx  ✅
   my-component.story.tsx    ❌
   ```

2. **Verify story export:**

   ```typescript
   import type { Meta } from '@storybook/react';
   import MyComponent from './my-component';

   const meta: Meta<typeof MyComponent> = {
     title: 'Components/MyComponent',  // Must have title
     component: MyComponent,
   };

   export default meta;  // Must export default
   ```

3. **Restart Storybook:**
   ```bash
   # Stop Storybook (Ctrl+C)
   npm run storybook
   ```

---

## Styling Issues

### Problem: Tailwind Styles Not Applied

**Symptoms:**
- Components appear unstyled
- Tailwind classes have no effect

**Solutions:**

1. **Verify Tailwind import:**

   Check `src/index.ts` includes:
   ```typescript
   import './tailwind.css';
   ```

2. **Check `withTW` wrapper in consumer:**

   ```javascript
   // tailwind.config.js
   const withTW = require('@bsf/force-ui/withTW');

   module.exports = withTW({
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
   });
   ```

3. **Verify content paths include Force UI:**

   ```javascript
   module.exports = withTW({
     content: [
       './src/**/*.{js,jsx,ts,tsx}',
       './node_modules/@bsf/force-ui/dist/**/*.js',  // Add this
     ],
   });
   ```

---

### Problem: Custom Colors Not Working

**Symptoms:**
- Custom color tokens not applied
- Colors revert to defaults

**Solutions:**

1. **Override in `withTW` config:**

   ```javascript
   const withTW = require('@bsf/force-ui/withTW');

   module.exports = withTW({
     theme: {
       extend: {
         colors: {
           'button-primary': '#6B21A8',  // Override Force UI default
         },
       },
     },
   });
   ```

2. **Check color token exists:**

   See `src/utilities/withTW.js` for all available tokens.

3. **Rebuild Tailwind:**

   ```bash
   rm -rf .next/  # or your build cache
   npm run dev
   ```

---

## TypeScript Issues

### Problem: Type Errors in IDE

**Symptoms:**
- Red squiggles in VS Code
- "Cannot find module '@bsf/force-ui'"

**Solutions:**

1. **Install type declarations:**

   After building Force UI:
   ```bash
   npm run build  # Generates dist/force-ui.d.ts
   ```

2. **Check tsconfig.json:**

   ```json
   {
     "compilerOptions": {
       "moduleResolution": "node",
       "types": ["node", "react"]
     }
   }
   ```

3. **Restart TypeScript server:**

   In VS Code: `Cmd+Shift+P` → "TypeScript: Restart TS Server"

---

### Problem: Path Alias Not Resolving

**Symptoms:**
- Import from `@/components` fails
- "Cannot find module '@/components'"

**Solutions:**

1. **Check tsconfig paths:**

   In Force UI development:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./src/*"],
         "@/components/*": ["./src/components/*"]
       }
     }
   }
   ```

2. **Check Vite alias config:**

   ```typescript
   // vite.config.ts
   resolve: {
     alias: {
       '@': resolve(process.cwd(), 'src'),
     }
   }
   ```

---

## Runtime Issues

### Problem: Component Ref Not Working

**Symptoms:**
- `ref.current` is null
- Ref not forwarded to element

**Solution:**

Ensure component uses `forwardRef`:

```typescript
import { forwardRef } from 'react';

const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);

MyComponent.displayName = 'MyComponent';
```

---

### Problem: Framer Motion Animation Not Working

**Symptoms:**
- No animation on Dialog/Drawer open/close
- Elements appear/disappear instantly

**Solutions:**

1. **Wrap with AnimatePresence:**

   ```tsx
   import { AnimatePresence } from 'framer-motion';

   <AnimatePresence>
     {isOpen && (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
       />
     )}
   </AnimatePresence>
   ```

2. **Check `prefers-reduced-motion`:**

   Framer Motion respects user preference. Test with:
   ```css
   /* Disable in DevTools for testing */
   @media (prefers-reduced-motion: reduce) {
     * { animation: none !important; }
   }
   ```

---

## Testing Issues

### Problem: Storybook Tests Fail

**Symptoms:**
- `npm test` fails
- Accessibility violations

**Solutions:**

1. **Run tests in watch mode for debugging:**
   ```bash
   npm run test:watch
   ```

2. **Check specific test:**
   ```bash
   npm test -- --testNamePattern="Button"
   ```

3. **Fix accessibility violations:**

   Check Storybook's Accessibility tab and fix issues:
   - Add `aria-label` to icon buttons
   - Ensure sufficient color contrast
   - Add keyboard navigation

---

## Performance Issues

### Problem: Slow Storybook Load

**Symptoms:**
- Storybook takes >30 seconds to load
- Browser freezes

**Solutions:**

1. **Reduce number of stories:**

   Comment out unused stories temporarily:
   ```typescript
   // export const AllVariants: Story = { ... };
   ```

2. **Disable addons:**

   In `.storybook/main.ts`:
   ```typescript
   addons: [
     '@storybook/addon-essentials',
     // '@storybook/addon-a11y',  // Disable temporarily
   ],
   ```

3. **Clear Storybook cache:**
   ```bash
   rm -rf node_modules/.cache/storybook
   npm run storybook
   ```

---

## Git/Release Issues

### Problem: Can't Create Release

**Symptoms:**
- `bin/build.sh` fails
- ZIP file empty

**Solutions:**

1. **Build first:**
   ```bash
   npm run build
   npm run package
   ```

2. **Check dist/ exists:**
   ```bash
   ls -la dist/
   ```

3. **Run script manually:**
   ```bash
   sh bin/build.sh
   ls -lh force-ui.zip
   ```

---

## Still Having Issues?

If none of these solutions work:

1. **Check GitHub Issues:** [github.com/brainstormforce/force-ui/issues](https://github.com/brainstormforce/force-ui/issues)

2. **Create a new issue** with:
   - Steps to reproduce
   - Error messages (full output)
   - Environment info (Node version, OS, npm version)
   - What you've already tried

3. **Include diagnostics:**
   ```bash
   node --version
   npm --version
   npm list @bsf/force-ui
   ```

---

**Key Takeaway:** Most issues are solved by clearing caches, reinstalling dependencies, or verifying configuration. When in doubt, start fresh!

Last updated: February 2026
