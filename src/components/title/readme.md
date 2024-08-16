# Title

## Description

Title component - Title with icon and description.

## Props

### size
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the title field
    - `"xs"`
    - `"sm"`
    - `"md"`
    - `"lg"`

### tag
- **Type:** `string`
- **Default:** `"h2"`
- **Description:** The HTML tag - h1, h2, h3, h4, h5, h6.


### title
- **Type:** `string`
- **Description:** The content to be displayed inside the title.

### description
- **Type:** `string`
- **Description:** The description wil be shown below the title.

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the title.

### icon
- **Type:** `ReactComponent`
- **Default:** `null`
- **Description:** Icon shown beside title

### iconPosition
- **Type:** `string`
- **Description:** Position of the icon
    - `before`
    - `after`

## Usage

### Basic Example

```jsx
import { Title } from '@bsf/force-ui';

const App = () => (
    <div>
        <Title size="xs" title={'Extra Small Title'} icon={<House />} iconPosition={'left'} description={'this is a description'} />
    </div>
);

export default App;
```

