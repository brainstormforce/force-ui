import * as React from 'react';
import { useRef, useEffect } from 'react';
import { cx, css } from '@emotion/css';
import { button as buttonVar } from '../css-variables';
import Icons from '../utility/icons';
import { css as reactCss, keyframes } from '@emotion/react';

const Button = ( props ) => {
  const { children, onClick, style, size = 'medium', isLoading = false } = props;

  const additionalStyle = style && typeof style === 'object' ? style : {};
  const allUnset = css`
    all: unset;
  `;

  let fontSize;
  let padding;
  let borderRadius;
  switch ( size ) {
    case 'small':
      fontSize = buttonVar.smallFontSize;
      padding = buttonVar.smallPadding;
      borderRadius = buttonVar.smallBorderRadius;
      break;
    case 'medium':
      fontSize = buttonVar.mediumFontSize;
      padding = buttonVar.mediumPadding;
      borderRadius = buttonVar.mediumBorderRadius;
      break;
    case 'large':
      fontSize = buttonVar.largeFontSize;
      padding = buttonVar.largePadding;
      borderRadius = buttonVar.largeBorderRadius;
      break;
    default:
      fontSize = buttonVar.mediumFontSize;
      padding = buttonVar.mediumPadding;
      borderRadius = buttonVar.mediumBorderRadius;
  }

  let baseCss = {
    cursor: 'pointer',
    fontSize,
    padding,
    borderRadius,
    backgroundColor: buttonVar.backgroundColor,
    color: buttonVar.color,
    fontWeight: buttonVar.fontWeight,
    width: 'fit-content',
    display: 'flex',
    '&:hover': {
      backgroundColor: buttonVar.hoverBackgroundColor,
      color: buttonVar.hoverColor,
    },
    ...additionalStyle,
  };

  if ( isLoading ) {
    const spin = keyframes`
      to {
        transform: rotate(360deg);
      }
    `;

    const loadingCss = {
      position: 'absolute',
      backgroundColor: '#ffffff80',
      width: '100%',
      left: 0,
      height: '100%',
      top: 0,
      borderRadius,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& > svg': {
        animation: `${ spin } 1s linear infinite`,
      },
    };

    const loadingKey = '& > span';
    baseCss = {
      ...baseCss,
      position: 'relative',
      cursor: 'progress',
      opacity: 0.7,
      [ loadingKey ]: loadingCss,
    };
  }

  const completeStyle = css( baseCss );

  const childrenContent = isLoading ? (
	<>
		<span>{ Icons.LoaderCircle }</span>
		{ children }
	</>
  ) : (
    children
  );

  return (
	<button onClick={ onClick } className={ cx( allUnset, completeStyle ) }>
		{ childrenContent }
	</button>
  );
};

export default Button;
