# Sidebar Component Documentation

## Description

The `Sidebar`  component is a flexible left panel that enhances user navigation, featuring a `Header` for titles, a `Body` for interactive elements, and a `Footer` for additional actions. Customizable with props like `className` and `screenHeight`, it adapts to various screen sizes, ensuring optimal usability on both desktop and mobile devices.

## `Sidebar` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the Sidebar container, typically the `SidebarHeader`, `SidebarBody`, and `SidebarFooter` components.

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

## `SidebarHeader` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `SidebarHeader` container, usually icons, logos, or navigation items.

## `SidebarBody` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `SidebarBody` container, usually navigation links, buttons, or other interactive elements.

## `SidebarFooter` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Elements to render inside the `SidebarFooter` container, typically icons, user profile, badges, or help buttons.

## `SidebarItem` Props

### `children`
- **Type:** `ReactNode`
- **Description:** Content or components to render inside the `SidebarItem`.

### `className`
- **Type:** `string`
- **Description:** Additional classes to customize the Item styling.

```jsx
    <Sidebar>
        <SidebarHeader>
            <SidebarItem>
                <Logo />
            </SidebarItem>
        </SidebarHeader>

        <SidebarBody align="Header">
            <SidebarItem>
                <div className='flex gap-2'>
                    <div>Nav Item 1</div>
                    <div>Nav item 2</div>
                    <div>Nav Item 3</div>
                </div>
            </SidebarItem>
            <SidebarItem>
                <Button>Upgrade to Pro</Button>
            </SidebarItem>
        </SidebarBody>

        <SidebarFooter>
            <SidebarItem>
                <Badge  />
            </SidebarItem>
            <SidebarItem>
                <Avatar />
            </SidebarItem>
        </SidebarFooter>
    </Sidebar>
```