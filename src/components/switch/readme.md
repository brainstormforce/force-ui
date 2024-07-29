# Switch
## Props

### id (optional)
- ****type:**** `string`
- **description:** By default it will generate and assign an id.

### name (optional)
- **type:** `string`

### label (optional)
**type:** `object` || `ReactComponent`
- **Object properties/format:** `{heading: 'Label heading,' description: 'Label description'}`
The label also accepts a React component.

### value (For controlled component)
- **type:** `boolean`
- **default value:** `undefined`

### defaultValue (For uncontrolled component)
- **type:** `boolean`
- **default value:** `false`

### onChange (Event handler)
- **type:** `function`

### size
- **type:** `string`
- **default value:** `lg`
- **description:** For different sizes.
- **Available sizes:** `sm` and `lg`

### disabled
- **type:**`boolean`
- **default value:** `false`
- **description:** The `disabled` prop will disable the component.

### required (optional)
- **type:** `boolean`
- **default value:** `undefined`
- **description:** For form validation required prop value can be set to true.

#### Example:

```
<Switch
    defaultValue={ true }
    onChange={ ( value ) => console.log( value ) }
 />
```
