import { cn } from '@/utilities/functions';
import {
	fontColorClassNames,
	fontSizeClassNames,
	fontWeightClassNames,
	letterSpacingClassNames,
	lineHeightClassNames,
} from './styles';
import {
	forwardRef,
	type ElementType,
	type ReactNode,
	type ComponentType,
	type PropsWithoutRef,
} from 'react';

// Polymorphic component type utilities
export type PropsOf<
	C extends keyof JSX.IntrinsicElements | ComponentType<unknown>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type AsProp<C extends ElementType> = {
	/**
	 * The element to render the text as.
	 *
	 * @default 'p'
	 */
	as?: C;
};

export type ExtendableProps<
	ExtendedProps = object,
	OverrideProps = object
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type InheritableElementProps<
	C extends ElementType,
	Props = object
> = ExtendableProps<PropsOf<C>, Props>;

export type PolymorphicComponentProps<
	C extends ElementType,
	Props = object
> = InheritableElementProps<C, Props & AsProp<C>>;

export type PolymorphicRef<
	C extends ElementType
> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentPropsWithRef<
	C extends ElementType,
	Props = object
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

// Base props for the Text component
export interface TextBaseProps {
	/**
	 * The content of the text.
	 */
	children: ReactNode;
	/**
	 * The font weight of the text.
	 */
	weight?: keyof typeof fontWeightClassNames;
	/**
	 * The font size of the text.
	 */
	size?: keyof typeof fontSizeClassNames;
	/**
	 * The line height of the text.
	 */
	lineHeight?: keyof typeof lineHeightClassNames;
	/**
	 * The letter spacing of the text.
	 */
	letterSpacing?: keyof typeof letterSpacingClassNames;
	/**
	 * The font color of the text.
	 */
	color?: keyof typeof fontColorClassNames;
	/**
	 * Additional class names to apply
	 */
	className?: string;
}

export type TextProps<C extends ElementType = 'p'> = PolymorphicComponentPropsWithRef<
	C,
	TextBaseProps
>;

// Type definition for Text component with proper forwarded ref
export type TextComponent = <C extends ElementType = 'p'>(
	props: TextProps<C>
) => JSX.Element;

// Create component with properly typed forwardRef
const Text = forwardRef( function Text<C extends ElementType = 'p'>(
	{
		as,
		children,
		weight,
		size,
		lineHeight,
		letterSpacing,
		color = 'primary',
		className,
		...rest
	}: PropsWithoutRef<TextProps<C>>,
	ref: PolymorphicRef<C>
) {
	const Component = as || 'p';

	return (
		<Component
			ref={ ref }
			className={ cn(
				'm-0 p-0',
				weight ? fontWeightClassNames[ weight ] : '',
				size ? fontSizeClassNames[ size ] : '',
				lineHeight ? lineHeightClassNames[ lineHeight ] : '',
				letterSpacing ? letterSpacingClassNames[ letterSpacing ] : '',
				color ? fontColorClassNames[ color ] : '',
				className
			) }
			{ ...rest }
		>
			{ children }
		</Component>
	);
} ) as TextComponent;

export { Text };

export default Text;
