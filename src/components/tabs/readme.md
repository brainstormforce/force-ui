# Tabs Component Documentation

## Description

The `Tabs` component is a flexible and customizable component built with Tailwind CSS. It supports various orientations, variants, sizes, and additional properties to suit different use cases.

## Tabs.Group Props

### `orientation`
- **Type:** `string`
- **Default:** `"horizontal"`
- **Description:** Defines the orientation of the tabs. Options include:
  - `"horizontal"`
  - `"vertical"`

### `variant`
- **Type:** `string`
- **Default:** `"pill"`
- **Description:** Defines the style variant of the tabs. Options include:
  - `"pill"`
  - `"rounded"`
  - `"underline"`

### `size`
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the tabs. Options include:
  - `"sm"`
  - `"md"`
  - `"lg"`

### `iconPosition`
- **Type:** `string`
- **Default:** `"left"`
- **Description:** Defines the position of the icon inside the tab. Options include:
  - `"left"`
  - `"right"`

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the tabs.

### `width`
- **Type:** `string`
- **Default:** `"auto"`
- **Description:** Defines the width of the tabs. Options include:
  - `"auto"`
  - `"full"`

### `activeItem`
- **Type:** `string|null`
- **Default:** `null`
- **Description:** The currently active item in the group.

### `onChange`
- **Type:** `Function`
- **Description:** Callback when the active item changes.

### `children`
- **Type:** `ReactNode`
- **Description:** The content to be displayed inside the tabs.

## Tabs.Tab Props

### `slug`
- **Type:** `string`
- **Description:** Unique identifier for the tab.

### `text`
- **Type:** `string`
- **Description:** Text to be displayed inside the tab.

### `icon`
- **Type:** `ReactNode`
- **Description:** An optional icon to be displayed inside the tab.

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the tab.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Defines whether the tab is disabled.

### `badge`
- **Type:** `ReactNode`
- **Description:** An optional badge to be displayed alongside the tab text.

## Usage

### Basic Example

```jsx
import Tabs from './Tabs';
import { ReactComponent as ExampleIcon } from './icons/example.svg';

const App = () => (
  <div>
    <Tabs.Group variant="rounded" size="md" orientation="horizontal">
      <Tabs.Tab slug="tab1" text="Tab 1" icon={<ExampleIcon />} />
      <Tabs.Tab slug="tab2" text="Tab 2" icon={<ExampleIcon />} />
    </Tabs.Group>
  </div>
);

export default App;
