## Getting Started - Development Repo

Learn how to use @bsf/force-ui components to quickly and easily create elegant and flexible pages using Tailwind CSS.

@bsf/force-ui is working with Tailwind CSS classes and you need to have Tailwind CSS installed on your project - <a href="https://tailwindcss.com/docs/installation/framework-guides?ref=bsf-force-ui" target="_blank">Tailwind CSS Installation.</a>

<br />

## Migrating to v2.0.0 (Tailwind CSS v4)

> **Breaking change.** `@bsf/force-ui@2.0.0` targets **Tailwind CSS v4**, which is CSS-first. The JS `withTW()` helper is **deprecated** in favor of a shipped CSS theme, and every consumer must update its CSS entry and PostCSS setup. `withTW()` still works via Tailwind's legacy `@config` path but will be removed in `3.0.0`.
>
> _@since x.x.x_

**Before (v1.x / Tailwind v3):**

```js
// tailwind.config.js
const withTW = require( '@bsf/force-ui/withTW' );

module.exports = withTW( {
	content: [ './src/**/*.{js,jsx}' ],
	theme: { extend: { colors: { 'button-primary': '#6B21A8' } } },
} );
```

```css
/* your CSS entry */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// postcss.config.js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

**After (v2.x / Tailwind v4):**

```css
/* your CSS entry — theme.css carries the Force UI design tokens */
@import "tailwindcss";
@import "@bsf/force-ui/theme.css";

/* Scan Force UI's shipped components + your own source */
@source "../node_modules/@bsf/force-ui/dist";

/* Override any Force UI token by redeclaring it */
@theme {
	--color-button-primary: #6B21A8;
}
```

```js
// postcss.config.js — autoprefixer is built in; nesting/import are built in
module.exports = { plugins: { '@tailwindcss/postcss': {} } };
```

You can usually **delete `tailwind.config.js`** (Tailwind v4 auto-detects sources). If you must keep a JS config, load it explicitly with `@config "./tailwind.config.js";` in your CSS — but note the keys below are gone.

**Config keys removed in Tailwind v4** (drop or replace them):

| v3 key | v4 replacement |
| --- | --- |
| `corePlugins: { preflight: false }` | Import layers selectively, or don't rely on Force UI to toggle preflight. `theme.css` emits no preflight. |
| `important: '<selector>'` | Selector-scoped important is gone. Scope via a wrapper element/prefix or `@custom-variant`. |
| `variants: { extend: {} }` | All variants are always available; remove the block. |
| `safelist: [...]` | Use `@source inline("...")` in CSS. |
| `plugins: [require('@tailwindcss/container-queries')]` | Container queries are built into v4 core; drop the plugin. |

The `not-rtl` variant ships inside `theme.css` (`@custom-variant not-rtl`), so it keeps working unchanged.

<br />

1. Install `@bsf/force-ui`.

Force UI library can be installed using npm package manager. Since this library is still in it's alpha phase, we need to use the staging branch.

Using Force UI as a dependency in package.json -

```json
"dependencies": {
  "@bsf/force-ui": "git+https://github.com/brainstormforce/force-ui#2.0.0"
}
```

And run the following command to install the package -


```bash
npm install
```

Or you can directly run the following command to install the package -

```bash
npm i -S @bsf/force-ui@git+https://github.com/brainstormforce/force-ui.git#2.0.0
```

<br />

2. Wire up Tailwind CSS v4 (CSS-first). Import Tailwind and the Force UI theme in your CSS entry, and point Tailwind's source scanning at the shipped components:

```css
/* your CSS entry (e.g. src/index.css) */
@import "tailwindcss";
@import "@bsf/force-ui/theme.css";

/* Scan Force UI's shipped components so their classes are generated */
@source "../node_modules/@bsf/force-ui/dist";
```

Use the Tailwind v4 PostCSS plugin (autoprefixer, nesting and import are all built in now, so you no longer need them):

```js
// postcss.config.js
module.exports = { plugins: { '@tailwindcss/postcss': {} } };
```

> Tailwind v4 auto-detects sources, so a `tailwind.config.js` is no longer required. If you still need a JS config (e.g. custom plugins), load it explicitly with `@config "./tailwind.config.js";` in your CSS — but note that `corePlugins`, selector-string `important`, `variants` and `safelist` were removed in v4 (see the migration table above). The deprecated `withTW()` helper remains available for that legacy path only.

<br />

3. Override the theme (optional). Force UI ships its design tokens as Tailwind v4 `@theme` variables in `@bsf/force-ui/theme.css`. Override any token by redeclaring it in your own `@theme` block after the import:

```css
@import "tailwindcss";
@import "@bsf/force-ui/theme.css";

@theme {
  /* Recolor the brand — every button/toggle/focus token derives from these */
  --color-button-primary: #6B21A8;
  --color-button-primary-hover: #7E22CE;
  --color-brand-primary-600: #6B21A8;
  --color-border-interactive: #6B21A8;
  --color-focus: #9333EA;
  --color-focus-border: #D8B4FE;
  --color-toggle-on: #6B21A8;

  /* Add your own tokens too */
  --text-xxs: 0.6875rem; /* 11px */
  --shadow-content-wrapper: 0px 1px 1px 0px #0000000F, 0px 1px 2px 0px #0000001A;
}
```

Token names map to CSS variables by namespace:

| Token type | Variable prefix | Example |
| --- | --- | --- |
| Colors | `--color-*` | `--color-brand-primary-600` |
| Box shadows | `--shadow-*` | `--shadow-soft-shadow` |
| Font sizes | `--text-*` | `--text-tiny` |
| Letter spacing | `--tracking-*` | `--tracking-2` |

The complete list of shipped tokens lives in [`@bsf/force-ui/theme.css`](./src/theme/theme.css). Spacing, sizing, line-height, z-index and fraction-width utilities are not declared as tokens — Tailwind v4 generates them dynamically (e.g. `p-4.5`, `w-1/7`, `leading-9.5`) at the same values as before. The `not-rtl` variant ships in `theme.css` and works out of the box.

<br />

4. Great 🥳, now you're ready to use @bsf/force-ui.

```jsx
import { Button } from "@bsf/force-ui";

export default function Example() {
  return <Button>My Button</Button>;
}
```

<br />

## MCP Setup

Force UI provides an MCP server that gives AI assistants accurate component usage context correct props, patterns, and examples. So you get reliable implementations without guesswork.

```bash
npx mcp-add --type http --url "https://forceui.brainstormforce.com/mcp" --scope project # use `global` instead of `project` for making it accessible globally
```

When prompted, use the following configuration:

| Prompt | Value |
| --- | --- |
| **What is the server name?** | `force-ui-mcp` |
| **HTTP headers? (comma-separated Key=value, or leave empty)** | Leave empty |
| **Which clients should be configured?** | Select your preferred AI client(s). Ex. Claude |
| **claude code OAuth client ID? (leave empty if not needed)** | Leave empty |

<br />

Now you are ready to use Force-UI MCP in your project.

<br />

## @bsf/force-ui Documentation

Visit <a href="https://github.com/brainstormforce/force-ui/wiki">https://github.com/brainstormforce/force-ui/wiki</a> for full documentation.


## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

Please adhere to this project's `CODE_OF_CONDUCT.md`.
