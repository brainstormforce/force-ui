# Skeleton Component Documentation

## Description

The `Skeleton` component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"rectangular"`
- **Description:** Defines the style variant of the skeleton. Options include:
  - `"rectengular"` 
  - `"circular"`

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the skeleton component, allowing for further customization with Tailwind CSS.

## Usage

### Basic Example

```jsx
import { Skeleton } from '@bsf/force-ui';

const App = () => (
    <div>
        {/* Rectangular skeleton representing a text block */}
        <Skeleton variant="rectangular" className="w-full h-4" />
        {/* Circular skeleton representing an avatar */}
        <Skeleton variant="circular" className="w-10 h-10 " />
        {/* Rectangular skeleton representing a image or video*/}
        <Skeleton variant="rectangular" className="w-64 h-12" />
    </div>
);

export default App;
```

