# Sidebar Component Documentation

## Description

The `Sidebar` is a flexible navigation bar component that provides three sections: `Header`, `Body`, and `Footer`. It allows easy alignment and placement of items within each section.

## `Sidebar` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the Sidebar container, typically the `Sidebar.Header`, `Sidebar.Body`, and `Sidebar.Footer` components.

### `className`
- **Type:** `string`
- **Description:** Additional classes to customize the Sidebar container's styles.

## `Sidebar.Header` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `Sidebar.Header` container, usually icons, logos, or navigation items.

## `Sidebar.Body` Props

### `align`
- **Type:** `string`
- **Default:** `"center"`
- **Description:** Defines how the content inside the Body section is aligned. Options include:
  - `"Header"`
  - `"center"`
  - `"Footer"`

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `Sidebar.Body` container, usually navigation links, buttons, or other interactive elements.

## `Sidebar.Footer` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `Sidebar.Footer` container, typically icons, user profile, badges, or help buttons.

## `Sidebar.Item` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Content or components to render inside the `Sidebar.Item`.

### `className`
- **Type:** `string`
- **Description:** Additional classes to customize the Item styling.

```jsx
    <Sidebar>
        <Sidebar.Header>
            <Sidebar.Item>
                <Logo />
            </Sidebar.Item>
        </Sidebar.Header>

        <Sidebar.Body align="Header">
            <Sidebar.Item>
                <div className='flex gap-2'>
                    <div>Nav Item 1</div>
                    <div>Nav item 2</div>
                    <div>Nav Item 3</div>
                </div>
            </Sidebar.Item>
            <Sidebar.Item>
                <Button>Upgrade to Pro</Button>
            </Sidebar.Item>
        </Sidebar.Body>

        <Sidebar.Footer>
            <Sidebar.Item>
                <Badge  />
            </Sidebar.Item>
            <Sidebar.Item className='flex gap-2'>
                <CircleHelp />
                <Megaphone />
            </Sidebar.Item>
            <Sidebar.Item>
                <Avatar />
            </Sidebar.Item>
        </Sidebar.Footer>
    </Sidebar>
```