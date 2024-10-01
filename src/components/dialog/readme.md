# Dialog Component Documentation

## Description

The `Dialog` component is a versatile, customizable dialog component built with Tailwind CSS. It supports various design, customization and additional properties to suit different use cases.

## `Dialog` Props

### `open` (Required for controlled dialog)

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Defines whether the dialog is open or closed.
-   **Note:** This prop is required when using the dialog in controlled mode.

### `setOpen` (Required for controlled dialog)

-   **Type:** `function`
-   **Description:** A function to set the `open` state of the dialog.
-   **Note:** This prop is required when using the dialog in controlled mode.
-   **Example:** `(isOpen) => setOpen(isOpen)`

### `trigger` (Required for uncontrolled dialog)

-   **Type:** `ReactNode`
-   **Description:** The element that triggers the dialog to open when clicked. This can be a button, link, or any other element.
-   **Note:** If the setOpen and open props are not provided, the dialog will be uncontrolled and will open when the trigger element is clicked. The onClick handler will be automatically added to the trigger element.
-   **Example:** `<button>Open Dialog</button>`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the dialog.
-   **Default:** `""`

### `exitOnClickOutside`

-   **Type:** `boolean`
-   **Description:** Defines whether the dialog should close when clicked outside the dialog.
-   **Default:** `false`

### `exitOnEsc`

-   **Type:** `boolean`
-   **Description:** Defines whether the dialog should close when the `Esc` key is pressed.
-   **Default:** `true`

### `design`

-   **Type:** `string`
-   **Description:** Defines the design of the dialog. Options include:
    -   `"simple"`: A simple dialog with a white background and shadow.
    -   `"footer-divided"`: A dialog with a footer that has a background color different from the main dialog.

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the dialog.

### `scrollLock`
-  **Type:** `boolean`
- **Description:** Defines whether the body should be locked when the dialog is open.
- **Default:** `true`
- **Note:** When the dialog is open, the body will be locked, and scrolling will be disabled.

## `Dialog.Panel` Props

### `className`
-   **Type:** `string`
-  **Description:** Additional custom classes to be added to the panel.
- **Default:** `""`
- **Note:** The panel is the main container of the dialog. To change the width, height, or other styles of the dialog, you can add custom classes to the panel.

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the dialog.

## `Dialog.Header` Props

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the header.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the header.

## `Dialog.Header` Props

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the header.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the header.

## `Dialog.Title` Props

### `as` (Optional)

-   **Type:** `string` | `React.ElementType`
-   **Default:** `"h3"`
-   **Description:** The HTML tag or React component to be used for the title.
-   **Example:** `"h1"`, `"h2"`, `CustomComponent`
-   **Note:** The title is usually rendered as an `h3` element by default.
-   **Example:** `<Dialog.Title as="h1">Dialog Title</Dialog.Title>`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the title.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the title.
-   **Example:** `"Dialog Title"`

## `Dialog.Description` Props

### `as` (Optional)

-   **Type:** `string` | `React.ElementType`
-   **Default:** `"p"`
-   **Description:** The HTML tag or React component to be used for the description.
-   **Example:** `<Dialog.Description as="h1">Dialog Title</Dialog.Description>`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the description.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the description.
-   **Example:** `"This is a description."`

## `Dialog.CloseButton` Props (Can be used for controlled and uncontrolled dialogs)

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

## `Dialog.Body` Props

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the body.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode`
-   **Description:** The content to be displayed inside the body.

## `Dialog.Footer`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the body.
-   **Default:** `""`

### `children`

-   **Type:** `ReactNode` | `ReactNode[]` | `function`
-   **Description:** The content to be displayed inside the body.
-   Note: close

## `Dialog.Backdrop`

### `className`

-   **Type:** `string`
-   **Description:** Additional custom classes to be added to the backdrop.
-   **Default:** `""`

## Usage

### Controlled Dialog

```jsx
import React, { useState } from 'react';
import { Dialog } from '@force-ai/ui';

const MyComponent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
			<div className="flex items-center gap-10">
				<div className="space-y-2">
					<div>Dialog with trigger button (Uncontrolled)</div>
					<Dialog
						trigger={ <Button>Open Dialog</Button> }
						exitOnClickOutside={ false }
						design="footer-divided"
					>
						<Dialog.Header>
							<div className="flex items-center justify-between">
								<Dialog.Title>Dialog Title</Dialog.Title>
								<Dialog.CloseButton />
							</div>
							<Dialog.Description>
								Lorem ipsum dolor sit amet consectetur. Aliquam
								sed scelerisque et arcu nibh a massa.
							</Dialog.Description>
						</Dialog.Header>
						<Dialog.Body>
							<h1 className="m-0">Dialog Content</h1>
						</Dialog.Body>
						<Dialog.Footer>
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
						</Dialog.Footer>
						<Dialog.Backdrop />
					</Dialog>
				</div>
        { /* Another Example */ }
				<div className="space-y-2">
					<div>Dialog (Controlled)</div>
					<Button
						onClick={ () => {
							setOpenDialog( true );
						} }
					>
						Open Dialog
					</Button>
					<Dialog
						open={ openDialog }
						setOpen={ setOpenDialog }
						exitOnClickOutside={ false }
						exitOnEsc={ false }
						design="footer-divided"
					>
						<Dialog.Header>
							<div className="flex items-center justify-between">
								<Dialog.Title>Dialog Title</Dialog.Title>
								<Dialog.CloseButton />
							</div>
							<Dialog.Description>
								Lorem ipsum dolor sit amet consectetur. Aliquam
								sed scelerisque et arcu nibh a massa.
							</Dialog.Description>
						</Dialog.Header>
						<Dialog.Body>
							<h1 className="m-0">Dialog Content</h1>
						</Dialog.Body>
						<Dialog.Footer>
							<div className="mr-auto inline-flex items-center">
								Other option
							</div>
							<Button variant="ghost">Details</Button>
							<Button
								onClick={ () => setOpenDialog( false ) }
								variant="outline"
							>
								Cancel
							</Button>
							<Button variant="primary">Save</Button>
						</Dialog.Footer>
						<Dialog.Backdrop />
					</Dialog>
				</div>
  );
};

```
