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

## `Pagination.Previous` Props

### `Icon`
- **Type:** `SVG or Text`
- **Default:** `<ChevronLeft/>`
- **Description:** Icon or text for the Pagination Previous component.

## `Pagination.Next` Props

### `Icon`
- **Type:** `SVG or Text`
- **Default:** `<ChevronRight/>`
- **Description:** Icon or text for the Pagination Next component.

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
				<Pagination.Previous href="#" icon="<ChevronLeft />" />
				<Pagination.Item href="#" isActive="false">	1 </Pagination.Item>
				<Pagination.Item href="#" isActive="true"> 2 </Pagination.Item>
				<Pagination.Item href="#" isActive="false"> 3 </Pagination.Item>
				<Pagination.Ellipsis />
				<Pagination.Item href="#" isActive="false"> 7 </Pagination.Item>
				<Pagination.Item href="#" isActive="false"> 8 </Pagination.Item>
				<Pagination.Item href="#" isActive="false"> 9 </Pagination.Item>
				<Pagination.Next href="#" icon="<ChevronRight />" />
			</Pagination.Content>
		</Pagination>
);

export default App;
```
