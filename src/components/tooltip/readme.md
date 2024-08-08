# Tooltip Component Documentation

## Description

The `Tooltips` are small, interactive pop-up boxes that provide brief, informative messages when users hover over, focus on, or tap an element. They are typically used to offer additional context or explanation for a specific component, such as buttons, icons, or links, without cluttering the interface.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"light"`
- **Description:** Defines the style variant of the tooltip. Options include:
  - `"light"` 
  - `"dark"`

### `placement`
- **Type:** `string`
- **Default:** `"top"`
- **Description:** Defines the position of the tooltip. Options include:
  - `"top"`
  - `"top-start"`
  - `"top-end"`
  - `"right"`
  - `"right-start"`
  - `"right-end"`
  - `"bottom"`
  - `"bottom-start"`
  - `"bottom-end"`
  - `"left"`
  - `"left-start"`
  - `"left-end"`

### `title`
- **Type:** `string`
- **Description:** Defines the title of the tooltip. 

### `content`
- **Type:** `HTML content`
- **Description:** Content of tooltip - description of tooltip in more detail.

### `arrow`
- **Type:** `boolean`
- **Default:** `"false"`
- **Description:** Defines whether the tooltip is displayed with an arrow or not. Options include:
  - `"false"` 
  - `"true"`

### `open`
- **Type:** `boolean`
- **Description:** Controls the open state of the tooltip. When provided, it manages the visibility of the tooltip.

### `onOpen`
- **Type:** `function`
- **Description:** Event handler for when the tooltip is opened.

### `onClose`
- **Type:** `function`
- **Description:** Event handler for when the tooltip is closed.

### `focusOnly`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** When true, the tooltip is displayed only on focus. Options include:
  - `"false"` 
  - `"true"`

### `children`
- **Type:** `ReactNode`
- **Description:** The elements that trigger the tooltip. Typically, this could be buttons, icons, or links.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the tooltip container.

## Usage

### Basic Example

```jsx
import { Tooltip } from '@bsf/force-ui';

const App = () => (
    <div>
        <Tooltip title="Tooltip Title" content={<span><strong>Tooltips</strong> are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.</span>} placement="bottom" variant="dark" arrow>
            <button>Hover over me</button>
        </Tooltip>

        <Tooltip title="Tooltip Info" placement="top-start" variant="dark" open={open} onOpen={handleOpen} onClose={handleClose} arrow>
            <button>Click me</button>
        </Tooltip>

        <Tooltip focusOnly title="Tooltip" content={<span><strong>Tooltips</strong> are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.</span>} placement="right" arrow>
            <button>Focus me</button>
        </Tooltip>
    </div>
);

export default App;
```