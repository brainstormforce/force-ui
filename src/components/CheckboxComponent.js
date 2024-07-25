import React from 'react';
import { css, cx } from '@emotion/css';
import Container from './Container';
import { ICONS } from '../utility';
import { checkbox as checkboxVars } from '../css-variables';

const CheckboxWithLabel = ( {
  label,
  checked,
  onChange,
  disabled,
  gap = 8,
  style,
  className = '',
} ) => {
  const handleChange = () => {
    if ( onChange ) {
      onChange( ! checked );
    }
  };

  const checkboxStyle = css( {
    input: {
      display: 'none',
    },
    '&> div': {
      cursor: 'pointer',
      width: checkboxVars.size,
      height: checkboxVars.size,
      borderRadius: checkboxVars.borderRadius,
      boxShadow: checkboxVars.checkBoxBoxShadow,
      border: checkboxVars.border,
    },
    '&.checkbox-checked': {
      '&> div': {
        borderColor: checkboxVars.checkedBorderColor,
        backgroundColor: checkboxVars.checkedBorderColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '> svg': {
          height: checkboxVars.checkMarkSize,
          width: checkboxVars.checkMarkSize,
          color: checkboxVars.checkMarkColor,
        },
      },
    },
    label: {
      lineHeight: 1,
    },
  } );

  return (
	<Container
		{ ...{
        gap,
        containerType: 'flex',
        alignItems: 'center',
        className: cx(
          checkboxStyle,
          {
            disabled,
          },
          checked ? 'checkbox-checked' : '',
          className,
        ),
        style,
      } }
    >
		<input type="checkbox" checked={ checked } disabled={ disabled } />
		<div onClick={ handleChange }>{ checked && ICONS.checkMark }</div>
		<label onClick={ handleChange }>{ label }</label>
	</Container>
  );
};

const Checkbox = ( {
  group,
  onChange,
  gap,
  columns,
  groupStyle,
  checkboxStyle,
  groupClassName = '',
  className = '',
} ) => {
  return (
	<Container
		{ ...{
        columns,
        gap,
        style: groupStyle,
        className: groupClassName,
      } }
    >
		{ group.map( ( item ) => (
			<CheckboxWithLabel
				key={ item.id }
				label={ item.label }
				checked={ item.checked }
				style={ checkboxStyle }
				className={ className }
				onChange={ ( checked ) => {
            if ( onChange ) {
              onChange( checked, item.id );
            }
          } }
        />
      ) ) }
	</Container>
  );
};

export default Checkbox;
