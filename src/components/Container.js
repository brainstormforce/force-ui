import React from 'react';
import { cx, css } from '@emotion/css';

const Container = ( props ) => {
  const {
    containerType = 'grid',
    gap = 0,
    columns,
    padding = 0,
    justifyContent,
    alignItems,
    alignContent,
    justifyItems,
    direction,
    className,
    style,
    children,
    extraProps,
  } = props;

  const additionalStyle = style && typeof style === 'object' ? style : {};

  const svgCss = {
    '& svg': {
      display: 'flex',
    },
  };

  let styleObject = {
    display: containerType,
    gap,
    padding,
    justifyContent,
    alignItems,
    alignContent,
    justifyItems,
    ...svgCss,
    ...additionalStyle,
  };

  if ( props?.gridItemSettings ) {
    props.gridItemSettings.forEach( ( item, index ) => {
      const gridItemStyle = {
        gridColumn: item.columnSpan ? `span ${ item.columnSpan }` : 'auto',
        ...item.style,
      };

      const objectKey = `& > :nth-child(${ index + 1 })`;

      styleObject = {
        ...styleObject,
        [ objectKey ]: gridItemStyle,
      };
    } );
  }

  if ( columns && typeof columns === 'number' && containerType === 'grid' ) {
    styleObject.gridTemplateColumns = `repeat(${ columns }, 1fr)`;
  }

  if ( direction && typeof direction === 'string' && containerType === 'flex' ) {
    styleObject.flexDirection = direction;
  }

  const mainClass = css( styleObject );

  return (
	<>
		<div className={ cx( mainClass, className ) } { ...extraProps }>
			{ children }
		</div>
	</>
  );
};

export default Container;
