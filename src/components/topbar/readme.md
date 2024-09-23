# Topbar Component Documentation

## Description

The `Topbar` is a flexible navigation bar component that provides three sections: `Left`, `Middle`, and `Right`. It allows easy alignment and placement of items within each section.

## `Topbar` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the Topbar container, typically the `Topbar.Left`, `Topbar.Middle`, and `Topbar.Right` components.

### gap
- **Type:** `string`
- **Default:** `"lg"`
- **Description:** Defines the gap between Topbar sections.
    - `"0"`
    - `"xxs"`
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`

### `className`
- **Type:** `string`
- **Description:** Additional classes to customize the Topbar container's styles.

## `Topbar.Left` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `Topbar.Left` container, usually icons, logos, or navigation items.

### gap
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the gap between Topbar.Left items.
    - `"0"`
    - `"xxs"`
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`

## `Topbar.Middle` Props

### `align`
- **Type:** `string`
- **Default:** `"center"`
- **Description:** Defines how the content inside the Middle section is aligned. Options include:
  - `"left"`
  - `"center"`
  - `"right"`

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `Topbar.Middle` container, usually navigation links, buttons, or other interactive elements.

### gap
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the gap between Topbar.Middle items.
    - `"0"`
    - `"xxs"`
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`

## `Topbar.Right` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `Topbar.Right` container, typically icons, user profile, badges, or help buttons.

### gap
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the gap between Topbar.Right items.
    - `"0"`
    - `"xxs"`
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`

## `Topbar.Item` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Content or components to render inside the `Topbar.Item`.

### `className`
- **Type:** `string`
- **Description:** Additional classes to customize the Item styling.

```jsx
    <Topbar>
        <Topbar.Left>
            <Topbar.Item>
                <Logo />
            </Topbar.Item>
        </Topbar.Left>

        <Topbar.Middle align="left">
            <Topbar.Item>
                <div className='flex gap-2'>
                    <div>Nav Item 1</div>
                    <div>Nav item 2</div>
                    <div>Nav Item 3</div>
                </div>
            </Topbar.Item>
            <Topbar.Item>
                <Button>Upgrade to Pro</Button>
            </Topbar.Item>
        </Topbar.Middle>

        <Topbar.Right>
            <Topbar.Item>
                <Badge  />
            </Topbar.Item>
            <Topbar.Item className='flex gap-2'>
                <CircleHelp />
                <Megaphone />
            </Topbar.Item>
            <Topbar.Item>
                <Avatar />
            </Topbar.Item>
        </Topbar.Right>
    </Topbar>
```