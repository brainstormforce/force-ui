# ButtonGroup Component Documentation

## Description

The `ButtonGroup` and Button components are designed to work together to create a flexible and customizable group of buttons. The ButtonGroup component manages the state and styling of multiple Button components.

## ButtonGroup Props

### `children`
- **Type:** `React.ReactNode`
- **Description:** The child elements, expected to be Button components.

### `activeItem`
- **Type:** `string | null`
- **Default:** `null`
- **Description:** The currently active item in the group.

### `onChange`
- **Type:** `function`
- **Description:** Callback function triggered when the active item changes. Receives an object with event and value.

### `className`
- **Type:** `string`
- **Description:** Additional class names for styling the button group.

### `size`
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Size of the buttons in the group. Options include:
  - `"xs"`
  - `"sm"`
  - `"md"`

### `iconPosition`
- **Type:** `string`
- **Default:** `"left"`
- **Description:** Position of the icon in the button. Options include:
  - `"left"`
  - `"right"`

## Button Props

### `slug`
- **Type:** `string`
- **Description:** Unique identifier for the button.

### `text`
- **Type:** `string`
- **Description:** Text to be displayed inside the button.

### `icon`
- **Type:** `React.ReactNode`
- **Description:** Optional icon to be displayed inside the button.

### `className`
- **Type:** `string`
- **Description:** Additional class names for styling the button.

### `isFirstChild`
- **Type:** `boolean`
- **Description:** Flag indicating if this button is the first child in the group.

### `isLastChild`
- **Type:** `boolean`
- **Description:** Flag indicating if this button is the last child in the group.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Defines whether the button is disabled.

### `...rest`
- **Type:** `object`
- **Description:** Any additional props will be spread onto the button element.
