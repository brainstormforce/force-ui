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

### `children`
- **Type:** `ReactNode`
- **Description:** Accepts the `DropdownMenu.Trigger`, `DropdownMenu.Content`, or any other custom components to be rendered within the dropdown.

## `DropdownMenu.Trigger` Props

### `children`
- **Type:** `ReactNode`
- **Description:** The trigger element that displays the dropdown when clicked, such as a button or an avatar.

## `DropdownMenu.Content` Props

### `children`
- **Type:** `ReactNode`
- **Description:** The content of the dropdown, which can include menu items, buttons, icons, or any other custom elements.


```jsx
import { DropdownMenu, Button } from '@bsf/force-ui';

const App = () => {
    return (
        <DropdownMenu boundary={ document.getElementById('surerank-dashboard') } placement="bottom-start">
            <DropdownMenu.Trigger>
                <Button>Dropdown</Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
                <Menu>
                    <Menu.Item>Menu Item</Menu.Item>
                    <Menu.Item>Menu Item</Menu.Item>
                    <Menu.Item>Menu Item</Menu.Item>
                    <Menu.Item>Menu Item</Menu.Item>
                    <Menu.Item>Menu Item</Menu.Item>
                </Menu>
            </DropdownMenu.Content>
        </DropdownMenu>
    );
};

export default App;
