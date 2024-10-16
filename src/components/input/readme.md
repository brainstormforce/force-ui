# Input

## Description

Easily create input with different styles using this component based on React and styled with Tailwind CSS. It is useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

## Props

### type
- **Type:** `string`
- **Default:** `"text"`
- **Description:** Type of the input field - tel/number/url/email/text/password/file

### value
- **Type:** `string`
- **Default:** `""`
- **Description:** The value of the input field. Not applicable for `type="file"`.

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
- **Description:** Disabled State of the input field
    - `true`
    - `false`

### onChange
- **Type:** `function`
- **Description:** Callback function triggered when the input value changes. For `type="file"`, it returns the selected file(s).

### error
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, applies error styles to the input.

### prefix
- **Type:** `ReactNode`
- **Description:** A prefix icon or element that appears inside the input field.

### suffix
- **Type:** `ReactNode`
- **Description:** A suffix icon or element that appears inside the input field.

### inputProps
- **Type:** `object`
- **Description:** Any additional props will be spread onto the input element. Ex, given below
    - `required`
    - `placeholder`
    - `cols`
    - `rows`

## File Input Behavior
- When `type="file"` is specified:
- The default text "No file chosen" is replaced with the name of the selected file.
- The text color changes when a file is selected.
- The component handles file selection, and the onChange callback returns the selected file(s).

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
    <Input size="lg" value={textval} onChange={((value)=>{console.log(value)})}/>
    <Input disabled={ true } size="md"/>
    <Input type="file" size="md" onChange={handleFileChange} />
  </div>
);

export default App;
```
