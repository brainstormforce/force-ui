# Container

## Description

The `Container` component is a flexible layout component that can be used to create grid or flexbox-based layouts.

## `Container` Props

### containerType
- **Type:** `string`
- **Default:** `"flex"`
- **Description:** Specifies the type of container
    - `"flex"`
    - `"grid"`

### gap
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the gap between grid or flex items.
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`

### direction
- **Type:** `string`
- **Default:** `""`
- **Description:** Defines the direction of flex items (applicable only for flex containers).
    - `"row"`
    - `"row-reverse"`
    - `"column"`
    - `"column-reverse"`

### justify
- **Type:** `string`
- **Default:** `""`
- **Description:** Specifies how flex items are aligned along the main axis.
    - `"normal"`
    - `"start"`
    - `"end"`
    - `"center"`
    - `"between"`
    - `"around"`
    - `"evenly"`
    - `"stretch"`

### align
- **Type:** `string`
- **Default:** `""`
- **Description:** Specifies how flex items are aligned along the cross axis.
    - `"start"`
    - `"end"`
    - `"center"`
    - `"baseline"`
    - `"stretch"`

### wrap
- **Type:** `string`
- **Description:** Defines how flex items should wrap in the container. If no wrap is specified, it will automatically wrap if any column props (cols, tabCols, mCols) are provided.
    - `"nowrap"`
    - `"wrap"`
    - `"wrap-reverse"`

### cols
- **Type:** `string`
- **Default:** `""`
- **Description:** Specifies the number of columns for desktop view (applies to flexbox layouts). The column width is dynamically calculated based on the number of columns and the gap size.

### tabCols
- **Type:** `string`
- **Default:** `""`
- **Description:** Specifies the number of columns for tablet view (applies to flexbox layouts). The column width is dynamically calculated based on the number of columns and the gap size.

### mCols
- **Type:** `string`
- **Default:** `""`
- **Description:** Specifies the number of columns for mobile view (applies to flexbox layouts). The column width is dynamically calculated based on the number of columns and the gap size.

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the container.

### children
- **Type:** `ReactNode`
- **Description:** The content to be rendered inside the container.

### extraProps
- **Type:** `object`
- **Description:** Additional props to be passed to the container's root element.

## `Container.Item` Props

### grow
- **Type:** `number`
- **Description:** Specifies how much a flex item should grow relative to the rest of the flex items.
    - `"0"`
    - `"1"`

### shrink
- **Type:** `number`
- **Description:** Specifies how much a flex item should shrink relative to the rest of the flex items.
    - `"0"`
    - `"1"`

### order
- **Type:** `string`
- **Description:** Defines the order of the flex item in the container.
    - `"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"`
    - `"first"`
    - `"last"`
    - `"none"`

### alignSelf
- **Type:** `string`
- **Description:** Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
    - `"auto"`
    - `"start"`
    - `"end"`
    - `"stretch"`
    - `"baseline"`

## Usage

### Basic Example

```jsx
import { Container } from '@bsf/force-ui';

const App = () => (
    <>
        {/* Default Flex Behavior */}
        <Container justify="end" align="start" gap="xs" className="bg-orange-300 h-60">
            <Container.Item grow={1}>Item 1</Container.Item>
            <Container.Item>Item 2</Container.Item>
            <Container.Item grow={1}>Item 3</Container.Item>
        </Container>

        {/* Responsive Behavior */}
        <Container cols={4} tabCols={2} mCols={1} gap="md" className="bg-pink-200 p-4">
            <Container.Item className="bg-red-500 p-4">Item 1</Container.Item>
            <Container.Item className="bg-green-500 p-4">Item 2</Container.Item>
            <Container.Item className="bg-blue-500 p-4">Item 3</Container.Item>
            <Container.Item className="bg-yellow-500 p-4">Item 4</Container.Item>
        </Container>
    </>
);

export default App;
```