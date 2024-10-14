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

### `className`
- **Type:** `string`
- **Description:** Additional classes to customize the Pagination container's styles.

## `Pagination.Item` Props

### `isActive`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, the pagination link will be styled as active.

### `Href`
- **Type:** `link`
- **Default:** `#`
- **Description:** Link for the Pagination Item. Passed to each Pagination Item.
Here’s the documentation formatted for `target` and `rel` based on the structure:

### `Target`
- **Type:** `select`
- **Options:** `'_self'`, `'_blank'`, `'_parent'`, `'_top'`
- **Default:** `'_self'`
- **Description:** Specifies where to open the linked document. Common values include:
  - `_self`: Opens the link in the same frame.
  - `_blank`: Opens the link in a new window or tab.
  - `_parent`: Opens the link in the parent frame.
  - `_top`: Opens the link in the full body of the window.

### `Rel`
- **Type:** `text`
- **Default:** `'noopener noreferrer'`
- **Description:** Specifies the relationship between the current document and the linked document. It’s especially useful when using `_blank` to prevent security vulnerabilities by using `'noopener noreferrer'`.

## `Pagination.Previous` Props

### `Icon`
- **Type:** `SVG or Text`
- **Default:** `<ChevronLeft/>`
- **Description:** Icon or text for the Pagination Previous component.

### `Target`
- **Type:** `select`
- **Options:** `'_self'`, `'_blank'`, `'_parent'`, `'_top'`
- **Default:** `'_self'`
- **Description:** Specifies where to open the linked document. Common values include:
  - `_self`: Opens the link in the same frame.
  - `_blank`: Opens the link in a new window or tab.
  - `_parent`: Opens the link in the parent frame.
  - `_top`: Opens the link in the full body of the window.

### `Rel`
- **Type:** `text`
- **Default:** `'noopener noreferrer'`
- **Description:** Specifies the relationship between the current document and the linked document. It’s especially useful when using `_blank` to prevent security vulnerabilities by using `'noopener noreferrer'`.

## `Pagination.Next` Props

### `Icon`
- **Type:** `SVG or Text`
- **Default:** `<ChevronRight/>`
- **Description:** Icon or text for the Pagination Next component.

### `Target`
- **Type:** `select`
- **Options:** `'_self'`, `'_blank'`, `'_parent'`, `'_top'`
- **Default:** `'_self'`
- **Description:** Specifies where to open the linked document. Common values include:
  - `_self`: Opens the link in the same frame.
  - `_blank`: Opens the link in a new window or tab.
  - `_parent`: Opens the link in the parent frame.
  - `_top`: Opens the link in the full body of the window.

### `Rel`
- **Type:** `text`
- **Default:** `'noopener noreferrer'`
- **Description:** Specifies the relationship between the current document and the linked document. It’s especially useful when using `_blank` to prevent security vulnerabilities by using `'noopener noreferrer'`.

## Usage Example

```jsx
import Pagination from './Pagination';

const App = () => (
  <Pagination
			size="md"
			disabled="false"
			className="bg-transparent"
		>
			<Pagination.Content>
				<Pagination.Previous href="#" target="_self"/>
				<Pagination.Item href="#" target="_self" isActive="false">	1 </Pagination.Item>
				<Pagination.Item href="#" target="_self" isActive="true"> 2 </Pagination.Item>
				<Pagination.Item href="#" target="_self" isActive="false"> 3 </Pagination.Item>
				<Pagination.Ellipsis />
				<Pagination.Item href="#" target="_self" isActive="false"> 7 </Pagination.Item>
				<Pagination.Item href="#" target="_self" isActive="false"> 8 </Pagination.Item>
				<Pagination.Item href="#" target="_self" isActive="false"> 9 </Pagination.Item>
				<Pagination.Next href="#" target="_self"/>
			</Pagination.Content>
		</Pagination>
);

export default App;
```
