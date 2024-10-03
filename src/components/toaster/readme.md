# Toaster Component Documentation

## Description

The `Toaster` component is a simple component that displays a message to the user. The message is displayed in a toast-like manner, appearing at the top of the screen and disappearing after a set amount of time.

## `Toaster` Props

### `position`
- **Type:** `string`
- **Default:** `'top-right'`
- **Description:** The position of the toast notification. Possible values are: 
    - `top-right`
    - `top-left`
    - `bottom-right` 
    - `bottom-left`

### `design`
- **Type:** `string`
- **Default:** `'stack'`
- **Description:** The design layout of the toast notification. Possible values are: 
    - `stack` 
    - `inline`

### `theme`
- **Type:** `string`
- **Default:** `'light'`
- **Description:** The theme of the toast notification. Possible values are: 
    - `light`
    - `dark`

### `className`
- **Type:** `string`
- **Default:** `''`
- **Description:** Additional CSS class names to apply to the toast notification. For example, you can use this prop to apply gaps between toast notifications and view port edges.

### `autoDismiss`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Whether the toast notification should automatically dismiss after a certain time.

### `dismissAfter`
- **Type:** `number`
- **Default:** `5000`
- **Description:** The time in milliseconds after which the toast notification will be dismissed.


## `toast` Function

The `Toaster` component also exposes a `toast` function that can be used to display a toast notification programmatically. The function accepts the following parameters:

### `options` Object
- **Type:** `object`
- **Description:** An object containing the following properties:
    - `description`: The description to display in the toast notification.
    - `icon`: Custom icon for the toast.
    - `theme`: The theme of the toast notification. Possible values are: 
        - `light`
        - `dark`
    - `autoDismiss`: Whether the toast notification should automatically dismiss after a certain time.
    - `dismissAfter`: The time in milliseconds after which the toast notification will be dismissed.
    - `action`: To show an action button in the toast notification.
        - `label`: The label of the action button.
        - `onClick`: The function to call when the action button is clicked.
            - parameters: 
                - `close`: A function to close the toast notification.
        - `type`: The type of the action button. Possible values are: 
            - `button`
            - `link`
- **Example:**
    ```javascript
    toast('Hello world title!', {
        description: 'Hello World description!',
        theme: 'light',
        autoDismiss: true,
        dismissAfter: 5000,
        action: {
            label: 'Undo',
            onClick: (close) => {
                console.log('Undo clicked');
                close();
            },
            type: 'button'
        }
    });
    ```

### `Neutral toast`
- **parameters:** 
    - `content`: The content/title of the warning toast notification.
    - `options`: An option object.
- **usage:** `toast('Hello World!')`

### `Success toast`
- **parameters:** 
    - `content`: The content/title of the warning toast notification.
    - `options`: An option object.
- **usage:** `toast.success('Hello World!')`

### `Error toast`
- **parameters:** 
    - `content`: The content/title of the warning toast notification.
    - `options`: An option object.
- **usage:** `toast.error('Hello World!')`

### `Warning toast`
- **parameters:** 
    - `content`: The content/title of the warning toast notification.
    - `options`: An option object.
- **usage:** `toast.warning('Hello World!')`

### `Info toast`
- **usage:** `toast.info('Hello World!')`

### `Custom toast`
- **parameters:** 
    - `content`: A function that returns the content of the custom toast notification.
        - Available parameters: 
            - `close`: A function to close the toast notification.
            - `action`: An object containing the action button properties.
    - `options`: An option object.
- **usage:** 

```jsx
toast.custom(
    ({ close }) => (
        <div className="text-black">
            <p>Hello, I am a custom toast</p>
            <button onClick={close}>Close</button>
        </div>
    ),
    {
        autoDismiss: false,
    }
);
```

### Example

```jsx
import React from 'react';
import {Toaster, toast} from '@bsf/force-ui';

const App = () => {
    return (
        <div className="flex gap-3 items-center justify-start flex-wrap m-4 p-4">
            <Toaster dismissAfter={ 3000 } />
            { /* Stack */ }
            <div className="flex items-center justify-start gap-1 [&_*]:shrink-0">
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.success( 'Success stack toast', {
                            description: 'This is a success description',
                        } );
                    } }
                >
                    Show Success Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.info( 'Info stack toast', {
                            description: 'This is an info description',
                        } );
                    } }
                >
                    Show Info Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.warning( 'Warning stack toast', {
                            description: 'This is a warning description',
                        } );
                    } }
                >
                    Show Warning Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.error( 'Error stack toast', {
                            description: 'This is an error description',
                        } );
                    } }
                >
                    Show Error Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast( 'Default stack toast', {
                            description: 'This is a default description',
                        } );
                    } }
                >
                    Show Default Toast
                </Button>
            </div>
            { /* Dark */ }
            <div className="flex items-center justify-start gap-1 [&_*]:shrink-0">
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.success( 'Success toast', {
                            description: 'This is a success description',
                            theme: 'dark',
                        } );
                    } }
                >
                    Show Dark Success Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.info( 'Info toast', {
                            description: 'This is an info description',
                            theme: 'dark',
                        } );
                    } }
                >
                    Show Dark Info Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.warning( 'Warning toast', {
                            description: 'This is a warning description',
                            theme: 'dark',
                        } );
                    } }
                >
                    Show Dark Warning Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.error( 'Error toast', {
                            description: 'This is an error description',
                            theme: 'dark',
                        } );
                    } }
                >
                    Show Dark Error Toast
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast( 'Default toast', {
                            description: 'This is a default description',
                            theme: 'dark',
                        } );
                    } }
                >
                    Show Dark Default Toast
                </Button>
            </div>
            <div className="flex items-center justify-start gap-1 [&_*]:shrink-0">
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.success( 'Success toast', {
                            description: 'This is a success description',
                            theme: 'light',
                            action: {
                                label: 'Undo',
                                onClick: ( close ) => {
                                    close();
                                },
                                type: 'button',
                            },
                        } );
                    } }
                >
                    Show Light Success Toast with Action button
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.success( 'Success toast', {
                            description: 'This is a success description',
                            theme: 'dark',
                            action: {
                                label: 'Undo',
                                onClick: ( close ) => {
                                    close();
                                },
                                type: 'button',
                            },
                        } );
                    } }
                >
                    Show Dark Success Toast with Action button
                </Button>
                <Button
                    size="xs"
                    onClick={ () => {
                        toast.custom(
                            ( { close } ) => (
                                <div className="text-black">
                                    <p>Hello, I am a custom toast</p>
                                    <button onClick={ close }>Close</button>
                                </div>
                            ),
                            {
                                autoDismiss: false,
                            }
                        );
                    } }
                >
                    Show Custom Toast
                </Button>
            </div>
        </div>
    );
};




