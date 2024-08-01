# Label

## Description

Labels component - These are the basic atoms used for the form elements with input, checkboxes and radios and more.

## Props

### forId
- **Type:** `string`
- **Default:** `""`
- **Description:** Id for the associated HTML element.

### size
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the textarea field
    - `"xs"`
    - `"sm"`
    - `"md"`

### tag
- **Type:** `string`
- **Default:** `"label"`
- **Description:** The HTML tag - label, span, title, etc.


### children
- **Type:** `ReactNode`
- **Description:** The content to be displayed inside the label.

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the label.

### variant
- **Type:** `string`
- **Default:** `"neutral"`
- **Description:** Variant of the label
    - `neutral`
    - `help`
    - `error`
    - `disabled`

## Usage

### Basic Example

```jsx
import { Label } from '@bsf/force-ui';

const App = () => (
    <div>
        <Label size='xs'>Vrunda <MapPinPlusInside/> Kansara </Label>
        <Label size='sm'>Label</Label>
        <Label size='sm' variant='disabled'><MapPinPlusInside/> Label</Label>
        <Label size='md' variant="help">Another Label <MapPinPlusInside/></Label>
        <Label variant="error">An error label with a <a href="#">link</a>.</Label>
    </div>
);

export default App;
```

