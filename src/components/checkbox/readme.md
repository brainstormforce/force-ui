# Checkbox

## Props

### id (optional)
- **type:** `string`
- **description:** By default it will generate and assign an id.

### name (optional)
- **type:** `string`

### label (optional)
**type:** `object` || `ReactComponent`
- **Object properties/format:** `{heading: 'Label heading', description:** 'Label description'}`
The label also accepts a React component.

###	defaultChecked (For uncontrolled component)
- **type:** `boolean`
- **default value:** `false`
- **description:** Use this prop when the you want to use the component as uncontrolled component.

###	checked (for controlled component)
- **type:** `boolean`
- **default value:** `undefined`

###	onChange `(value) => void`
- **type:** `function`
- **description:** Event handler function to listen to the change. 

###	value
- **type:** `any`
- **description:** Value that will be used for forms.

###	indeterminate
- **type:** `boolean`
- **default value:** `false`
- **Description:** Used to present the indeterminate state of the checkbox.

### disabled
- **type:**`boolean`
- **default value:** `false`
- **description:** The `disabled` prop will disable the component.

### size
- **type:** `string`
- **default value:** `md`
- **description:** For different sizes.
- **Available sizes:** `sm` and `md`

### required (optional)
- **type:** `boolean`
- **default value:** `undefined`
- **description:** For form validation required prop value can be set to true.

### Example:
```
<Checkbox
    defaultChecked={ true }
    size="sm"
    onChange={ ( value ) => console.log( value ) }
/>
```