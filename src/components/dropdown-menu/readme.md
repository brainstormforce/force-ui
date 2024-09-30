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
- **Type:** `string`
- **Default:** `"clippingAncestors"`
- **Description:** The element that the DropdownMenu is positioned relative to. When provided, the DropdownMenu will be positioned within the boundary of the element.

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

- **Type:** `string`
- **Description:** Additional custom class names to style the DropdownMenu container.

## `DropdownMenu.Trigger` Props

### `children`
- **Type:** `ReactNode`
- **Description:** The trigger element that displays the dropdown when clicked, such as a button or an avatar.

- **Type:** `string`
- **Description:** Additional custom class names to style the DropdownMenu.Trigger.

## `DropdownMenu.Content` Props

### `children`
- **Type:** `ReactNode`
- **Description:** The content of the dropdown, which can include menu items, buttons, icons, or any other custom elements.

- **Type:** `string`
- **Description:** Additional custom class names to style the DropdownMenu.Content.


```jsx
import { DropdownMenu, Button } from '@bsf/force-ui';

const App = () => {
    return (
        <DropdownMenu 
            dropdownPortalId="surerank-dashboard" 
            boundary={ document.getElementById('surerank-dashboard') } placement="bottom-start"
            >
            <DropdownMenu.Trigger>
                <Button>Dropdown</Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
                <Menu>
                    <Menu.List>
                        <Menu.Item>Menu Item</Menu.Item>
                        <Menu.Item>Menu Item</Menu.Item>
                        <Menu.Item>Menu Item</Menu.Item>
                        <Menu.Item>Menu Item</Menu.Item>
                        <Menu.Item>Menu Item</Menu.Item>
                    </Menu.List>
                </Menu>
            </DropdownMenu.Content>
        </DropdownMenu>
    );
};

export default App;
```