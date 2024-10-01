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
- **Type:** `string` | `object`
- **Default:** `"sm"`
- **Description:** Defines the gap between grid or flex items.
- Available options:
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`
- Object format:
    ```jsx
    {
        sm: "md",
        md: "lg",
        lg: "xl",
    }
    ```

### gapX
- **Type:** `string` | `object`
- **Default:** `"sm"`
- **Description:** Defines the gap between grid or flex items.
- Available options:
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`
- Object format:
    ```jsx
    {
        sm: "md",
        md: "lg",
        lg: "xl",
    }
    ```

### gapY
- **Type:** `string` | `object`
- **Default:** `"sm"`
- **Description:** Defines the gap between grid or flex items.
- Available options:
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`
    - `"2xl"`
- Object format:
    ```jsx
    {
        sm: "md",
        md: "lg",
        lg: "xl",
    }
    ```

### justify
- **Type:** `string` | `object`
- **Default:** `""`
- **Description:** Specifies how flex items are aligned along the main axis.
- Available options:
    - `"normal"`
    - `"start"`
    - `"end"`
    - `"center"`
    - `"between"`
    - `"around"`
    - `"evenly"`
    - `"stretch"`
- Object format:
    ```jsx
    {
        sm: "start",
        md: "center",
        lg: "end",
    }
    ```

### align
- **Type:** `string` | `object`
- **Default:** `""`
- **Description:** Specifies how flex items are aligned along the cross axis.
- Available options:
    - `"start"`
    - `"end"`
    - `"center"`
    - `"baseline"`
    - `"stretch"`
- Object format:
    ```jsx
    {
        sm: "start",
        md: "center",
        lg: "end",
    }
    ```

### cols
- **Type:** `number` | `object`
- **Default:** `""`
- **Description:** Specifies the number of columns for desktop view (applies to flexbox layouts). The column width is dynamically calculated based on the number of columns and the gap size.
- Available options:
    - `1`
    - `2`
    - `3`
    - `4`
    - `5`
    - `6`
    - `7`
    - `8`
    - `9`
    - `10`
    - `11`
    - `12`
- Object format:
    ```jsx
    {
        sm: 1,
        md: 2,
        lg: 3,
    }
    ```

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the container.

### children
- **Type:** `ReactNode`
- **Description:** The content to be rendered inside the container.

### extraProps
- **Type:** `object`
- **Description:** Additional props to be passed to the container's root element.

## `Container` Flexbox Props

### direction
- **Type:** `string` | `object`
- **Default:** `""`
- **Description:** Defines the direction of flex items (applicable only for flex containers).
- Available options:
    - `"row"`
    - `"row-reverse"`
    - `"column"`
    - `"column-reverse"`
- Object format:
    ```jsx
    {
        sm: "row",
        md: "column",
        lg: "row-reverse",
    }
    ```

### wrap
- **Type:** `string` | `object`
- **Description:** Defines how flex items should wrap in the container. If no wrap is specified, it will automatically wrap if any column props (cols, tabCols, mCols) are provided.
- Available options:
    - `"nowrap"`
    - `"wrap"`
    - `"wrap-reverse"`
- Object format:
    ```jsx
    {
        sm: "wrap",
        md: "nowrap",
        lg: "wrap-reverse",
    }
    ```

## `Container.Item` Props

### alignSelf
- **Type:** `string` | `object`
- **Description:** Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
- Available options:
    - `"auto"`
    - `"start"`
    - `"end"`
    - `"stretch"`
    - `"baseline"`
- Object format:
    ```jsx
    {
        sm: "start",
        md: "center",
        lg: "end",
    }
    ```

### justifySelf
- **Type:** `string` | `object`
- **Description:** Allows the default alignment (or the one specified by justify-content) to be overridden for individual flex items.
- Available options:
    - `"auto"`
    - `"start"`
    - `"end"`
    - `"center"`
    - `"stretch"`
    - `"baseline"`
- Object format:
    ```jsx
    {
        sm: "start",
        md: "center",
        lg: "end",
    }
    ```

## `Container.Item` Flexbox Props

### grow
- **Type:** `number` | `object`
- **Description:** Specifies how much a flex item should grow relative to the rest of the flex items.
- Available options:
    - `"0"`
    - `"1"`
- Object format:
    ```jsx
    {
        sm: 1,
        md: 2,
        lg: 3,
    }
    ```

### shrink
- **Type:** `number` | `object`
- **Description:** Specifies how much a flex item should shrink relative to the rest of the flex items.
- Available options:
    - `"0"`
    - `"1"`
- Object format:
    ```jsx
    {
        sm: 1,
        md: 2,
        lg: 3,
    }
    ```

### order
- **Type:** `string` | `object`
- **Description:** Defines the order of the flex item in the container.
- Available options:
    - `"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"`
    - `"first"`
    - `"last"`
    - `"none"`
- Object format:
    ```jsx
    {
        sm: "first",
        md: 2,
        lg: "last",
    }
    ```

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
        <Container cols={5} className="bg-pink-200 p-4 gap-0">
            <Container.Item className="bg-red-500 p-4">Item 1</Container.Item>
            <Container.Item className="bg-green-500 p-4">Item 2</Container.Item>
            <Container.Item className="bg-blue-500 p-4">Item 3</Container.Item>
            <Container.Item className="bg-yellow-500 p-4">Item 4</Container.Item>
            <Container.Item className="bg-purple-500 p-4">Item 5</Container.Item>
            <Container.Item className="bg-pink-500 p-4">Item 6</Container.Item>
        </Container>
    </>
);

export default App;
```