import React from 'react';
import Container from './Container';
import { color as colorsVar, multiButton as multiButtonVars } from '../css-variables';

const MultiButtonControl = ( {
  controlStyle = 'filled',
  width = 'fit-content',
  onClick,
  activeItem,
  items,
  backgroundColor = multiButtonVars.background,
  color = multiButtonVars.color,
  hoverColor = multiButtonVars.hoverColor,
  className = '',
  containerStyle = {},
  itemStyle = {},
  itemActiveStyle = {},
} ) => {
  let containerClass = 'bsf-multi-button-control';

  // If the className prop is passed, add it to the containerClass
  if ( className ) {
    containerClass += ' ' + className;
  }

  let buttonCss = {};

  const buttonItemCss = {
    fontWeight: 500,
    fontSize: multiButtonVars.fontSize,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if ( controlStyle === 'outline' ) {
    buttonCss = {
      border: multiButtonVars.outlineBorder,
      borderRadius: multiButtonVars.outlineBorderRadius,
      overflow: 'hidden',

      '& > div': {
        padding: multiButtonVars.outlinePadding,
        color,
        borderRight: multiButtonVars.outlineBorder,
        ...buttonItemCss,
        ...itemStyle,
        '&:last-child': {
          borderRight: 'none',
        },
        '&.active': {
          backgroundColor: multiButtonVars.outlineActiveBackground,
          ...itemActiveStyle,
        },
      },
    };
  } else {
    buttonCss = {
      padding: multiButtonVars.filledPadding,
      borderRadius: multiButtonVars.filledBorderRadius,
      backgroundColor,

      '& > div': {
        padding: multiButtonVars.filledInnerPadding,
        color,
        backgroundColor: 'transparent',
        borderRadius: multiButtonVars.filledBorderRadiusInner,
        ...buttonItemCss,
        ...itemStyle,
        '&.active': {
          color: hoverColor,
          backgroundColor: colorsVar.background,
          ...itemActiveStyle,
        },
      },
    };
  }

  buttonCss =
    width === 'full-width'
      ? {
          ...buttonCss,
          ...{
            width: '100%',
          },
        }
      : {
          ...buttonCss,
          ...{
            width: 'fit-content',
          },
        };

  buttonCss = {
    ...buttonCss,
    ...containerStyle,
  };

  const buttonItemClass = ( id ) =>
    'bsf-multi-button-control__item' + ( activeItem === id ? ' active' : '' );

  return (
	<Container
		columns={ items.length }
		className={ containerClass }
		style={ buttonCss }
    >
		{ items.map( ( item ) => (
			<div
				key={ item.id }
				className={ buttonItemClass( item.id ) }
				onClick={ () => item.id !== activeItem && onClick( item.id ) }
        >
				{ item.label }
			</div>
      ) ) }
	</Container>
  );
};

export default MultiButtonControl;
