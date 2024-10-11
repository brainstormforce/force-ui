# Pagination Component Documentation

## Description

The `Pagination` component provides a navigational interface for page-based navigation, supporting customizable options such as size, icons, and disabled states. It is built with Tailwind CSS and is designed to be flexible for different use cases.

## `Pagination` Props

### `size`
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the pagination buttons. Options include:
  - `"xs"`
  - `"sm"`
  - `"md"`
  - `"lg"`

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, disables the pagination buttons, preventing user interaction.

## `Pagination.Item` Props

### `isActive`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, the pagination link will be styled as active.

### `onClick`
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function when the pagination link is clicked.

## `Pagination.Previous` Props

### `onClick`
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function when the "Previous" button is clicked.

## `Pagination.Next` Props

### `onClick`
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function when the "Next" button is clicked.

## `Pagination.Ellipsis` Props

### `onClick`
- **Type:** `function`
- **Default:** `() => {}`
- **Description:** Callback function when the ellipsis (`...`) is clicked.

## Usage Example

```jsx
import Pagination from './Pagination';

const App = () => (
  <Pagination size="md">
    <Pagination.Content>
    <Pagination.Previous onClick={() => console.log('Previous page')} />
      <Pagination.Item isActive onClick={() => console.log('Go to page 1')}> 1 </Pagination.Item>
      <Pagination.Item onClick={() => console.log('Go to page 2')}> 2 </Pagination.Item>
      <Pagination.Ellipsis onClick={() => console.log('Show more pages')} />
      <Pagination.Item onClick={() => console.log('Go to page 10')}> 10 </Pagination.Item>
    <Pagination.Next onClick={() => console.log('Next page')} />
    </Pagination.Content>
  </Pagination>
);

export default App;
```
