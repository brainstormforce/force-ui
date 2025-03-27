import { cn } from '@/utilities/functions';
import { fontColorClassNames, fontSizeClassNames, fontWeightClassNames, letterSpacingClassNames, lineHeightClassNames } from './styles';
import { forwardRef } from 'react';

export interface TextProps {
	/**
	 * The content of the text.
	 */
	children: React.ReactNode;
	/**
	 * The element to render the text as.
	 *
	 * @default 'div'
	 */
	as?: React.ElementType;
	/**
	 * The font weight of the text.
	 *
	 * @default 'undefined'
	 */
	fontWeight?: keyof typeof fontWeightClassNames;
	/**
	 * The font size of the text.
	 *
	 * @default 'undefined'
	 */
	fontSize?: keyof typeof fontSizeClassNames;
	/**
	 * The line height of the text.
	 *
	 * @default 'undefined'
	 */
	lineHeight?: keyof typeof lineHeightClassNames;
	/**
	 * The letter spacing of the text.
	 *
	 * @default 'undefined'
	 */
	letterSpacing?: keyof typeof letterSpacingClassNames;
	/**
	 * The font color of the text.
	 *
	 * @default 'undefined'
	 */
	fontColor?: keyof typeof fontColorClassNames;
}

export const Text = forwardRef( <T extends object>( { children, fontWeight, fontSize, lineHeight, letterSpacing, fontColor, as: Component = 'div', ...props }: TextProps & T, ref: React.Ref<HTMLElement> ) => {
	return (
		<Component
			ref={ ref }
			className={ cn(
				fontWeightClassNames[ fontWeight! ] ?? '',
				fontSizeClassNames[ fontSize! ] ?? '',
				lineHeightClassNames[ lineHeight! ] ?? '',
				letterSpacingClassNames[ letterSpacing! ] ?? '',
				fontColorClassNames[ fontColor! ] ?? '',
			) }
			{ ...props }
		>
			{ children }
		</Component>
	);
} );

// Extend component default props type
export default Text as <T extends object>( props: TextProps & T, ref: React.Ref<HTMLElement> ) => React.ReactNode;
