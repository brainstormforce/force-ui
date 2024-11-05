import {
	type ObjectOfStringOrNumber,
	type StringOrNumber,
	type StringOrNumberOrObject,
} from './container-types';

export const getClassNames = (
	valueKeys: StringOrNumber | ObjectOfStringOrNumber,
	classNames: Record<string, Record<string, string>>,
	defaultValueKeys: StringOrNumberOrObject,
	defaultScreenSize: string = 'sm'
) => {
	const classNamesArray = [];

	switch ( typeof valueKeys ) {
		case 'object':
			for ( const [ screenSize, valueKey ] of Object.entries( valueKeys ) ) {
				if ( classNames[ screenSize ] ) {
					classNamesArray.push(
						classNames?.[ screenSize ]?.[ valueKey ] ??
							classNames?.[ screenSize ]?.[
								( defaultValueKeys as ObjectOfStringOrNumber )?.[
									screenSize
								]
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
						( defaultValueKeys as ObjectOfStringOrNumber )?.[
							screenSize
						]
					] ??
					''
			);
			break;
		default:
			if ( valueKeys === undefined ) {
				break;
			}
			classNamesArray.push(
				classNames?.[ defaultScreenSize ]?.[
					defaultValueKeys as StringOrNumber
				] ?? ''
			);
			break;
	}

	return classNamesArray.join( ' ' );
};
