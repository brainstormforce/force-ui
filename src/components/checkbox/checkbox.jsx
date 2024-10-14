import {
	useState,
	useCallback,
	useMemo,
	forwardRef,
	isValidElement,
} from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/utilities/functions';
import { Check, Minus } from 'lucide-react';

const CheckboxComponent = (
	{
		id,
		label,
		defaultChecked = false,
		checked,
		onChange,
		value,
		indeterminate,
		disabled,
		size = 'md',
		...props
	},
	ref
) => {
	const checkboxId = useMemo( () => id || `checkbox-${ nanoid() }`, [ id ] );
	const isControlled = useMemo(
		() => typeof checked !== 'undefined',
		[ checked ]
	);
	const [ isChecked, setIsChecked ] = useState( defaultChecked || false );
	const color = 'primary';

	const sizeClassNames = {
		sm: {
			checkbox: 'size-4 rounded gap-1',
			icon: 'size-3',
			text: 'text-sm', // text class for sm
			description: 'text-xs',
			gap: 'gap-0.5',
		},
		md: {
			checkbox: 'size-5 rounded gap-1',
			icon: 'size-4',
			text: 'text-base', // text class for md
			description: 'text-sm',
			gap: 'gap-1',
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

	const getValue = useCallback(
		() => ( isControlled ? checked : isChecked ),
		[ isControlled, checked, isChecked ]
	);

	const handleChange = ( event ) => {
		if ( disabled ) {
			return;
		}

		const newValue = event.target.checked;
		if ( ! isControlled ) {
			setIsChecked( newValue );
		}

		if ( typeof onChange !== 'function' ) {
			return;
		}
		onChange( newValue );
	};

	const renderLabel = useCallback( () => {
		if ( isValidElement( label ) ) {
			return label;
		}

		if ( ! label.heading && ! label.description ) {
			return null;
		}

		return (
			<div className={ sizeClassNames[ size ].gap }>
				{ label.heading && (
					<p
						className={ cn(
							'text-text-primary font-medium leading-4 m-0',
							sizeClassNames[ size ].text,
							sizeClassNames[ size ].gap
						) }
					>
						{ label.heading }
					</p>
				) }
				{ label.description && (
					<p
						className={ cn(
							'text-text-secondary font-normal leading-5 m-0',
							sizeClassNames[ size ].description
						) }
					>
						{ label.description }
					</p>
				) }
			</div>
		);
	}, [ label, size ] );

	return (
		<div
			className={ cn(
				'inline-flex items-center gap-2',
				!! label && 'items-start'
			) }
		>
			<label
				className={ cn(
					'relative flex items-center rounded-full p-0.5',
					! disabled && 'cursor-pointer'
				) }
				htmlFor={ checkboxId }
			>
				<input
					ref={ ref }
					id={ checkboxId }
					type="checkbox"
					className={ cn(
						"peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid",
						colorClassNames[ color ].checkbox,
						sizeClassNames[ size ].checkbox,
						disabled && disabledClassNames.checkbox
					) }
					checked={ getValue() }
					onChange={ handleChange }
					disabled={ disabled }
					{ ...props }
				/>
				<span
					className={ cn(
						'pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100',
						colorClassNames[ color ].icon,
						disabled && disabledClassNames.icon
					) }
				>
					{ indeterminate ? (
						<Minus className={ cn( sizeClassNames[ size ]?.icon ) } />
					) : (
						<Check className={ cn( sizeClassNames[ size ]?.icon ) } />
					) }
				</span>
			</label>
			{ !! label && (
				<label
					className={ cn( ! disabled && 'cursor-pointer p-0.5' ) }
					htmlFor={ checkboxId }
				>
					{ renderLabel() }
				</label>
			) }
		</div>
	);
};

const Checkbox = forwardRef( CheckboxComponent );
Checkbox.displayName = 'Checkbox';

export default Checkbox;
