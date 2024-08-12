# Badge Component Documentation

## Description

The `Badge` component can show notifications, counts, or status information on navigation items and icons.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"primary"`
- **Description:** Defines the style variant of the button. Options include:
  - `"neutral"`
  - `"red"`
  - `"yellow"`
  - `"green"`
  - `"blue"`
  - `"inverse"`

### `size`
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the size of the badge. Options include:
  - `"xs"`
  - `"sm"`
  - `"md"`
  - `"lg"`

### `type`
- **Type:** `string`
- **Default:** `"pill"`
- **Description:** Defines the type of the badge. Options include:
  - `"pill"`
  - `"rounded"`

### `label`
- **Type:** `string`
- **Default:** `""`
- **Description:** Label of the Badge.

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the button.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Defines whether the badge is disabled.

### `closable`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Defines whether the badge is closable or not. This parameter will decide if the cross icon is shown or not.

### `icon`
- **Type:** `ReactNode`
- **Description:** An icon component to be displayed left of the Badge.

### `onClose`
- **Type:** `React callback function`
- **Description:** Callback function that triggers when the cross icon is clicked.

### `onMouseDown`
- **Type:** `React callback function`
- **Description:** Callback function that triggers when the cross icon is clicked.

## Usage

### Basic Example

```jsx
import Badge from './Badge';
import { ReactComponent as ExampleIcon } from './icons/example.svg';

const App = () => (
  <div>
    <Badge label={'Badge'} size="xs" type="rounded" variant="red"/>
    <Badge label={'Badge'} size="md" type="rounded" variant="green"/>
    <Badge label={'Badge'} size="sm" variant="blue"/>
  </div>
);

export default App;
```


