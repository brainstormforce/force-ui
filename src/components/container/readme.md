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
- **Default:** `"row"`
- **Description:** Defines the direction of flex items (applicable only for flex containers).
    - `"row"`
    - `"row-reverse"`
    - `"column"`
    - `"column-reverse"`

### justify
- **Type:** `string`
- **Default:** `"start"`
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
- **Default:** `"stretch"`
- **Description:** Specifies how flex items are aligned along the cross axis.
    - `"start"`
    - `"end"`
    - `"center"`
    - `"baseline"`
    - `"stretch"`

### wrap
- **Type:** `string`
- **Default:** `nowrap`
- **Description:** Defines how flex items should wrap in the container.
    - `"nowrap"`
    - `"wrap"`
    - `"wrap-reverse"`

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
    <Container justify="end" align="start" gap="xs" className="bg-orange-300 h-60">
        <Container.Item grow={1}>Item 1</Container.Item>
        <Container.Item>Item 2</Container.Item>
        <Container.Item grow={1}>Item 3</Container.Item>
    </Container>
);

export default App;
```