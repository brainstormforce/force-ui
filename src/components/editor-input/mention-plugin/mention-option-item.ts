// class OptionItem {
// 	data;
// 	ref = { current: null };

// 	constructor( data ) {
// 		this.data = data;
// 	}
// }

// export default OptionItem;

import { MenuOption } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import React from 'react';
import { type TOptionItem } from '../editor-input';

class OptionItem implements MenuOption {
	data: TOptionItem;
	key: TOptionItem extends Record<string, unknown> ? keyof TOptionItem : string;
	ref: React.RefObject<HTMLLIElement>;
	setRefElement: ( element: HTMLLIElement ) => void;

	constructor( public initData: TOptionItem ) {
		this.key = '';
		this.data = initData;
		this.ref = { current: null };

		this.setRefElement = ( element: HTMLLIElement ) => {
			( this.ref as React.MutableRefObject<HTMLLIElement> ).current =
				element;
		};
	}
}

export default OptionItem;
