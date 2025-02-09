# DatePicker Component

## Description

A flexible `DatePicker` component built with React that allows users to select dates in different modes (`single`, `range`, `multiple`) and styles (`normal`, `dualdate`, `presets`). It also supports various presets such as "Today", "Yesterday", and date ranges for weeks and months.

The component is customizable and includes various features like month and year navigation, custom footers, and a preset selection panel.

## Props

### `mode`
- **Type:** `string`
- **Default:** `single`
- **Description:** Determines the selection mode for the date picker.
  - `single`: Select a single date.
  - `range`: Select a date range (start and end dates).
  - `multiple`: Select multiple individual dates.

### `variant`
- **Type:** `string`
- **Default:** `normal`
- **Description:** The display style or variant of the date picker.
  - `normal`: A single date picker.
  - `dualdate`: A date picker that shows two months side by side, ideal for selecting date ranges.
  - `presets`: Shows a preset selection panel for quick date range selection.

### `selectedDates`
- **Type:** `object`
- **Default:** `{ from: null, to: null }`
- **Description:** The currently selected dates. For `range` mode, this will contain `from` and `to` properties.

### `setSelectedDates`
- **Type:** `function`
- **Description:** Function to update the selected dates.

### `showOutsideDays`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If true, days outside the current month will be shown.

### `width`
- **Type:** `string`
- **Description:** Custom width of the date picker.

### `footer`
- **Type:** `node`
- **Description:** Custom footer to display below the date picker. Can be used to add "Cancel" and "Apply" buttons.

## Presets

Several date range presets are included:
- **Today**
- **Yesterday**
- **This Week**
- **Last Week**
- **This Month**
- **Last Month**

When a preset is selected, the `selectedDates` state is updated to the corresponding date range.

## Custom Presets

You can pass custom preset time:
You will need to import date-fns library to use custom presets.
```npm install date-fns```

```jsx
  import { subDays } from 'date-fns';
  const customPresets = [
      { label: 'Next 7 Days', range: { from: new Date(), to: subDays(new Date(), -7) } },
      { label: '30 Days', range: { from: subDays(new Date(), 30), to: new Date() } },
  ];

  const Example = () => {
    return (
      <DatePicker 
          mode='range' 
          variant='presets' 
          presets={customPresets} 
      />
    )
  }

  export default Example;

```

  
## Usage

### Basic Example (Normal Variant)

```jsx
import DatePicker from '@bsf/force-ui';

const App = () => {
  return (
    <DatePicker 
      mode="single"
      variant="normal"
      selectedDates={{ from: new Date(), to: new Date() }}
      setSelectedDates={(dates) => console.log(dates)}
    />
  );
};

export default App;
```

### Example with Presets Variant
```jsx
import DatePicker from '@bsf/force-ui';

const App = () => {
  return (
    <DatePicker 
      mode="range"
      variant="presets"
      selectedDates={{ from: new Date(), to: new Date() }}
      setSelectedDates={(dates) => console.log(dates)}
    />
  );
};

export default App;
```

### Dual Date Variant Example
```jsx
import DatePicker from '@bsf/force-ui';

const App = () => {
  return (
    <DatePicker 
      mode="range"
      variant="dualdate"
      selectedDates={{ from: new Date(), to: new Date() }}
      setSelectedDates={(dates) => console.log(dates)}
    />
  );
};

export default App;
```

### Datepicker with onDateSelect 
This will select the date on click of date.

```jsx
import DatePicker from '@bsf/force-ui';

const Dashboard = () => {
	const handleDateSelect = (selectedDate) => {
		console.log("Selected Date:", selectedDate); // Logs the date immediately upon selection
	};

	return (
		<>
			<PageContentWrapper title="Dashboard">
				<DatePicker
					applyButtonText="Apply"
					cancelButtonText="Cancel"
					selectionType="single"
					showOutsideDays
					variant="normal"
					onDateSelect={handleDateSelect} // Pass the handler here
				/>
			</PageContentWrapper>
		</>
	);
};
```


### Datepicker with Apply and Cancel Buttons
```jsx
import React from 'react';
import DatePicker from '@bsf/force-ui';

const App = () => {
  const handleApply = (selectedDates) => {
    console.log("Applied Dates:", selectedDates); // Logs selected dates upon applying
  };

  const handleCancel = () => {
    console.log("Selection canceled"); // Logs when selection is canceled
  };

  return (
    <DatePicker
      selectionType="range" // Supports other types as well (e.g., "single", "multiple")
      variant="dualdate"
      applyButtonText="Apply Selection"
      cancelButtonText="Clear"
      onApply={handleApply} // Handles the apply action
      onCancel={handleCancel} // Handles the cancel action
      showOutsideDays
    />
  );
};

export default App;
```