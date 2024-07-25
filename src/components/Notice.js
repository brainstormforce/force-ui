import React from 'react';
import Container from './Container';
import { ICONS } from '../utility';

const Notice = ( { style = {}, children, className = '' } ) => {
  const svgKey = '& > svg';
  const spanKey = '& > span';
  const anchorKey = '& > a';

  const containerStyle = {
    backgroundColor: '#EFF6FF',
    borderRadius: '6px',
    border: '1px solid #93C5FD',
    boxShadow: '0px 1px 2px 0px #1018280D',
    [ svgKey ]: {
      height: '20px',
      width: '20px',
      color: '#1D4ED8',
    },
    [ spanKey ]: {
      fontFamily: 'Inter',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '1.4',
      color: '#1D4ED8',
      [ anchorKey ]: {
        textDecoration: 'underline',
        fontWeight: 500,
        color: '#1D4ED8',
      },
    },
    ...style,
  };

  return (
	<Container
		gap={ 12 }
		alignItems="center"
		containerType="flex"
		padding={ 12 }
		style={ containerStyle }
		className={ className }
    >
		{ ICONS.CircleAlert }
		<span>{ children }</span>
	</Container>
  );
};

export default Notice;
