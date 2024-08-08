import { useState, useCallback, useMemo, forwardRef, isValidElement } from 'react';
import { nanoid } from 'nanoid';
import { cn } from '../../utility/utils';
import { Check, Minus } from 'lucide-react';

const Checkbox = ( { id, label, defaultChecked = false, checked, onChange, value, indeterminate, disabled, size = 'md', ...props }, ref ) => {
	const checkboxId = useMemo( () => id || `checkbox-${ nanoid() }`, [ id ] );
	const isControlled = useMemo( () => typeof checked !== 'undefined', [ checked ] );
	const [ isChecked, setIsChecked ] = useState( defaultChecked || false );
	const color = 'primary';

	const sizeClassNames = {
		sm: {
			checkbox: 'size-4 rounded-sm',
			icon: 'size-3',
		},
		md: {
			checkbox: 'size-5 rounded',
			icon: 'size-4',
		},
	};
	const colorClassNames = {
		primary: {
			checkbox:
				'border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus',
			icon: 'text-white',
		},
	};
	const disabledClassNames = {
		checkbox:
			'disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled',
		icon: 'peer-disabled:text-border-disabled',
	};

	const getValue = useCallback( () => ( isControlled ? checked : isChecked ), [ isControlled, checked, isChecked ] );

	const handleChange = (event) => {
		if (disabled) {
			return;
		}

		const newValue = event.target.checked;
		if (!isControlled) {
			setIsChecked(newValue);
		}

		if (typeof onChange !== 'function') {
			return;
		}
		onChange(newValue);
	};

	const renderLabel = useCallback(() => {
		if (isValidElement(label)) {
			return label;
		}

		if (!label.heading || !label.description) {
			return null;
		}
		return (
			<div className="space-y-1.5">
				<p className="text-text-primary text-base font-medium leading-4 m-0">{ label.heading }</p>
				<p className="text-text-secondary text-sm font-normal leading-5 m-0">{ label.description }</p>
			</div>
		);
	}, [label]);

	return (
		<div className={ cn( 'inline-flex items-center', !! label && 'items-start' ) }>
			<label className={ cn( 'relative flex items-center rounded-full', ! disabled && 'cursor-pointer' ) } htmlFor={ checkboxId }>
				<input ref={ ref } id={ checkboxId } type="checkbox" className={ cn( "peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid", colorClassNames[ color ].checkbox, sizeClassNames[ size ].checkbox, disabled && disabledClassNames.checkbox ) } checked={ getValue() } onChange={ handleChange } disabled={ disabled } { ...props } />
				<span className={ cn( 'pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100', colorClassNames[ color ].icon, disabled && disabledClassNames.icon ) }>{ indeterminate ? <Minus className={ cn( sizeClassNames[ size ]?.icon ) } /> : <Check className={ cn( sizeClassNames[ size ]?.icon ) } /> }</span>
			</label>
			{ !! label && (
				<label className={ cn( 'ml-3', ! disabled && 'cursor-pointer' ) } htmlFor={ checkboxId }>
					{ renderLabel() }
				</label>
			)}
		</div>
	);
};

export default forwardRef(Checkbox);
