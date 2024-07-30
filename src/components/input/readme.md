# Input

## Description

Easily create input with different styles using this component based on React and styled with Tailwind CSS. It is useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

## Props

### type
- **Type:** `string`
- **Default:** `"text"`
- **Description:** Type of the input input field - tel/number/url/email/text/password

### value
- **Type:** `string`
- **Default:** `""`
- **Description:** Value of the input input field

### size
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the input field
    - `"sm"`
    - `"md"`
    - `"lg"`

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the input.

### disabled
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Disabled State of the text area
    - `true`
    - `false`

### inputProps
- **Type:** `object`
- **Description:** Any additional props will be spread onto the input element. Ex, given below
    - `required`
    - `placeholder`
    - `cols`
    - `rows`

## Usage

### Basic Example

```jsx
import { Input } from '@bsf/force-ui';

const App = () => (
  <div>
    <Input inputProps={
        {
            required: true,
            placeholder: "Hello There"
        }} size="sm"/>
    <Input size="lg" value={textval} onChange={((e)=>{console.log(e.target.value)})}/>
    <Input disabled={ true } size="md"/>
  </div>
);

export default App;
```

