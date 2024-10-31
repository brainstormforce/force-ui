export const getClassNames = (
	valueKeys: string | number | Record<string, string | number>,
	classNames: Record<string, Record<string, string>>,
	defaultValueKeys: Record<string, string | number>,
	defaultScreenSize = 'sm'
) => {
	const classNamesArray = [];

	switch ( typeof valueKeys ) {
		case 'object':
			for ( const [ screenSize, valueKey ] of Object.entries( valueKeys ) ) {
				if ( classNames[ screenSize ] ) {
					classNamesArray.push(
						classNames?.[ screenSize ]?.[ valueKey ] ??
							classNames?.[ screenSize ]?.[
								defaultValueKeys?.[ screenSize ]
							] ??
							''
					);
				}
			}
			break;
		case 'string':
		case 'number':
			const screenSize = defaultScreenSize;
			classNamesArray.push(
				classNames?.[ screenSize ]?.[ valueKeys ] ??
					classNames?.[ screenSize ]?.[
						defaultValueKeys?.[ screenSize ]
					] ??
					''
			);
			break;
		default:
			classNamesArray.push(
				classNames?.[ defaultScreenSize ]?.[
					defaultValueKeys[ defaultScreenSize ]
				] ?? ''
			);
			break;
	}

	return classNamesArray.join( ' ' );
};
