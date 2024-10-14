# SearchBox Component Documentation

## Description

The `SearchBox` component is a versatile, customizable search input component built with React. It provides a user-friendly interface for search functionality with support for dropdown results, loading states, and various styling options.

## `SearchBox` Props

### `size`
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

### `loading`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Controls loading state of the dropdown.

## `SearchBox.Input` Props

### `ref`
- **Type:** `React.RefObject<HTMLInputElement>`
- **Default:** `undefined`
- **Description:** A ref object to access the underlying input DOM element. This can be used to programmatically focus the input or access its properties.

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

### `onChange`
- **Type:** `function`
- **Default:** `undefined`
- **Description:** Callback function triggered when the input value changes.
- **Signature:** `function(event: React.ChangeEvent<HTMLInputElement>): void`
- **Parameters:**
    - `event`: The original change event.

### `className`
- **Type:** `string`
- **Default:** `""`
- **Description:** Custom CSS classes for the input.

## `SearchBox.Content` Props

Container for the dropdown content. No specific props.

## `SearchBox.List` Props

### `filter`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Controls auto filtering of results.

## `SearchBox.Group` Props

### `heading`
- **Type:** `string`
- **Description:** Heading text for the group of items.

## `SearchBox.Item` Props

### `icon`
- **Type:** `ReactNode`
- **Description:** Icon component to display next to the item.

## Basic Example

```jsx
import React, { useRef, useState } from 'react';
import SearchBox from '@your-org/searchbox';
import { File, Folder } from 'lucide-react';

const App = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = () => {
    // Implement your search logic here
  };

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <SearchBox
      size="sm"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <SearchBox.Input
        ref={inputRef}
        placeholder="Search..."
        onChange={handleSearch}
        variant="primary"
      />
      <SearchBox.Content>
        <SearchBox.List filter={true}>
          <SearchBox.Group heading="Suggestions">
            <SearchBox.Item icon={<File />}>Calendar</SearchBox.Item>
            <SearchBox.Item icon={<File />}>Document</SearchBox.Item>
            <SearchBox.Item icon={<File />}>Attendance</SearchBox.Item>
          </SearchBox.Group>
          <SearchBox.Separator />
          <SearchBox.Group heading="Folders">
            <SearchBox.Item icon={<Folder />}>Calendar Folder</SearchBox.Item>
            <SearchBox.Item icon={<Folder />}>Document Folder</SearchBox.Item>
            <SearchBox.Item icon={<Folder />}>Attendance Folder</SearchBox.Item>
          </SearchBox.Group>
        </SearchBox.List>
      </SearchBox.Content>
    </SearchBox>
  );
};

export default App;
```