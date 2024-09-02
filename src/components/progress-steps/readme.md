# ProgressSteps Component

## Description

The `ProgressSteps` component renders a sequence of steps, typically used in multi-step processes like forms, wizards, or onboarding flows. The component supports different variants (dot, number, icon), sizes, and layouts (inline, stack). It also allows customization with icons and labels.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"dot"`
- **Description:** Defines the style of the step indicator.
  - `"dot"`: Small dots represent each step.
  - `"number"`: Numbers represent each step.
  - `"icon"`: Icons represent each step.

### `size`
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the step indicator.
  - `"sm"`: Small size.
  - `"md"`: Medium size.
  - `"lg"`: Large size.

### `type`
- **Type:** `string`
- **Default:** `"inline"`
- **Description:** Defines the layout of the steps.
  - `"inline"`: Steps are laid out horizontally.
  - `"stack"`: Steps are stacked vertically, with labels below the indicators.

### `currentStep`
- **Type:** `number`
- **Default:** `1`
- **Description:** The index of the currently active step (1-based index).

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the `ProgressSteps` container.

### `children`
- **Type:** `ReactNode`
- **Description:** The individual `ProgressStep` components that make up the steps.

## `ProgressStep` Props

### `labelText`
- **Type:** `string`
- **Description:** The label text to display for each step.

### `icon`
- **Type:** `JSX.Element`
- **Default** `<Plus />`
- **Description:** The icon to display for the step when using the `icon` variant. This prop can also be used with the `number` variant to replace the number with an icon.

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the individual step container.

## Usage

### Basic Example

```jsx
import { ProgressSteps } from '@bsf/force-ui';
import { Plus } from 'lucide-react';

const App = () => (
    <div>
        <h2>Progress Example</h2>
        <ProgressSteps type="inline" variant="number" currentStep={2} size="md">
            <ProgressSteps.Step labelText="Step 1"/>
            <ProgressSteps.Step labelText="Step 2"/>
            <ProgressSteps.Step labelText="Step 3"/>
            <ProgressSteps.Step labelText="Step 4"/>
        </ProgressSteps>
    </div>
);

export default App;
