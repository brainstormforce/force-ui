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
	type ComponentPropsWithRef,
	type ReactNode,
} from 'react';

// Base props for the Text component
interface BaseTextProps {
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

// Component props with the "as" prop
export type TextProps<E extends ElementType> = BaseTextProps & {
	/**
	 * The element to render the text as.
	 *
	 * @default 'p'
	 */
	as?: E;
} & Omit<ComponentPropsWithRef<E>, keyof BaseTextProps | 'as'>;

const TextWithoutRef = <
	E extends ElementType,
>(
		{
			children,
			weight,
			size,
			lineHeight,
			letterSpacing,
			color,
			as,
			className,
			...rest
		}: TextProps<E>,
		ref: React.Ref<E>
	) => {
	const Component = as || 'p';

	return (
		<Component
			ref={ ref }
			className={ cn(
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
};

// We use forwardRef and cast to our TextComponent type
const Text = forwardRef(
	TextWithoutRef
) as <E extends ElementType>(
	props: TextProps<E>,
	ref: React.Ref<E>
) => ReturnType<typeof TextWithoutRef>;

export { Text };

export default Text;
