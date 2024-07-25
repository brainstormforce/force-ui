import React, { useRef, useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';
import { prefix } from 'force-ui/utility/utils';
import { uploader as uploaderVars } from 'force-ui/css-variables';

const WpFileUploader = ( props ) => {
  const {
    frameButtonTitle,
    frameHeaderTitle,
    uploadButtonText,
    onSelect,
    value,
    onInputChange = () => {},
    render = null,
  } = props;
  const buttonRef = useRef( null );

  const openMediaUploader = () => {
    const mediaUploader = window.wp.media( {
      title: frameHeaderTitle,
      button: {
        text: frameButtonTitle,
      },
      multiple: false,
    } );

    mediaUploader.on( 'select', () => {
      const imageObject = mediaUploader?.state()?.get( 'selection' )?.first()?.toJSON();
      imageObject?.url ? onSelect( imageObject ) : onSelect( null );
    } );

    mediaUploader.open();

    mediaUploader.on( 'close', () => {
      // Additional state updates or actions can be done here
    } );
  };

  useEffect( () => {
    if ( ! window?.wp?.media ) {
      // eslint-disable-next-line no-console
      console.warn( 'wp.media not available please add wp_enqueue_media() in your plugin or theme' );
      return;
    }

    const buttonElement = buttonRef.current;

    if ( buttonElement ) {
      buttonElement.addEventListener( 'click', openMediaUploader );
    }

    return () => {
      if ( buttonElement ) {
        buttonElement.removeEventListener( 'click', openMediaUploader );
      }
    };
  }, [ frameButtonTitle, frameHeaderTitle, onSelect ] );

  if ( window?.wp?.media ) {
    return (
	<p style={ { color: 'red' } }>
		wp.media not available please add wp_enqueue_media() in your plugin or theme
	</p>
    );
  }

  // If the render prop is provided, render the custom component.
  if ( render ) {
    return render( openMediaUploader );
  }

  const containerClass = prefix() + '-file-uploader';

  const containerStyle = css( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 500,
    width: '100%',
    gridGap: '14px',
    '&> input': {
      padding: uploaderVars.inputPadding,
      flex: 1,
      fontSize: uploaderVars.inputFontSize,
      color: uploaderVars.inputColor,
      boxShadow: uploaderVars.inputBoxShadow,
      border: uploaderVars.inputBorder,
      borderRadius: uploaderVars.inputBorderRadius,
      margin: 0,
      lineHeight: 1,
    },
    '&> button': {
      all: 'unset',
      backgroundColor: uploaderVars.buttonBackgroundColor,
      color: uploaderVars.buttonColor,
      borderRadius: uploaderVars.buttonBorderRadius,
      padding: uploaderVars.buttonPadding,
      fontSize: uploaderVars.buttonFontSize,
      lineHeight: uploaderVars.buttonLineHeight,
      cursor: 'pointer',
    },
  } );

  return (
	<div className={ cx( containerClass, containerStyle ) }>
		<input type="text" value={ value } onChange={ onInputChange } />
		<button ref={ buttonRef } aria-label="Upload file">
			{ uploadButtonText }
		</button>
	</div>
  );
};

export default WpFileUploader;
