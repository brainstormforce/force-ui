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

### `dropdownPortalRoot`
- **Type:** `HTMLElement | null`
- **Default:** `null`
- **Description:** Root element where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.

### `dropdownPortalId`
- **Type:** `string`
- **Default:** `""`
- **Description:** Id of the dropdown portal where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.


## `Select.Option` Props

### `value`
- **Type:** `string | number | object`
- **Default:** `undefined`
- **Description:** Value of the option.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, the option will be disabled.

### `selected`
- **Type:** `boolean | undefined`
- **Default:** `undefined`
- **Description:** If true, the option will be selected.

### Basic Example

```jsx
import Select from './Select';

const App = () => (
  <div>
    <Select 
        label="Color"
        dropdownPortalId='wpcontent'
        onChange={(value) => console.log(value)} 
        combobox
    >
        <Select.Button label="Color" />
        <Select.Options>
            {
                options.map((option, index) => (
                    <Select.Option key={index} value={option}>{option}</Select.Option>
                ))
            }
        </Select.Options>
    </Select>
  </div>
);

export default App;
```