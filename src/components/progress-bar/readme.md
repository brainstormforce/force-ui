# ProgressBar

## Description

Linear progress bars.

## Props

### progress
- **Type:** `number`
- **Default:** `0`
- **Description:** Progress of the progress bar.
    - `0 - 100`

### speed
- **Type:** `number`
- **Default:** `200`
- **Description:** The speed of the animation in milli seconds.

## Usage

### Basic Example

```jsx
import { ProgressBar } from '@bsf/force-ui';

const App = () => (
    <div>
        <ProgressBar progress={79}/>
        <ProgressBar progress={50} speed={400}/>
    </div>
);

export default App;
```

