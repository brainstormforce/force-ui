# Loader

## Description

Loader is a component that displays a loading state to the user while the app is fetching data or performing some other asynchronous operation. This loading state can take many forms, such as a loading spinner, a loader icon, or even a full-screen loading animation. The main purpose of a loading component is to provide feedback to the user that the app is working on their request and to keep them engaged while they wait.

## Props

### variant
- **Type:** `string`
- **Default:** `"text"`
- **Description:** Type of the loader - Primary/ Secondary
    - `"primary"`
    - `"secondary"`

### size
- **Type:** `string`
- **Default:** `"md"`
- **Description:** Defines the size of the loader
    - `"sm"`
    - `"md"`
    - `"lg"`
    - `"xl"`

### className
- **Type:** `string`
- **Description:** Additional custom classes to be added to the loader.

### icon
- **Type:** `JSX Component`
- **Description:** Custom loader Icon

## Usage

### Basic Example

```jsx
import { Loader } from '@bsf/force-ui';
import { Ellipsis, RefreshCw, LoaderPinwheel, Loader as LCLoader } from 'lucide-react';

const App = () => (
  <div>
    /**
     * Primary Loader
     * /
    <Loader size='sm' />
    <Loader size='md' />
    <Loader size='lg' />
    <Loader size='xl' />

    /**
     * Secondary Loader.
     * /
    <Loader size='sm' variant='secondary' />
    <Loader size='md' variant='secondary' />
    <Loader size='lg' variant='secondary' />
    <Loader size='xl' variant='secondary' />

    /**
     * Custom Icon.
     * /
    <Loader size='sm' icon= { <LCLoader className="animate-spin" /> } />
    <Loader size='md' icon= { <Ellipsis className="animate-pulse" /> } />
    <Loader size='lg' icon= { <RefreshCw className="animate-spin" /> } />
    <Loader size='xl' variant='secondary' icon= { <LoaderPinwheel className="animate-spin" /> } />
  </div>
);

export default App;
```

