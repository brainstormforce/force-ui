# Button Component Documentation

## Description

The `Button` component is a versatile, customizable button component built with Tailwind CSS. It supports various variants, sizes, types, and additional properties to suit different use cases.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"primary"`
- **Description:** Defines the style variant of the button. Options include:
  - `"primary"`
  - `"secondary"`
  - `"outline"`
  - `"ghost"`
  - `"link"`

### `size`
- **Type:** `string`
- **Default:** `"m"`
- **Description:** Defines the size of the button. Options include:
  - `"xs"`
  - `"s"`
  - `"m"`
  - `"l"`

### `type`
- **Type:** `string`
- **Default:** `"button"`
- **Description:** Defines the HTML `type` attribute for the button element. Common values are `"button"`, `"submit"`, and `"reset"`.

### `tag`
- **Type:** `string`
- **Default:** `"button"`
- **Description:** Defines the HTML tag to be used for the button. This allows using the button styles for different elements like `a` (anchor), `div`, etc.

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the button.

### `children`
- **Type:** `ReactNode`
- **Description:** The content to be displayed inside the button.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Defines whether the button is disabled.

### `destructive`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** When set to `true`, applies destructive styles to the button. This is useful for actions that are potentially harmful (e.g., delete actions).

### `icon`
- **Type:** `ReactNode`
- **Description:** An icon component to be displayed inside the button.

### `iconPosition`
- **Type:** `string`
- **Default:** `"left"`
- **Description:** Defines the position of the icon inside the button. Options include:
  - `"left"`
  - `"right"`

### `...rest`
- **Type:** `object`
- **Description:** Any additional props will be spread onto the button element.

## Usage

### Basic Example

```jsx
import Button from './Button';
import { ReactComponent as ExampleIcon } from './icons/example.svg';

const App = () => (
  <div>
    <Button variant="primary" size="m">
      Primary Button
    </Button>
    <Button variant="secondary" size="l" icon={<ExampleIcon />}>
      Secondary Button
    </Button>
  </div>
);

export default App;
```
## Notes

- Ensure to have Tailwind CSS configured in your project to utilize the styles effectively.
- This component leverages the `twMerge` utility from `tailwind-merge` to combine Tailwind classes efficiently.


