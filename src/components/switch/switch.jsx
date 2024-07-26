import { useState, useMemo, useCallback } from 'react';
import { nanoid } from 'nanoid'
import { cn } from '../../utility/utils';

const Switch = ({ onChange, value, defaultValue = false, size = 'large', color = 'primary', disabled = false }) => {
  const isControlled = useMemo(() => typeof value !== 'undefined', [value]);
  const switchId = useMemo(() => `switch-${nanoid()}`, []);
	const [checked, setChecked] = useState(defaultValue);

  const getValue = useCallback(() => (isControlled ? value : checked), [isControlled, value, checked]);

	const handleChange = (event) => {
    if (disabled) return;

		const newValue = event.target.checked;
    if (!isControlled) setChecked(newValue);

		if (typeof onChange !== 'function') return;
		onChange(newValue);
	};

  const colorClassNames = {
    primary: {
      input: 'bg-toggle-off hover:bg-toggle-off-hover checked:bg-toggle-on checked:hover:bg-toggle-on-hover focus:ring focus:ring-toggle-on focus:ring-offset-4 border border-solid border-toggle-off-border checked:border-toggle-on-border shadow-toggleContainer focus:outline-none checked:focus:border-toggle-on-border focus:border-toggle-off-border',
      toggleDial: 'bg-toggle-dial-background shadow-toggleDial',
    },
  }

  const sizeClassNames = {
    large: {
      container: 'w-11 h-6',
      toggleDial: 'size-4 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-5 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4',
    },
    small: {
      container: 'w-9 h-5',
      toggleDial: 'size-3 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-4 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4',
    },
  }

  const disabledClassNames = {
    input: 'bg-toggle-off-disabled disabled:border-transparent shadow-none disabled:cursor-not-allowed',
    toggleDial: 'peer-disabled:cursor-not-allowed',
  }

	return (
		<div className="inline-flex items-center">
			<div className={cn(
        "relative inline-block cursor-pointer rounded-full",
        sizeClassNames[size].container,
      )}>
				<input
					id={ switchId }
					type="checkbox"
					className={cn(
            "peer appearance-none absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 h-full w-full  before:content-[''] checked:before:content-[''] m-0",
            colorClassNames[color].input,
            disabled && disabledClassNames.input,
          )}
					checked={getValue()}
					onChange={handleChange}
          disabled={disabled}
				/>
				<label
					htmlFor={ switchId }
					className={cn(
            "bg-white border border-blue-gray-100 rounded-full absolute cursor-pointer shadow-md before:content[''] before:transition-opacity before:opacity-0 hover:before:opacity-10 before:hidden border-none transition-all duration-300",
            sizeClassNames[size].toggleDial,
            colorClassNames[color].toggleDial,
            disabled && disabledClassNames.toggleDial,
          )}
				/>
			</div>
		</div>
	);
};

export default Switch;
