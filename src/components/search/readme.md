# SearchBox

## Description

The `SearchBox` component is designed for easy and intuitive searching within your application. Built with React and styled using Tailwind CSS, it allows users to input search queries while displaying dynamic search results. This component is particularly useful for applications that require user input for searching content or navigating through a list of items.

## Props

### onChange
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function triggered when the input value changes, allowing you to fetch or filter search results based on the user’s input.

### handleResultClick
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function triggered when a search result is clicked, providing a way to handle user selection.

### placeholder
- **Type:** `string`
- **Default:** `"Search"`
- **Description:** Placeholder text displayed in the input field when it is empty.

### variant
- **Type:** `string`
- **Default:** `"primary"`
- **Description:** Defines the style variant of the search box:
  - `"primary"`
  - `"secondary"`
  - `"ghost"`

### disabled
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Disables the input field when set to true.
  - `true`
  - `false`

### size
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the input field:
  - `"sm"`
  - `"md"`
  - `"lg"`

### loading
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Indicates whether the search box is in a loading state. When true, it displays a loading icon.

### loadingIcon
- **Type:** `ReactNode`
- **Default:** `<Loader />`
- **Description:** Icon displayed while loading search results.

### searchResult
- **Type:** `Array`
- **Default:** `[]`
- **Description:** Array of main search results to display.

### additionalResult
- **Type:** `Array`
- **Default:** `[]`
- **Description:** Array of additional category results to display below the main search results.

### searchResultIcon
- **Type:** `ReactNode`
- **Default:** `<File />`
- **Description:** Icon displayed next to each main search result.

### additionalResultLabel
- **Type:** `string`
- **Default:** `"Category"`
- **Description:** Label for the additional results section.

### additionalResultIcon
- **Type:** `ReactNode`
- **Default:** `<Folder />`
- **Description:** Icon displayed next to each additional category result.

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the search box wrapper.

### children
- **Type:** `ReactNode`
- **Default:** `null`
- **Description:** Additional elements to render inside the search box component.

## Usage

### Basic Example

```jsx
import SearchBox from '@bsf/force-ui';

const App = () => {
  const handleSearchChange = (value) => {
    // Handle search input change
  };

  const handleResultClick = (item) => {
    // Handle click on a search result
  };

  return (
    <div>
      <SearchBox
        onChange={handleSearchChange}
        handleResultClick={handleResultClick}
        placeholder="Search"
        loading={false}
        searchResult={['Result 1', 'Result 2']}
        additionalResult={['Category 1', 'Category 2']}
        additionalResultLabel="Categories"
      />
    </div>
  );
};

export default App;
```