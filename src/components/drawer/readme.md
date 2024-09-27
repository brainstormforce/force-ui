# Drawer Component Documentation

## Description

The `Drawer` component is a versatile, customizable drawer component built with Tailwind CSS. It supports various design, customization and additional properties to suit different use cases. The drawer can be used in controlled or uncontrolled mode, and can be triggered by a button, link, or any other element.

## `Drawer` Props

### `open` (Required for controlled drawer)

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Defines whether the drawer is open or closed.
-   **Note:** This prop is required when using the drawer in controlled mode.

### `setOpen` (Required for controlled drawer)

-   **Type:** `function`
-   **Description:** A function to set the `open` state of the drawer.
-   **Note:** This prop is required when using the drawer in controlled mode.
-   **Example:** `(isOpen) => setOpen(isOpen)`

### `trigger` (Required for uncontrolled drawer)

-   **Type:** `ReactNode`
-   **Description:** The element that triggers the drawer to open when clicked. This can be a button, link, or any other element.
-   **Note:** If the setOpen and open props are not provided, the drawer will be uncontrolled and will open when the trigger element is clicked. The onClick handler will be automatically added to the trigger element.
-   **Example:** `<button>Open Drawer</button>`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the drawer.
-   **Default:** `""`

### `exitOnClickOutside`

-   **Type:** `boolean`
-   **Description:** Defines whether the drawer should close when clicked outside the drawer.
-   **Default:** `false`

### `exitOnEsc`

-   **Type:** `boolean`
-   **Description:** Defines whether the drawer should close when the `Esc` key is pressed.
-   **Default:** `true`

### `design`

-   **Type:** `string`
-   **Description:** Defines the design of the drawer. Options include:
    -   `"simple"`: A simple drawer with a white background and shadow.
    -   `"footer-divided"`: A drawer with a footer that has a background color different from the main drawer.

### `position`
-   **Type:** `string`
-  **Description:** Defines the position of the drawer. Options include:
	-   `"left"`: The drawer will be positioned on the left side of the screen.
	-   `"right"`: The drawer will be positioned on the right side of the screen.
-   **Default:** `"right"`
-  **Note:** The default position of the drawer is on the right side of the screen.

### `transitionDuration`
-  **Type:** `string`
- **Description:** Defines the duration of the transition when the drawer opens or closes.
- **Default:** `"200ms"`
- **Note:** The default duration of the transition is 200ms.

## `Drawer.Panel` Props

### `className`
-   **Type:** `string`
-  **Description:** Additional custom classes to be added to the panel.
- **Default:** `""`
- **Note:** The panel is the main container of the drawer. To change the width, height, or other styles of the drawer, you can add custom classes to the panel.

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the drawer.

## `Drawer.Header` Props

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the header.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the header.

## `Drawer.Title` Props

### `as` (Optional)

-   **Type:** `string` | `React.ElementType`
-   **Default:** `"h3"`
-   **Description:** The HTML tag or React component to be used for the title.
-   **Example:** `"h1"`, `"h2"`, `CustomComponent`
-   **Note:** The title is usually rendered as an `h3` element by default.
-   **Example:** `<Drawer.Title as="h1">Drawer Title</Drawer.Title>`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the title.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the title.
-   **Example:** `"Drawer Title"`

## `Drawer.Description` Props

### `as` (Optional)

-   **Type:** `string` | `React.ElementType`
-   **Default:** `"p"`
-   **Description:** The HTML tag or React component to be used for the description.
-   **Example:** `<Drawer.Description as="h1">Drawer Title</Drawer.Description>`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the description.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the description.
-   **Example:** `"This is a description."`

## `Drawer.CloseButton` Props (Can be used for controlled and uncontrolled drawers)

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the close button.

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the close button.
-   **Default:** `"×"`

### `as` (Optional)

-   **Type:** `string` | `React.ElementType`
-   **Default:** `"button"`
-   **Description:** The HTML tag or React component to be used for the close button.
-   **Example:** `"button"`, `"a"`, `CustomComponent`
-   **Note:** The close button is usually rendered as a `button` element by default.

## `Drawer.Body` Props

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the body.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the body.

## `Drawer.Footer`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the body.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode` | `ReactNode[]` | `function`
-   **Description:** The content to be displayed inside the body.
-   Note: close

## `Drawer.Backdrop`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the backdrop.
-   **Default:** `""`

## Usage

### Controlled Drawer

```jsx
import React, { useState } from 'react';
import { Drawer } from '@force-ai/ui';

const MyComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
			<div className="flex items-center gap-10">
				<div className="space-y-2">
					<div>Drawer with trigger button (Uncontrolled)</div>
					<Drawer
						trigger={ <Button>Open Drawer</Button> }
						exitOnClickOutside={ false }
						design="footer-divided"
					>
						<Drawer.Header>
							<div className="flex items-center justify-between">
								<Drawer.Title>Drawer Title</Drawer.Title>
								<Drawer.CloseButton />
							</div>
							<Drawer.Description>
								Lorem ipsum dolor sit amet consectetur. Aliquam
								sed scelerisque et arcu nibh a massa.
							</Drawer.Description>
						</Drawer.Header>
						<Drawer.Body>
							<h1 className="m-0">Drawer Content</h1>
						</Drawer.Body>
						<Drawer.Footer>
							{ ( { close } ) => (
								<>
									<div className="mr-auto inline-flex items-center">
										Other option
									</div>
									<Button variant="ghost">Details</Button>
									<Button onClick={ close } variant="outline">
										Cancel
									</Button>
									<Button variant="primary">Save</Button>
								</>
							) }
						</Drawer.Footer>
						<Drawer.Backdrop />
					</Drawer>
				</div>
        { /* Another Example */ }
				<div className="space-y-2">
					<div>Drawer (Controlled)</div>
					<Button
						onClick={ () => {
							setOpenDrawer( true );
						} }
					>
						Open Drawer
					</Button>
					<Drawer
						open={ openDrawer }
						setOpen={ setOpenDrawer }
						exitOnClickOutside={ false }
						exitOnEsc={ false }
						design="footer-divided"
					>
						<Drawer.Header>
							<div className="flex items-center justify-between">
								<Drawer.Title>Drawer Title</Drawer.Title>
								<Drawer.CloseButton />
							</div>
							<Drawer.Description>
								Lorem ipsum dolor sit amet consectetur. Aliquam
								sed scelerisque et arcu nibh a massa.
							</Drawer.Description>
						</Drawer.Header>
						<Drawer.Body>
							<h1 className="m-0">Drawer Content</h1>
						</Drawer.Body>
						<Drawer.Footer>
							<div className="mr-auto inline-flex items-center">
								Other option
							</div>
							<Button variant="ghost">Details</Button>
							<Button
								onClick={ () => setOpenDrawer( false ) }
								variant="outline"
							>
								Cancel
							</Button>
							<Button variant="primary">Save</Button>
						</Drawer.Footer>
						<Drawer.Backdrop />
					</Drawer>
				</div>
  );
};

```
