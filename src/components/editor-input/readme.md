# Editor Input

## Description
The Editor Input component is a text input field that allows users to input text as well as tags/mentions from the combobox.

## Props

### defaultValue
- **Type:** `json string`
- **Default:** `""`
- Description: The default value of the editor input field. The value should be a JSON string.
- Example:
```json
{
    "root": {
        "children": [
            {
                "children": [
                    {
                        "detail": 0,
                        "format": 0,
                        "mode": "normal",
                        "style": "",
                        "text": "Employee name: ",
                        "type": "text",
                        "version": 1
                    },
                    {
                        "type": "mention",
                        "data": {
                            "id": 3,
                            "label": "Catherine"
                        },
                        "version": 1
                    }
                ],
                "direction": "ltr",
                "format": "",
                "indent": 0,
                "type": "paragraph",
                "version": 1,
                "textFormat": 0,
                "textStyle": ""
            }
        ],
        "direction": "ltr",
        "format": "",
        "indent": 0,
        "type": "root",
        "version": 1
    }
}
```


### onChange
- **Type:** `function`
- **params:** `editorState` & `editor`
- **Description:** Callback function that is called when the value of the input changes. The function receives the updated value as an argument.

### placeholder
- **Type:** `string`
- **Default:** `Press @ to view variable suggestions`
- **Description:** Placeholder text for the editor input field.

### size
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the editor input field
    - `"sm"`
    - `"md"`
    - `"lg"`

### options
- **Type:** `array`
- **Default:** `[]`
- **Description:** Array of options to be displayed in the combobox. Each option should be an object  or string.

### by
- **Type:** `string`
- **Default:** `"name"`
- **Description:** The key to be used to display the label of the option in the combobox and in the editor after selecting any mention/tag option.

### autoFocus
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If `true`, the editor input field will be focused when the component is mounted.

### autoSpaceAfterMention
- **Type:** `boolean`
- **Default:** `true`
- **Description:** If `true`, a space will be added after the mention/tag node. If any other character is pressed after selecting a mention/tag option, the space will be added automatically.

### className
- **Type:** `string`
- **Default:** `""`
- **Description:** Additional classes to be added to the editor input field.
- Example:
```jsx
    <EditorInput
        ...
        className="..."
    />
```

### wrapperClassName
- **Type:** `string`
- **Default:** `""`
- **Description:** Additional classes to be added to the editor input wrapper.

### disabled
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If `true`, the editor input field will be disabled.
- Example:
```jsx
    <EditorInput
        ...
        disabled
    />
```

### menuComponent
- **Type:** `React.ReactNode`
- **Description:** Custom component to be rendered in the combobox. The function should return a React component.
- usage:
```jsx
    const MenuComponent = ( { size, className, children } ) => (
    	<ul
    		className="..."
    	>
    		{ children }
    	</ul>
    );

...
    
    <EditorInput
        ...
        menuComponent={MenuComponent}
    />
```

### menuItemComponent
- **Type:** `React.ReactNode`
- **Description:** Custom component to be rendered for each option in the combobox. The function should return a React component.
- usage:
```jsx
    const MenuItemComponent = forwardRef(
    	( { size, children, selected = false, className, ...props }, ref ) => (
    		<li
    			ref={ ref }
    			className="..."
    			{ ...props }
    		>
    			{ children }
    		</li>
    	)
    );

...

    <EditorInput
        ...
        menuItemComponent={MenuItemComponent}
    />
```

### Access editor ref
To access the editor ref, you can use the `useRef` hook. The editor ref can be accessed using the `current` property of the ref object.

```jsx
import { useRef } from 'react';
import { EditorInput } from '@bsf/force-ui';

const App = () => {
    const editorRef = useRef();

    return (
        <div className="max-w-sm my-10">
            <EditorInput
                ref={ editorRef }
                ...
            />
        </div>
    );
};
```


#### usage
```jsx
import { EditorInput } from '@bsf/force-ui';

const App = () => (
  <div className="max-w-sm my-10">
    <EditorInput
        size="md"
        by='label'
        options={ [
            {
                id: 1,
                label: 'Anton'
            },
            {
                id: 2,
                label: 'Boris'
            },
            {
                id: 3,
                label: 'Catherine'
            },
            {
                id: 4,
                label: 'Dmitri'
            },
            {
                id: 5,
                label: 'Felix'
            },
            {
                id: 6,
                label: 'Gina'
            }
        ] }
        onChange={ ( editorState ) =>
            console.log( editorState.toJSON() )
        }
    />
  </div>
);
