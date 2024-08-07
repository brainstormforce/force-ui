# Select Component Documentation

## Description

The `Select` component is a versatile, customizable select component built with Tailwind CSS. It supports various sizes, types, and additional properties to suit different use cases.

## `Select` Props

### `id`
- **Type:** `string`
- **Default:** `undefined`
- **Description:** The `id` attribute of the select element.

### `value`
- **Type:** `string | number | object | undefined`
- **Default:** `undefined`
- **Description:** Value of the select (for controlled component).

### `defaultValue`
- **Type:** `string | number | object | undefined`
- **Default:** `undefined`
- **Description:** Default value of the select (for uncontrolled component).

### `onChange`
- **Type:** `function`
- **Default:** `undefined`
- **Description:** Callback function to handle the change event.
- **Signature:** `function(value: string | number | object): void`
- **Parameters:**
    - `value`: The selected value.

### `by`
- **Type:** `string`
- **Default:** `"id"`
- **Description:** Used to identify the selected value when value type is an `object`. Default is `"id"`.

### `dropdownPortalRoot`
- **Type:** `HTMLElement | null`
- **Default:** `null`
- **Description:** Root element where the dropdown will be rendered.

### `dropdownPortalId`
- **Type:** `string`
- **Default:** `""`
- **Description:** Id of the dropdown portal where the dropdown will be rendered.

### `multiple`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, it will allow multiple selection.

### `combobox`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, it will show a search box.

### `size`
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the style variant of the button. Options include:
  - `"sm"`
  - `"md"`
  - `"lg"`

### 