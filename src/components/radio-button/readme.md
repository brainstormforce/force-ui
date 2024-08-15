# Radio Button

## `RadioButton.Group` Props
- **Description:** Wrapper for the button group.  

### name (optional)
- **type:** `string`
- **description:** The name prop will be used for form.

### value (For controlled component)
- **type:** `boolean`
- **default value:** `undefined`

### defaultValue (For uncontrolled component)
- **type:** `boolean`
- **default value:** `false`

### by (for comparing checked value)
- **type:** `string`
- **default value:** `id`
- **description:** If value used in the component is an object that time for comparing checked value `by` will be used to check object property for the comparison.

### as (optional)
- **type:** `string` or `ReactComponent`
- **default value:** `Fragment`
- **description:** It will be used as a container for button groups. But by default it will not create any `div` or other wrapper since the default value is set to `Fragment`.

###	onChange `(value) => void`
- **type:** `function`
- **description:** Event handler function to listen to the change. 

### className
- **type:** `string`
- **default value:** undefined
- **description:** Used to customize the container when as value is not equal to a `Fragment`.

### style
- **type:** `string`
- **default value:** `simple`
- **description:** Defines the style of the radio buttons. It can be set to `simple` for standard radio buttons or `tile` for button-style radio tiles.

### disabled
- **type:**`boolean`
- **default value:** `false`
- **description:** The `disabled` prop will disable the component.

## `RadioButton.Button` Props

### id (optional)
- **type:** `string`
- **description:** By default it will generate and assign an id.

### label (optional)
- **type:** `object` || `ReactComponent`
- **Object properties/format:** `{heading: 'Label heading', description:** 'Label description'}`
The label also accepts a React component.

### checked (optional)
- **type:** `boolean`
- **default value:** `undefined`
- **description:** For manual comparison.

### size
- **type:** `string`
- **default value:** `md`
- **Available sizes:** `sm` and `md`.

### value
- **type:** `boolean`
- **default value:** `undefined`

### disabled
- **type:**`boolean`
- **default value:** `false`
- **description:** The `disabled` prop will disable the component.

### required (optional)
- **type:** `boolean`
- **default value:** `undefined`
- **description:** For form validation required prop value can be set to true.

## `RadioButton.Button` Props

### id (optional)
- **type:** `string`
- **description:** By default it will generate and assign an id.

### value
- **type:** `boolean`
- **default value:** `undefined`

### size
- **type:** `string`
- **default value:** `md`
- **Available sizes:** `xs`, `sm` and `md`.

### disabled
- **type:**`boolean`
- **default value:** `false`
- **description:** The `disabled` prop will disable the component.

### children
- **Type:** `string` or `ReactNode`
- **Description:** The children prop can be used to pass additional content, such as icons or custom elements, that will be displayed within the button.

### Example:

```
<RadioButton.Group
    name="food"
    defaultValue="food-1"
    onChange={ ( value ) => console.log( value ) }
>
    <RadioButton.Button value="food-1" />
    <RadioButton.Button value="food-2" />
    <RadioButton.Button value="food-3" />
</RadioButton.Group>

<RadioButton.Group
    value={selectedValue}   
    onChange={handleRadioChange}
    style='tile'
>
    <RadioButton.Button value="option1"><Plus /></RadioButton.Button>
    <RadioButton.Button value="option2"><Plus /></RadioButton.Button>
    <RadioButton.Button value="option3"><Plus /></RadioButton.Button>
</RadioButton.Group>


```