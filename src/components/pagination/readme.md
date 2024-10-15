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

### `Tag`
- **Type:** `String or Component`
- **Default:** `'a'`
- **Description:** Specifies the HTML tag to be rendered for the pagination button. By default, it renders an `<a>` tag, but it can be customized to other tags like `<button>`, depending on the context or functionality required. Ensure that you pass the appropriate props (e.g., `href` for an `<a>` tag, `type` for a `<button>` tag) based on the tag you choose. These props will be forwarded to the underlying tag component.

## `Pagination.Previous` Props

### `Icon`
- **Type:** `SVG or Text`
- **Default:** `<ChevronLeft/>`
- **Description:** Icon or text for the Pagination Previous component.

### `Tag`
- **Type:** `String or Component`
- **Default:** `'a'`
- **Description:** Specifies the HTML tag to be rendered for the pagination button. By default, it renders an `<a>` tag, but it can be customized to other tags like `<button>`, depending on the context or functionality required. Ensure that you pass the appropriate props (e.g., `href` for an `<a>` tag, `type` for a `<button>` tag) based on the tag you choose. These props will be forwarded to the underlying tag component.

## `Pagination.Next` Props

### `Icon`
- **Type:** `SVG or Text`
- **Default:** `<ChevronRight/>`
- **Description:** Icon or text for the Pagination Next component.

### `Tag`
- **Type:** `String or Component`
- **Default:** `'a'`
- **Description:** Specifies the HTML tag to be rendered for the pagination button. By default, it renders an `<a>` tag, but it can be customized to other tags like `<button>`, depending on the context or functionality required. Ensure that you pass the appropriate props (e.g., `href` for an `<a>` tag, `type` for a `<button>` tag) based on the tag you choose. These props will be forwarded to the underlying tag component.

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
