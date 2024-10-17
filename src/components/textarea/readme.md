# Text Area

## Description

Easily create Textarea with different styles using this component based on React and styled with Tailwind CSS. It is useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

## Props

### value
- **Type:** `string`
- **Default:** `""`
- **Description:** Value of the input textarea field

### size
- **Type:** `string`
- **Default:** `"sm"`
- **Description:** Defines the size of the textarea field
    - `"sm"`
    - `"md"`
    - `"lg"`

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the textarea.

### disabled
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Disabled State of the text area
    - `true`
    - `false`

### inputProps
- **Type:** `object`
- **Description:** Any additional props will be spread onto the textarea element. Ex, given below
    - `required`
    - `placeholder`
    - `cols`
    - `rows`

## Usage

### Basic Example

```jsx
import { TextArea } from '@bsf/force-ui';

const App = () => (
  <div>
    <TextArea inputProps={
        {
            required: true,
            placeholder: "Hello There"
        }} size="sm"/>
    <TextArea size="lg" value={textval} onChange={((value)=>{console.log(value)})}/>
    <TextArea disabled={ true } size="md"/>
  </div>
);

export default App;
```

