# Sidebar Component Documentation

## Description

The `Sidebar`  component is a flexible left panel that enhances user navigation, featuring a `Header` for titles, a `Body` for interactive elements, and a `Footer` for additional actions. Customizable with props like `className` and `screenHeight`, it adapts to various screen sizes, ensuring optimal usability on both desktop and mobile devices.

## `Sidebar` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the Sidebar container, typically the `Sidebar.Header`, `Sidebar.Body`, and `Sidebar.Footer` components.

### `className`
- **Type:** `string`
- **Description:** Additional classes to customize the Sidebar container's styles.

### `onCollapseChange`
- **Type:** `(collapsed: boolean) => void`
- **Description:** Callback function triggered when the Sidebar's collapse state changes. Use this to handle custom logic based on whether the Sidebar is collapsed or expanded.

### `screenHeight`
- **Type:** `boolean`
- **default value:** `true`
- **Description:** Controls whether the Sidebar should take up the full screen height. If `true`, the Sidebar will have a height equal to the viewport.

### `borderOn`
- **Type:** `boolean`
- **default value:** `true`
- **Description:** Controls whether the Sidebar should have border. If `true`, the Sidebar will have a border on the right.

### `collapsible`
- **Type:** `boolean`
- **default value:** `true`
- **Description:** Controls whether the Sidebar should collapsible. If `true`, the Sidebar will have a collapse button.

## `Sidebar.Header` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `Sidebar.Header` container, usually icons, logos, or navigation items.

## `Sidebar.Body` Props

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
            <Sidebar.Item>
                <Avatar />
            </Sidebar.Item>
        </Sidebar.Footer>
    </Sidebar>
```