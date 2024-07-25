import React from 'react';
import { css } from '@emotion/css';
import { ICONS } from '../utility';
import { Container, Label } from '../components';
import { header as headerVars } from '../css-variables';
import { prefix } from '../utility/utils';

const Header = ( { logo, breadcrumbs, navRightContent, className } ) => {
  let headerCss = {
    backgroundColor: headerVars.backgroundColor,
    borderBottom: headerVars.borderBottom,
    height: headerVars.height,
  };

  let breadCrumbsContent = null;
  if ( breadcrumbs?.length > 0 ) {
    breadCrumbsContent = breadcrumbs.map( ( breadcrumb, index ) => (
	<React.Fragment key={ index }>
		{ ICONS.breadCrumb }
		<span>{ breadcrumb.title }</span>
	</React.Fragment>
    ) );

    const breadcrumbClassName = '& .bsf-ui-header-breadcrumbs';
    const breadcrumbsCss = {
      fontSize: headerVars.breadCrumbsFontSize,
      '& > span': {
        fontWeight: '400',
        fontFamily: 'Inter',
        color: headerVars.breadCrumbColor,
        cursor: 'pointer',
      },
      '& > svg': {
        width: headerVars.breadCrumbSvgSize,
        height: headerVars.breadCrumbSvgSize,
      },
    };

    headerCss = {
      ...headerCss,
      [ breadcrumbClassName ]: css( breadcrumbsCss ),
    };
  }

  const headerLeftContent = (
	<Container
		containerType="flex"
		gap={ headerVars.gap }
		alignItems="center"
		className="bsf-ui-header-left-content"
		justifyContent="flex-start"
    >
		<div className="bsf-ui-header-logo" style={ { display: 'flex' } }>
			{ logo }
		</div>
		<Container
			containerType="flex"
			gap={ headerVars.gap }
			alignItems="center"
			className="bsf-ui-header-breadcrumbs"
      >
			{ breadCrumbsContent }
		</Container>
	</Container>
  );

  const separatorContent = () => <div className="bsf-ui-header-separator" />;

  const separatorClassName = '& .bsf-ui-header-separator';
  const separatorCss = {
    height: headerVars.separatorHeight,
    display: 'block',
    border: headerVars.separatorBorder,
  };

  headerCss = {
    ...headerCss,
    [ separatorClassName ]: css( separatorCss ),
  };

  const labelListContent = ( navRightContent, isParent = false ) => (
	<Container
		containerType="flex"
		gap={ parseFloat( navRightContent.gap ) }
		alignItems="center"
		justifyContent={ isParent ? 'flex-end' : 'flex-start' }
		className={ isParent ? 'bsf-ui-header-right-content' : 'bsf-ui-header-right-content-child' }
    >
		{ navRightContent.items.map( ( item, index ) => {
        if ( item.type === 'label-group' ) {
          return (
	<React.Fragment key={ index }>
		{ labelListContent( item ) }
		{ item.separator && separatorContent() }
	</React.Fragment>
          );
        }
        return <Label key={ index } { ...item } />;
      } ) }
	</Container>
  );

  const wrapperPrefixClass = prefix() + 'admin-header';

  const headerClass = css( headerCss );

  const containerProps = {
    columns: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    className: `${ wrapperPrefixClass } ${ headerClass } ${ className }`,
    style: {
      padding: '0 20px',
    },
  };

  return (
	<Container { ...containerProps }>
		{ headerLeftContent }
		{ labelListContent( navRightContent, true ) }
	</Container>
  );
};

export default Header;
