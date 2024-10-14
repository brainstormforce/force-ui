# Tooltip Component Documentation

## Description

The `Tooltips` are small, interactive pop-up boxes that provide brief, informative messages when users hover over, focus on, or tap an element. They are typically used to offer additional context or explanation for a specific component, such as buttons, icons, or links, without cluttering the interface.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"dark"`
- **Description:** Defines the style variant of the tooltip. Options include:
  - `"light"` 
  - `"dark"`

### `placement`
- **Type:** `string`
- **Default:** `"bottom"`
- **Description:** Defines the position of the tooltip. Options include:
  - `"top"`
  - `"top-start"`
  - `"top-end"`
  - `"right"`
  - `"right-start"`
  - `"right-end"`
  - `"bottom"`
  - `"bottom-start"`
  - `"bottom-end"`
  - `"left"`
  - `"left-start"`
  - `"left-end"`

### label
**type:** `object` || `ReactComponent`
- **Object properties/format:** `{heading: 'Tooltip heading,' description: 'Tooltip description'}`
The label and label description also accepts a React component.

### `arrow`
- **Type:** `boolean`
- **Default:** `"false"`
- **Description:** Defines whether the tooltip is displayed with an arrow or not. Options include:
  - `"false"` 
  - `"true"`

### `open`
- **Type:** `boolean`
- **Description:** Controls the open state of the tooltip. When provided, it manages the visibility of the tooltip.

### `setOpen`
- **Type:** `function`
- **Description:** Event handler for setting the open state of the tooltip.

### `boundary`
- **Type:** `HTMLElement`
- default: `clippingAncestors`
- **Description:** The element that the tooltip is positioned relative to. When provided, the tooltip will be positioned within the boundary of the element.
- **Example:** `boundary={document.getElementById('boundary')}`

### `strategy`
- **Type:** `string`
- **Default:** `"fixed"`
- **Description:** Defines the positioning strategy of the tooltip. Options include:
  - `"absolute"` 
  - `"fixed"`
- **Note:** The `"fixed"` strategy is recommended for most use cases.

### `offset`
- **Type:** `number` | `object`
- **Description:** Defines the offset of the tooltip from the target element. The offset can be set as a number or an object with the following properties:
  - mainAxis?: number;
  - crossAxis?: number;
  - alignmentAxis?: number | null;

### `tooltipPortalRoot`
- **Type:** `HTMLElement | null`
- **Default:** `null`
- **Description:** Root element where the tooltip will be rendered. It's helpful when the tooltip is rendered outside the parent container and scopped Tailwind CSS styles.

### `tooltipPortalId`
- **Type:** `string`
- **Default:** `""`
- **Description:** Id of the tooltip portal where the tooltip will be rendered. It's helpful when the tooltip is rendered outside the parent container and scopped Tailwind CSS styles.

### `triggers`
- **Type:** `string[]`
- **Default:** `["hover", "focus"]`
- **Description:** Defines the events that trigger the tooltip. Options include:
  - `"hover"` 
  - `"focus"`
  - `"click"`

### `interactive`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** When true, the tooltip is interactive and will not close when the user hovers away from the tooltip.

### `children`
- **Type:** `ReactNode`
- **Description:** The elements that trigger the tooltip. Typically, this could be buttons, icons, or links.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the tooltip container.

## Usage

### Basic Example

```jsx
import { Tooltip } from '@bsf/force-ui';

const App = () => (
	<div>
		<Tooltip
            label={{
                heading: 'Tooltip Heading',
                description: <span>This is <strong>custom JSX</strong> in the description.</span>
            }}
			arrow
		>
			<button>Hover over me</button>
		</Tooltip>

		{/* Click only mode */}
		<Tooltip
            label={{
                heading: 'Tooltip Heading',
                description: 'This is a simple text description.'
            }}
			triggers={['click']}
			arrow
		>
			<button>Click me</button>
		</Tooltip>

		{/* Interactive Tooltip */}
		<Tooltip
            label={
                <div>
                    <h4>Tooltip title</h4>
                    <div>Tooltips are used to describe or identify
                    an element. In most scenarios, tooltips help the user
                    understand meaning, function or alt-text.</div>
                    <Button variant="primary" destructive className="w-full">
                            Primary
                    </Button>
                </div>
            }
			arrow
			interactive
		>
			<button>Hover over me</button>
		</Tooltip>

		{/* Controlled tooltip */}
		<Tooltip
			label={{
                heading: 'Tooltip Heading',
                description: 'This is a simple text description.'
            }}
			arrow
			interactive
			placement="top-start"
			variant="dark"
			open={open}
			setOpen={handleOpen}
		>
			<button>Hover over me</button>
		</Tooltip>
	</div>
);

export default App;
```