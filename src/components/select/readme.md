# Select Component Documentation

## Description

The `Select` component is a versatile, customizable select component built with Tailwind CSS. It supports various sizes, types, and additional properties to suit different use cases.

## `Select` Props

### `id`
- **Type:** `string`
- **Default:** `undefined`
- **Description:** The `id` attribute of the select element.

### `value`
- **Type:** `string | number | object | undefined`
- **Default:** `undefined`
- **Description:** Value of the select (for controlled component).

### `defaultValue`
- **Type:** `string | number | object | undefined`
- **Default:** `undefined`
- **Description:** Default value of the select (for uncontrolled component).

### `onChange`
- **Type:** `function`
- **Default:** `undefined`
- **Description:** Callback function to handle the change event.
- **Signature:** `function(value: string | number | object): void`
- **Parameters:**
    - `value`: The selected value.

### `by`
- **Type:** `string`
- **Default:** `"id"`
- **Description:** Used to identify the selected value when value type is an `object`. Default is `"id"`.

### `multiple`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, it will allow multiple selection.

### `combobox`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, it will show a search box.

### `size`
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the style variant of the button. Options include:
  - `"sm"`
  - `"md"`
  - `"lg"`

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, the select will be disabled.
- **Default:** `false`


## `Select.Button` Props

### `icon`
- **Type:** `ReactNode`
- **Default:** `null`
- **Description:** Icon to show in the select button.

### `placeholder`
- **Type:** `string`
- **Default:** `"Select an option"`
- **Description:** Placeholder text when there's no option selected.

### `optionIcon`
- **Type:** `ReactNode`
- **Default:** `null`
- **Description:** Icon to show in the selected option (for multi-select only).

### `displayBy`
- **Type:** `string`
- **Default:** `"name"`
- **Description:** Key that will be used to display the value when selected value is an object. Default is `"name"`.

### `label`
- **Type:** `string`
- **Default:** `undefined`
- **Description:** Label for the select component.

## `Select.Portal` Props

> **Note:** This component is used to render the dropdown outside the parent container. `Select.Portal` By default, renders content in the `document.body`. You can use the following props to render the dropdown in a specific container. Use this to wrap the `Select.Options` component to render the dropdown in a specific container when overflow is hidden in the parent container causing the dropdown to be hidden.

### `root`
- **Type:** `HTMLElement | null`
- **Default:** `null`
- **Description:** Root element where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.

### `id`
- **Type:** `string`
- **Default:** `""`
- **Description:** Id of the dropdown portal where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.


## `Select.Options` Props

### `searchBy` 
- **Type:** `string`
- **Default:** `"id"`
- **Description:** The key that will be used to identify searched value using the key. Default is `"id"`.

### `searchPlaceholder`
- **Type:** `string`
- **Default:** `"Search..."`
- **Description:** Placeholder text for search box.
- **Default:** `"Search..."`


## `Select.Option` Props

### `value`
- **Type:** `string | number | object`
- **Default:** `undefined`
- **Description:** Value of the option.

### `selected`
- **Type:** `boolean | undefined`
- **Default:** `undefined`
- **Description:** If true, the option will be selected.

### Basic Example

```jsx
import Select from './Select';

const options = [
	'Red',
	'Orange',
	'Yellow',
	'Green',
	'Cyan',
	'Blue',
	'Purple',
	'Pink',
];

const App = () => (
  <div>

    <Select
        onChange={ ( value ) => console.log( value ) }
        multiple
    >
        <Select.Button label="Color" />
        { /* Portal will render options inside the `wp-content` container */ }
        <Select.Portal id="wp-content">
            <Select.Options
            >
                { options.map( ( option, index ) => (
                    <Select.Option key={ index } value={ option }>
                        { option }
                    </Select.Option>
                ) ) }
            </Select.Options>
        </Select.Portal>
    </Select>

    <Select
        onChange={ ( value ) => console.log( value ) }
        multiple
    >
        <Select.Button label="Color" />
        { /* Without Select.Portal will render options inside the parent container */ }
        <Select.Options
        >
            { options.map( ( option, index ) => (
                <Select.Option key={ index } value={ option }>
                    { option }
                </Select.Option>
            ) ) }
        </Select.Options>
    </Select>
  </div>
);

export default App;
```