# Alert Component Documentation

## Description

The `Alert` component is a simple component that displays a message to the user. The message is displayed inline on the HTML page. This component can be used to show any warning, error, success message, information, etc

## `Alert` Props

### `design`
- **Type:** `string`
- **Default:** `'stack'`
- **Description:** The design layout of the alert notification. Possible values are: 
    - `stack` 
    - `inline`

### `theme`
- **Type:** `string`
- **Default:** `'light'`
- **Description:** The theme of the alert notification. Possible values are: 
    - `light`
    - `dark`

### `className`
- **Type:** `string`
- **Default:** `''`
- **Description:** Additional CSS class names to apply to the alert notification. For example, you can use this prop to apply gaps between alert notifications and view port edges.

### `variant`
- **Type:** `string`
- **Default:** `'neutral'`
- **Description:** The variant of the alert Possible values are: 
    - `neutral`
    - `custom`
    - `info`
    - `success`
    - `warning`
    - `error`

### `title`
- **Type:** `Title`
- **Default:** `''`
- **Description:** Title of the alert box.

### `content`
- **Type:** `Description`
- **Default:** `''`
- **Description:** Description of the alert box.

### `icon`
- **Type:** `ReactNode`
- **Description:** An icon component to be displayed inside the alert.

### `onClose`
- **Type:** `function`
- **Description:** Callback action for closing the alert.

### `action`
- **Type:** `json`
- **Description:** The action part of the alert. Expects below listed options
```jsx
	action = {
		label: 'Action',
		onClick: () => {},
		type: 'link',
	},
```

### Example

```jsx
import React from 'react';
import { Alert } from '@bsf/force-ui';

const App = () => {
    return (
        <div className="flex gap-3 items-center justify-start flex-wrap m-4 p-4">
            <Alert title={"Info alert"} content={"This is a description"} variant="error" />
            <Alert title={"Info alert"} content={"This is a description"} variant="warning" />
            <Alert title={"Info alert"} content={"This is a description"} variant="success" />
            <Alert title={"Info alert"} content={"This is a description"} design={"stack"} variant="info" action={
                            {label: 'Undo',
                            onClick: () => {},
                            type: 'button',
                        }} />
            <Alert title={"Info alert"} content={"This is a description"} variant="neutral" />
            <Alert title={"Info alert"} content={"This is a description"} theme={"dark"} variant="error" />
            <Alert title={"Info alert"} content={"This is a description"} theme={"dark"} variant="warning" />
            <Alert title={"Info alert"} content={"This is a description"} theme={"dark"} variant="success" />
            <Alert title={"Info alert"} content={"This is a description"} theme={"dark"} variant="info" />
            <Alert title={"Info alert"} content={"This is a description"} theme={"dark"} variant="neutral" />
        </div>
    );
};

```
