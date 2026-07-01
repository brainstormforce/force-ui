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

## Theme Tokens Reference

Force UI ships all its design tokens as Tailwind v4 `@theme` variables in `@bsf/force-ui/theme.css`. The variable name **is** the utility name — e.g. `--color-brand-primary-600` powers `bg-brand-primary-600`, `text-brand-primary-600`, `border-brand-primary-600`, and so on.

To customize, copy the block below into your CSS entry (after the imports) and change the values you need — you only have to keep the lines you actually override:

<details>
<summary><strong>Show all tokens (copy &amp; modify)</strong></summary>

```css
@theme {
  /* brand */
  --color-brand-background-50: #EFF6FF;
  --color-brand-background-hover-100: #DBEAFE;
  --color-brand-200: #BFDBFE;
  --color-brand-border-300: #93C5FD;
  --color-brand-400: #60A5FA;
  --color-brand-500: #3B82F6;
  --color-brand-primary-600: #2563EB;
  --color-brand-hover-700: #1D4ED8;
  --color-brand-800: #1E40AF;
  --color-brand-900: #1E3A8A;
  --color-brand-text-950: #172554;
  /* background */
  --color-background-primary: #FFFFFF;
  --color-background-secondary: #F3F4F6;
  --color-background-inverse: #111827;
  --color-background-brand: #2563EB;
  --color-background-important: #DC2626;
  /* field */
  --color-field-primary-background: #F9FAFB;
  --color-field-secondary-background: #FFFFFF;
  --color-field-primary-hover: #F3F4F6;
  --color-field-secondary-hover: #F3F4F6;
  --color-field-dropzone-background: #FFFFFF;
  --color-field-border: #E5E7EB;
  --color-field-dropzone-background-hover: #F9FAFB;
  --color-field-dropzone-color: #2563EB;
  --color-field-label: #111827;
  --color-field-input: #111827;
  --color-field-helper: #6B7280;
  --color-field-background-disabled: #F9FAFB;
  --color-field-color-disabled: #BDC1C7;
  --color-field-placeholder: #6B7280;
  --color-field-border-disabled: #F3F4F6;
  --color-field-color-error: #DC2626;
  --color-field-border-error: #FECACA;
  --color-field-background-error: #FEF2F2;
  --color-field-required: #DC2626;
  /* border */
  --color-border-interactive: #2563EB;
  --color-border-subtle: #E5E7EB;
  --color-border-strong: #6B7280;
  --color-border-inverse: #374151;
  --color-border-disabled: #E5E7EB;
  --color-border-muted: #E5E7EB;
  --color-border-error: #DC2626;
  --color-border-transparent-subtle: #37415114;
  --color-border-white: #FFFFFF;
  /* text */
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-tertiary: #6B7280;
  --color-text-on-color: #FFFFFF;
  --color-text-error: #DC2626;
  --color-text-error-inverse: #F87171;
  --color-text-inverse: #FFFFFF;
  --color-text-disabled: #BDC1C7;
  --color-text-on-button-disabled: #9CA3AF;
  /* link */
  --color-link-primary: #2563EB;
  --color-link-primary-hover: #1D4ED8;
  --color-link-inverse: #38BDF8;
  --color-link-visited: #7C3AED;
  --color-link-visited-inverse: #A78BFA;
  --color-link-inverse-hover: #7DD3FC;
  /* icon */
  --color-icon-primary: #111827;
  --color-icon-secondary: #4B5563;
  --color-icon-on-color: #FFFFFF;
  --color-icon-inverse: #FFFFFF;
  --color-icon-interactive: #2563EB;
  --color-icon-on-color-disabled: #9CA3AF;
  --color-icon-disabled: #BDC1C7;
  /* support */
  --color-support-error: #DC2626;
  --color-support-success: #16A34A;
  --color-support-warning: #EAB308;
  --color-support-info: #0284C7;
  --color-support-error-inverse: #F87171;
  --color-support-success-inverse: #4ADE80;
  --color-support-warning-inverse: #FDE047;
  --color-support-info-inverse: #38BDF8;
  /* button */
  --color-button-primary: #2563EB;
  --color-button-primary-hover: #1D4ED8;
  --color-button-secondary: #1F2937;
  --color-button-secondary-hover: #374151;
  --color-button-tertiary: #FFFFFF;
  --color-button-tertiary-hover: #F9FAFB;
  --color-button-danger: #DC2626;
  --color-button-danger-secondary: #DC2626;
  --color-button-danger-hover: #B91C1C;
  --color-button-disabled: #F3F4F6;
  --color-button-tertiary-border: #E5E7EB;
  --color-button-tertiary-color: #111827;
  /* focus */
  --color-focus: #2563EB;
  --color-focus-inset: #FFFFFF;
  --color-focus-inverse: #38BDF8;
  --color-focus-inverse-inset: #111827;
  --color-focus-error: #DC2626;
  --color-focus-border: #BFDBFE;
  --color-focus-error-border: #FECACA;
  /* misc */
  --color-misc-highlight: #BFDBFE;
  --color-misc-overlay: #11182780;
  --color-misc-skeleton-background: #F3F4F6;
  --color-misc-skeleton-element: #BDC1C7;
  --color-misc-popup-button-hover: #1118270D;
  --color-misc-tab-item-hover: #E5E7EB;
  --color-misc-dropdown-hover: #F3F4F6;
  --color-misc-loader-base: #1118270D;
  --color-misc-loader-color: #2563EB;
  --color-misc-progress-background: #E5E7EB;
  /* badge */
  --color-badge-background-gray: #F9FAFB;
  --color-badge-color-gray: #1F2937;
  --color-badge-hover-gray: #F3F4F6;
  --color-badge-border-gray: #E5E7EB;
  --color-badge-background-red: #FEF2F2;
  --color-badge-color-red: #B91C1C;
  --color-badge-hover-red: #FEE2E2;
  --color-badge-border-red: #FECACA;
  --color-badge-background-yellow: #FEFCE8;
  --color-badge-color-yellow: #A16207;
  --color-badge-hover-yellow: #FEF9C3;
  --color-badge-border-yellow: #FEF08A;
  --color-badge-hover-green: #DCFCE7;
  --color-badge-border-green: #BBF7D0;
  --color-badge-background-green: #F0FDF4;
  --color-badge-color-green: #15803D;
  --color-badge-background-sky: #F0F9FF;
  --color-badge-color-sky: #0369A1;
  --color-badge-hover-sky: #E0F2FE;
  --color-badge-border-sky: #BAE6FD;
  --color-badge-background-disabled: #F3F4F6;
  --color-badge-color-disabled: #BDC1C7;
  --color-badge-hover-disabled: #F3F4F6;
  --color-badge-border-disabled: #E5E7EB;
  --color-badge-background-important: #DC2626;
  /* alert */
  --color-alert-background-neutral: #FFFFFF;
  --color-alert-border-neutral: #E5E7EB;
  --color-alert-background-danger: #FEF2F2;
  --color-alert-border-danger: #FECACA;
  --color-alert-background-warning: #FEFCE8;
  --color-alert-border-warning: #FEF08A;
  --color-alert-background-green: #F0FDF4;
  --color-alert-border-green: #BBF7D0;
  --color-alert-background-info: #F0F9FF;
  --color-alert-border-info: #BAE6FD;
  /* tab */
  --color-tab-background: #F3F4F6;
  --color-tab-border: #E5E7EB;
  /* tooltip */
  --color-tooltip-background-light: #FFFFFF;
  --color-tooltip-background-dark: #111827;
  /* toggle */
  --color-toggle-off: #E5E7EB;
  --color-toggle-on: #2563EB;
  --color-toggle-dial-background: #FFFFFF;
  --color-toggle-off-hover: #BDC1C7;
  --color-toggle-off-border: #BDC1C7;
  --color-toggle-on-hover: #3B82F6;
  --color-toggle-on-border: #60A5FA;
  --color-toggle-on-disabled: #EFF6FF;
  --color-toggle-off-disabled: #F3F4F6;
  /* box-shadow — overrides v4 default --shadow-xs and adds custom scale */
  --shadow-xs: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  --shadow-soft-shadow-sm: 0px 6px 32px -12px rgba(149, 160, 178, 0.12);
  --shadow-soft-shadow: 0px 8px 32px -12px rgba(149, 160, 178, 0.16);
  --shadow-soft-shadow-md: 0px 10px 32px -12px rgba(149, 160, 178, 0.2);
  --shadow-soft-shadow-lg: 0px 12px 32px -12px rgba(149, 160, 178, 0.24);
  --shadow-soft-shadow-xl: 0px 16px 32px -12px rgba(149, 160, 178, 0.32);
  --shadow-soft-shadow-2xl: 0px 24px 64px -12px rgba(149, 160, 178, 0.32);
  --shadow-soft-shadow-inner: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  --shadow-toggle-disabled: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  /* font-size */
  --text-tiny: 0.625rem;
  /* letter-spacing */
  --tracking-2: 0.125em;
}
```
</details>

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
