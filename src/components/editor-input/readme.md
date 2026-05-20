# Editor Input

## Description
The Editor Input component is a text input field that allows users to input text as well as tags/mentions from the combobox. As of v1.8 it is built on TipTap; v1.7 used Lexical. See the **Migration from v1.7** section below if you are upgrading.

## Props

### defaultValue
- **Type:** `string`
- **Default:** `""`
- **Description:** Default value of the editor.
    - With `valueFormat="markup"` (default): plain text containing `@[Label](id)` mention markup.
    - With `valueFormat="lexical"` (deprecated, v1.7 compat): the Lexical `EditorState` JSON string.
- **Example (markup, recommended):**
```jsx
<EditorInput
    defaultValue="Employee name: @[Catherine](3)"
    options={ options }
/>
```

### onChange
- **Type:** `function`
- **Signature:**
    - With `valueFormat="markup"` (default): `( markup: string, editor: Editor ) => void`
    - With `valueFormat="lexical"`: `( editorState: LegacyEditorState, editor: Editor ) => void` where `editorState.toJSON()` returns Lexical-shaped JSON.
- **Description:** Called on every change.

### valueFormat
- **Type:** `'markup' | 'lexical'`
- **Default:** `'markup'`
- **Description:** Controls the shape of `defaultValue` and the first argument to `onChange`.
- **Deprecation:** `'lexical'` is a compatibility shim for v1.7 consumers and will be removed in **v2.0**.

### placeholder
- **Type:** `string`
- **Default:** `Press @ to view variable suggestions`

### size
- **Type:** `"sm" | "md" | "lg"`
- **Default:** `"md"`

### options
- **Type:** `array`
- **Default:** `[]`
- **Description:** Array of options shown in the mention dropdown. Items may be strings or objects.

### by
- **Type:** `string`
- **Default:** `"name"`
- **Description:** Key on object options used as the display label.

### trigger
- **Type:** `string`
- **Default:** `'@'`
- **Description:** Character that opens the mention dropdown.

### autoFocus
- **Type:** `boolean`
- **Default:** `false`

### autoSpaceAfterMention
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If `true`, a space is inserted after a mention is selected.

### maxLength
- **Type:** `number`
- **Description:** Maximum character count. Mentions count as 1 character.

### multiline
- **Type:** `boolean`
- **Default:** `true`
- **Description:** If `false`, the Enter key is swallowed instead of inserting a newline.

### className
- **Type:** `string`
- **Default:** `""`
- **Description:** Extra classes on the contenteditable element.

### wrapperClassName
- **Type:** `string`
- **Default:** `""`
- **Description:** Extra classes on the outer wrapper.

### style
- **Type:** `React.CSSProperties`
- **Description:** Inline styles applied to the contenteditable element.

### disabled
- **Type:** `boolean`
- **Default:** `false`

### menuComponent
- **Type:** `React.ComponentType`
- **Description:** Custom component for the mention dropdown list.
- **Usage:**
```jsx
const MenuComponent = ( { size, className, children } ) => (
    <ul className="...">{ children }</ul>
);

<EditorInput menuComponent={ MenuComponent } /* ... */ />
```

### menuItemComponent
- **Type:** `React.ComponentType`
- **Description:** Custom component for individual mention dropdown items.
- **Usage:**
```jsx
const MenuItemComponent = forwardRef(
    ( { size, children, selected = false, className, ...props }, ref ) => (
        <li ref={ ref } className="..." { ...props }>{ children }</li>
    )
);

<EditorInput menuItemComponent={ MenuItemComponent } /* ... */ />
```

### Access editor ref
`ref.current` is the TipTap `Editor` instance.

```jsx
import { useRef } from 'react';
import { EditorInput } from '@bsf/force-ui';

const App = () => {
    const editorRef = useRef();

    return (
        <EditorInput
            ref={ editorRef }
            options={ options }
        />
    );
};
```

When `valueFormat="lexical"`, the same ref also exposes a `legacy` namespace that mirrors the most-used Lexical methods:

```jsx
ref.current.legacy.getEditorState().toJSON(); // Lexical-shaped JSON
ref.current.legacy.focus();
ref.current.legacy.update( () => { /* ... */ } );
```

The `legacy` namespace is deprecated and removed in v2.0.

## Usage
```jsx
import { EditorInput } from '@bsf/force-ui';

const App = () => (
  <div className="max-w-sm my-10">
    <EditorInput
        size="md"
        by="label"
        options={ [
            { id: 1, label: 'Anton' },
            { id: 2, label: 'Boris' },
            { id: 3, label: 'Catherine' },
        ] }
        onChange={ ( markup ) => console.log( markup ) }
    />
  </div>
);
```

---

## Migration from v1.7

The v1.8 release replaces Lexical with TipTap. Three API surfaces changed:

| Surface | v1.7 (Lexical) | v1.8 default (markup) |
|---|---|---|
| `defaultValue` | Lexical `EditorState` JSON string | Plain text + `@[Label](id)` |
| `onChange` arg 1 | `EditorState` — caller does `.toJSON()` | `string` |
| `ref.current` | `LexicalEditor` | TipTap `Editor` |

### Option A — Drop-in compat (zero code change, deprecated)

Add `valueFormat="lexical"` to every `<EditorInput>` and keep your existing `defaultValue` JSON and `onChange( s => s.toJSON() )` callbacks. Logs a one-time deprecation warning in development. Removed in v2.0.

```jsx
<EditorInput
    valueFormat="lexical"
    defaultValue={ storedLexicalJsonString }
    onChange={ ( editorState ) => save( editorState.toJSON() ) }
    options={ options }
/>
```

### Option B — One-time data migration (recommended)

Convert stored Lexical JSON into markup once (e.g., in a DB migration) and remove `valueFormat="lexical"` entirely.

```js
import { lexicalToMarkup, markupToLexical } from '@bsf/force-ui';

const markup = lexicalToMarkup( storedLexicalJsonString );
// → "Employee name: @[Catherine](3)"

// Inverse, if you still need to write Lexical JSON to legacy stores:
const lexicalJSON = markupToLexical( "Employee name: @[Catherine](3)" );
```

After migrating data, update call sites:

```diff
- onChange={ ( editorState ) => save( editorState.toJSON() ) }
+ onChange={ ( markup ) => save( markup ) }
```

### Rich text formatting

The v1.7 Lexical editor tracked `format`/`style`/`detail`/`mode` on text nodes but the editor surface never let users apply rich formatting. The v1.8 markup form preserves the plain text only. If you relied on this metadata, file an issue before upgrading.
