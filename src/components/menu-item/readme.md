# Menu Item Sidebar Component Documentation

## Description

The `Menu` component provides container for displaying a list of navigational or interactive items. It is used in combination with the Menu.List, Menu.Item, and Menu.Separator components to build sidebars, or any other menu-based user interface.

## Props

### `size`
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the size of Menu.Item and Menu.List components. Options include:
  - `"sm"`
  - `"md"`

### `children`
- **Type:** `ReactNode`
- **Description:** Accepts the Menu.List, Menu.Item, or any other custom children to be rendered within the menu.

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to style the Menu.


The `Menu.List` component organizes Menu.Item components under a heading. It supports collapsible sections with an optional arrow, which can be toggled to show or hide the list of items.

## `Menu.List` Props

### `heading`
- **Type:** `string`
- **Description:** Title or label for the Menu.List

### `arrow`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, displays an arrow that can be used to expand or collapse the Menu.List

### `open`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Controls whether the Menu.List is initially open or closed

### `onClick`
- **Type:** `function`
- **Description:** Callback function that is called when the Menu.List heading is clicked.


The `Menu.Item` component represents an individual clickable item in the Menu.List. It can handle various states like active or disabled, and accepts icons, text, or other content passed as children.

## `Menu.Item` Props

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Disables the Menu.Item, making it non-interactive and preventing hover and click events.

### `active`
- **Type:** `boolean`
- **Description:** Marks the Menu.Item as active, changing its styling to indicate selection.

### `onClick`
- **Type:** `function`
- **Description:** Callback function triggered when the Menu.Item is clicked.

### `children`
- **Type:** `ReactNode`
- **Description:** The content of the Menu.Item, which can include text, icons, or other elements.

## `Menu.Separator` Props

### `variant`
- **Type:** `string`
- **Default:** `"solid"`
- **Description:** Defines the style of the separator. Options include:
  - `"solid"`
  - `"dashed"`
  - `"dotted"`
  - `"double"`
  - `"none"`

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to style the Menu.Separator.

```jsx
import { Menu } from '@bsf/force-ui';
import { ReactComponent as ExampleIcon } from './icons/example.svg';

const App = () => (
    <Menu>
        <Menu.List heading="Store" open={true} arrow={true}>
            <Menu.Item>
                <ProfileIcon />
                <div>Profile</div>
            </Menu.Item>
            <Menu.Item active={true}>
                <StoreIcon />
                <div>Store Settings</div>
            </Menu.Item>
            <Menu.Item>
                <CardIcon />
                <div>Payment Processors</div>
            </Menu.Item>
        </Menu.List>
    </Menu>
);

export default App;
```