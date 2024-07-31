# Avatar Component Documentation

## Description

The `Avatar` component is a visual representation of a user or entity, typically displayed as a small image or icon. Avatars are commonly used in user profiles, messaging apps, social networks, and anywhere user identity needs to be visually indicated.

## Props

### `variant`
- **Type:** `string`
- **Default:** `"primary"`
- **Description:** Defines the style variant of the avatar. Options include:
  - `"white"` 
  - `"gray"`
  - `"primary"`
  - `"primaryLight"`
  - `"dark"`

### `size`
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the size of the avatar. Options include:
  - `"xs"`
  - `"sm"`
  - `"md"`
  - `"lg"`

### `border`
- **Type:** `string`
- **Default:** `"subtle"`
- **Description:** Defines the border of the avatar. Options include:
  - `"none"`
  - `"subtle"`
  - `"ring"`

### `type`
- **Type:** `string`
- **Default:** `"icon"`
- **Description:** Defines the `type` attribute for the avatar component. The avatar can be a user's profile picture, an icon, or initials of the user's name. Common values are `"icon"`, `"image"`, and `"text"`.

### `icon`
- **Type:** `ReactNode`
- **Description:** An icon component to be displayed inside the avatar.

### `text`
- **Type:** `string`
- **Description:** An initials - letter to be displayed inside the avatar.

### `imageUrl`
- **Type:** `string`
- **Description:** URL of image to be used as the background image when `type` prop is set to `"image"`.

### `className`
- **Type:** `string`
- **Description:** Additional custom classes to be added to the button.

## Usage

### Basic Example

```jsx
import Avatar from './Avatar';
import { ReactComponent as ExampleIcon } from './icons/example.svg';
import userImg from './user.png';

const App = () => (
  <div>
    <Avatar size="sm" type="text" text="A" variant="gray" border="ring"/>
    <Avatar size="xs" icon={<ExampleIcon />} variant="primaryLight"/>
    <Avatar size="lg" variant="dark" border="none"/>
    <Avatar type="image" imageUrl={userImg} />
  </div>
);

export default App;
```
## Notes

- Ensure to have Tailwind CSS configured in your project to utilize the styles effectively.
- This component leverages the `twMerge` utility from `tailwind-merge` to combine Tailwind classes efficiently.