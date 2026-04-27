# force-ui

React component library for BSF projects. Publishes to GitHub Package Registry as `@bsf/force-ui`.

## Stack

- **React 18** + **TypeScript** — component authoring
- **Vite** — build (CJS + ESM outputs)
- **Tailwind CSS 3** — styling via `cn()` utility
- **Storybook 10** — component dev + visual regression (Chromatic)
- **Vitest** — unit/interaction tests (Storybook play functions)
- **ESLint + Prettier + Stylelint** — linting

## Commands

```bash
npm run build          # production build
npm run start          # build in watch mode
npm run storybook      # dev server at :6006
npm run test           # vitest (storybook project)
npm run test:watch     # vitest in watch mode
npm run lint:js-fix    # eslint + prettier fix
npm run lint:css-fix   # stylelint fix
npx tsc --noEmit      # type-check only
```

## Component Conventions

Each component lives at `src/components/{name}/`:
```
{name}.tsx          # component implementation
{name}.stories.tsx  # Storybook stories
index.ts            # named exports
readme.md           # usage docs
```

### Authoring pattern

```tsx
import { forwardRef } from 'react';
import { cn } from '@/utilities/functions';

export interface FooProps {
  /** JSDoc for every prop — Storybook renders these as docs */
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Foo = forwardRef<HTMLDivElement, FooProps>(
  ({ variant = 'primary', className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('base-classes', className)} {...props} />
    );
  }
);
Foo.displayName = 'Foo';
export default Foo;
```

- Always `forwardRef` + `displayName`
- Export props interface with component
- `cn()` from `@/utilities/functions` for class merging
- Path alias `@/` → `src/`
- Props interface JSDoc required — Storybook autodocs reads them

## Exports

New components go in `src/components/index.ts` and `src/index.ts`.

## Testing

Tests via Storybook `play` functions using `@storybook/test`. Run: `npm run test`. Add `play` to stories for interaction coverage.

## Current Focus

_Update this section with current sprint/task context._

## Gotchas

- `peerDependencies` for `react`/`react-dom` — consumers supply; don't bundle
- Storybook on `:6006`; `test-storybook` needs Storybook running first
- Chromatic upload needs `CHROMATIC_PROJECT_TOKEN` env var
- GitHub Package Registry — `npm publish` needs `NPM_TOKEN` with `write:packages` scope
- Add `.claude/settings.local.json` to local `.gitignore` for personal settings