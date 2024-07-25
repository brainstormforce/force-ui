import React from 'react';
import { css } from '@emotion/css';
import Container from './Container';
import { description as descriptionVar } from '../css-variables';

const WithDescription = ( { description, gap = descriptionVar.gap, children, style } ) => {
  // Verify description should be null|undefined|false
  if ( ! description ) {
    return children;
  }

  const descriptionGapStyle = css( {
    fontSize: descriptionVar.fontSize,
    fontWeight: 400,
    lineHeight: descriptionVar.lineHeight,
    display: 'block',
    color: descriptionVar.color,
    ...style,
  } );

  return (
	<Container gap={ gap }>
		{ children }
		<span className={ descriptionGapStyle }>{ description }</span>
	</Container>
  );
};

export default WithDescription;
