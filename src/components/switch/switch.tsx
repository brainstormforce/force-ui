import {
	useState,
	useMemo,
	useCallback,
	forwardRef,
	isValidElement,
	type ReactNode,
} from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/utilities/functions';

export interface SwitchProps {
	/** Unique identifier for the switch component. */
	id?: string;

	/** Callback function triggered when the switch value changes. */
	onChange?: ( checked: boolean ) => void;

	/** Controlled value of the switch (checked or unchecked). */
	value?: boolean;

	/** Initial value of the switch (checked or unchecked) when used as an uncontrolled component. */
	defaultValue?: boolean;

	/** Defines the size of the switch (e.g., 'sm', 'md', 'lg'). */
	size?: 'sm' | 'md' | 'lg';

	/** Disables the switch if true. */
	disabled?: boolean;

	/** Defines the label for the switch, can include heading and description. */
	label?: {
		/** Heading for the label. */
		heading?: string;

		/** Description for the label. */
		description?: string;
	};

	/** Name attribute for the switch input. */
	name?: string;

	/** Additional CSS classes for the switch component. */
	className?: string;
}

export const SwitchLabel = ( {
	label,
	switchId,
	disabled = false,
	children,
	size,
}: {
	label: SwitchProps['label'];
	switchId: string;
	disabled?: boolean;
	children: ReactNode;
	size: 'sm' | 'md' | 'lg';
} ) => {
	const headingClasses = {
		sm: 'text-sm leading-4 font-medium',
		md: 'text-base leading-5 font-medium',
		lg: 'text-lg leading-6 font-medium',
	};
	const isLabelAComponent = isValidElement( label );
	if ( isLabelAComponent ) {
		return (
			<div
				className={ cn( 'inline-flex items-center gap-3', 'items-start' ) }
			>
				{ children }
				{ label }
			</div>
		);
	}
	const renderLabel = () => {
		const { heading = '', description = '' } = label || {};
		return (
			<div className="space-y-1.5">
				{ heading && (
					<p
						className={ cn(
							'text-text-primary m-0', // text-base font-medium leading-4
							headingClasses[ size ],
							disabled && 'text-text-disabled'
						) }
					>
						{ heading }
					</p>
				) }
				{ description && (
					<p
						className={ cn(
							'text-text-secondary text-sm font-normal leading-5 m-0',
							disabled && 'text-text-disabled'
						) }
					>
						{ description }
					</p>
				) }
			</div>
		);
	};

	const isEmptyLabel = ! label?.heading && ! label?.description;
	const alignmentClass =
		! label?.heading || ! label?.description ? 'items-center' : 'items-start';

	if ( isEmptyLabel ) {
		return children;
	}

	return (
		<div className={ cn( 'inline-flex', alignmentClass, 'gap-3' ) }>
			{ children }
			<label
				htmlFor={ switchId }
				className={ cn( ! disabled && 'cursor-pointer' ) }
			>
				{ renderLabel() }
			</label>
		</div>
	);
};

export const SwitchComponent = (
	{
		id,
		onChange,
		value,
		defaultValue = false,
		size = 'lg',
		disabled = false,
		label = { heading: '', description: '' },
		name,
		className,
		...props
	}: SwitchProps,
	ref: React.ForwardedRef<HTMLInputElement>
) => {
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const switchId = useMemo( () => ( id ? id : `switch-${ nanoid() }` ), [] );
	const [ checked, setChecked ] = useState( defaultValue );
	const color = 'primary';

	const getValue = useCallback(
		() => ( isControlled ? value : checked ),
		[ isControlled, value, checked ]
	);

	const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
		if ( disabled ) {
			return;
		}

		const newValue = event.target.checked;
		if ( ! isControlled ) {
			setChecked( newValue );
		}

		if ( typeof onChange !== 'function' ) {
			return;
		}
		onChange( newValue );
	};

	const colorClassNames = {
		primary: {
			input: 'bg-toggle-off hover:bg-toggle-off-hover checked:bg-toggle-on focus:ring focus:ring-toggle-on focus:ring-offset-4 checked:hover:bg-toggle-on border border-solid border-toggle-off-border checked:border-toggle-on-border shadow-toggleContainer focus:outline-none checked:focus:border-toggle-on-border focus:border-toggle-off-border',
			toggleDial: 'bg-toggle-dial-background shadow-toggleDial',
		},
	};

	const sizeClassNames = {
		lg: {
			container: 'w-11 h-6',
			toggleDial: 'size-4 peer-checked:translate-x-5',
		},
		md: {
			container: 'w-10 h-5',
			toggleDial: 'size-3 peer-checked:translate-x-5',
		},
		sm: {
			container: 'w-8 h-4',
			toggleDial: 'size-2.5 peer-checked:translate-x-3.5',
		},
	};

	const disabledClassNames = {
		input: 'bg-toggle-off-disabled disabled:border-transparent shadow-none disabled:cursor-not-allowed checked:disabled:bg-toggle-on-disabled',
		toggleDial: 'peer-disabled:cursor-not-allowed',
	};

	return (
		<SwitchLabel
			label={ label }
			switchId={ switchId }
			disabled={ disabled }
			size={ size }
		>
			<div
				className={ cn(
					'relative inline-block cursor-pointer rounded-full shrink-0',
					sizeClassNames[ size ].container,
					className
				) }
			>
				<input
					ref={ ref }
					id={ switchId }
					type="checkbox"
					className={ cn(
						"peer appearance-none absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 h-full w-full  before:content-[''] checked:before:content-[''] m-0 checked:[background-image:none]",
						colorClassNames[ color ].input,
						disabled && disabledClassNames.input
					) }
					checked={ getValue() }
					onChange={ handleChange }
					disabled={ disabled }
					name={ name }
					{ ...props }
				/>
				<label
					htmlFor={ switchId }
					className={ cn(
						"bg-white border border-blue-gray-100 rounded-full absolute cursor-pointer shadow-md before:content[''] before:transition-opacity before:opacity-0 hover:before:opacity-10 before:hidden border-none transition-all duration-300 top-2/4 left-1 -translate-y-2/4 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
						sizeClassNames[ size ].toggleDial,
						colorClassNames[ color ].toggleDial,
						disabled && disabledClassNames.toggleDial
					) }
				/>
			</div>
		</SwitchLabel>
	);
};
const Switch = forwardRef( SwitchComponent );
Switch.displayName = 'Switch';

export default Switch;
