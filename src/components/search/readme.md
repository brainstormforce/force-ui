# SearchBox Component Documentation

## Description

The `SearchBox` component is a versatile, customizable search input component built with React and styled using Tailwind CSS. It provides a user-friendly interface for search functionality with support for dropdown results, loading states, and various styling options.

## `SearchBox` Props

### `dimension`
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the component. Options include:
  - `"sm"`
  - `"md"`
  - `"lg"`

### `open`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Controls whether the dropdown is open.

### `onOpenChange`
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function triggered when the open state changes.
- **Signature:** `function(isOpen: boolean): void`
- **Parameters:**
    - `isOpen`: The new open state.

## `SearchBox.Input` Props

### `placeholder`
- **Type:** `string`
- **Default:** `"Search..."`
- **Description:** Placeholder text for the input.

### `variant`
- **Type:** `string`
- **Default:** `"primary"`
- **Description:** Style variant. Options include:
  - `"primary"`
  - `"secondary"`
  - `"ghost"`

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, the input will be disabled.

### `value`
- **Type:** `string`
- **Default:** `undefined`
- **Description:** Controlled input value.

### `defaultValue`
- **Type:** `string`
- **Default:** `undefined`
- **Description:** Default value for uncontrolled input.

### `onChange`
- **Type:** `function`
- **Default:** `undefined`
- **Description:** Callback function triggered when the input value changes.
- **Signature:** `function(value: string, event: React.ChangeEvent): void`
- **Parameters:**
    - `value`: The new input value.
    - `event`: The original change event.

## `SearchBox.Loading` Props

### `loadingIcon`
- **Type:** `ReactNode`
- **Default:** `<Loader />`
- **Description:** Custom loading icon component.

## `SearchBox.ResultItem` Props

### `onClick`
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function triggered when the item is clicked.

### `icon`
- **Type:** `ReactNode`
- **Default:** `undefined`
- **Description:** Icon component to display next to the item.

## Basic Example

```jsx
import SearchBox from './SearchBox';
import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
    // Perform search logic here
  };

  return (
    <div>
      <SearchBox dimension="md" open={open} onOpenChange={setOpen}>
        <SearchBox.Input
          placeholder="Search..."
          value={value}
          onChange={handleChange}
        />
        <SearchBox.Content>
          <SearchBox.Loading />
          <SearchBox.Results>
            <SearchBox.ResultTitle>Results</SearchBox.ResultTitle>
            <SearchBox.ResultItem>Result 1</SearchBox.ResultItem>
            <SearchBox.ResultItem>Result 2</SearchBox.ResultItem>
            <SearchBox.Separator />
            <SearchBox.ResultTitle>Categories</SearchBox.ResultTitle>
            <SearchBox.ResultItem>Category 1</SearchBox.ResultItem>
            <SearchBox.ResultItem>Category 2</SearchBox.ResultItem>
          </SearchBox.Results>
        </SearchBox.Content>
      </SearchBox>
    </div>
  );
};

export default App;
```