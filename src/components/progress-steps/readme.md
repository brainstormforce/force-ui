# ProgressSteps Component

## Description

The `ProgressSteps` component is used to render a sequence of steps, typically for a multi-step process. It supports different variants (dot, number, icon), sizes, and layouts (inline, stack). The component is customizable with options for icons and labels.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"dot"`
- **Description:** Defines the style of the step indicator.
    - `"dot"`
    - `"number"`
    - `"icon"`

### `size`
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the step indicator.
    - `"sm"`
    - `"md"`
    - `"lg"`

### `type`
- **Type:** `string`
- **Default:** `"inline"`
- **Description:** Defines the layout of the steps.
    - `"inline"`: Steps are laid out horizontally.
    - `"stack"`: Steps are stacked vertically, with labels below the indicators.

### `currentStep`
- **Type:** `number`
- **Default:** `1`
- **Description:** The index of the currently active step (1-based).

### `variantIcon`
- **Type:** `ReactComponent`
- **Description:** Custom icon component to be used when `variant` is set to `"icon"`.

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the `ProgressSteps` container.

### `children`
- **Type:** `ReactNode`
- **Description:** The individual `ProgressStep` components that make up the steps.

## Usage

### Basic Example

```jsx
import { ProgressSteps, ProgressStep } from '@bsf/force-ui';
import { Check } from 'lucide-react';

const App = () => (
    <div>
        <h2>Progress Example</h2>
        <ProgressSteps type="inline" variant="number" currentStep={2} size="md">
            <ProgressStep labelText="Step 1"/>
            <ProgressStep labelText="Step 2"/>
            <ProgressStep labelText="Step 3"/>
            <ProgressStep labelText="Step 4"/>
        </ProgressSteps>
    </div>
);

export default App;
