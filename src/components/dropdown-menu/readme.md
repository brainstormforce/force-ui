# DropdownMenu Component Documentation

## Description

The `DropdownMenu` component provides a dropdown interface for navigation or interactive actions. 

## `DropdownMenu` Props

### `placement`
- **Type:** `string`
- **Default:** `"bottom"`
- **Description:** Defines the position of the dropdown relative to the trigger element. Options include:
  - `"top"`
  - `"bottom"`
  - `"top-start"`
  - `"top-end"`
  - `"bottom-start"`
  - `"bottom-end"`

### `offset`
- **Type:** `number`
- **Default:** `10`
- **Description:** Controls the distance between the trigger element and the dropdown content.

### `boundary`
- **Type:** `HTMLElement`
- **Default:** `"clippingAncestors"`
- **Description:** The element that the DropdownMenu is positioned relative to. When provided, the DropdownMenu will be positioned within the boundary of the element.
- **Example:** `boundary={document.getElementById('boundary')}`

### `dropdownPortalRoot`
- **Type:** `HTMLElement | null`
- **Default:** `"null"`
- **Description:** Root element where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.

### `dropdownPortalId`
- **Type:** `string`
- **Default:** `""`
- **Description:** Id of the dropdown portal where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.

### `children`
- **Type:** `ReactNode`
- **Description:** Accepts the `DropdownMenu.Trigger`, `DropdownMenu.Content`, or any other custom components to be rendered within the dropdown.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the DropdownMenu container.

## `DropdownMenu.Trigger` Props

### `children`
- **Type:** `ReactNode`
- **Description:** The trigger element that displays the dropdown when clicked, such as a button or an avatar.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the DropdownMenu.Trigger.

## `DropdownMenu.Content` Props

### `size`
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the size of DropdownMenu.Item and DropdownMenu.List components. Options include:
  - `"sm"`
  - `"md"`

### `children`
- **Type:** `ReactNode`
- **Description:** The content of the dropdown, which can include menu items, buttons, icons, or any other custom elements.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the DropdownMenu.Content.

## `DropdownMenu.List` Props

### `heading`
- **Type:** `string`
- **Description:** Title or label for the DropdownMenu.List

### `arrow`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, displays an arrow that can be used to expand or collapse the DropdownMenu.List

### `open`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Controls whether the DropdownMenu.List is initially open or closed

### `onClick`
- **Type:** `function`
- **Description:** Callback function that is called when the DropdownMenu.List heading is clicked.

### `children`
- **Type:** `ReactNode`
- **Description:** A list of dropdown items or components, wrapped in DropdownMenu.List. Each item can trigger the dropdown menu to close when clicked.

## `DropdownMenu.Item` Props

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
- **Description:** A dropdown item within the list. Supports an onClick handler, which can also close the menu automatically when clicked.

### `as`
- **Type:** `React.ElementType | Fragment`
- **Default:** `Fragment`
- **Description:** Specifies the element type to be rendered. By default, it renders as a fragment, allowing custom elements without extra wrappers.

## `DropdownMenu.Separator` Props

### `variant`
- **Type:** `string`
- **Default:** `"solid"`
- **Description:** Defines the style of the separator. Options include:
  - `"solid"`
  - `"dashed"`
  - `"dotted"`
  - `"double"`
  - `"none"`

```jsx
import { DropdownMenu, Button } from '@bsf/force-ui';

const App = () => {
    return (
        <DropdownMenu 
            dropdownPortalId="surerank-dashboard" 
            boundary={ document.getElementById('surerank-dashboard') }
            placement="bottom-start"
        >
            <DropdownMenu.Trigger>
                <Button>Dropdown</Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="w-60">
                <DropdownMenu.List>
                    <DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
                    <DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
                    <DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
                    <DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
                </DropdownMenu.List>
            </DropdownMenu.Content>
        </DropdownMenu>
    );
};

export default App;
```