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

class OptionItem implements MenuOption {
	data: Record<string, unknown>;
	key: string;
	ref: React.RefObject<HTMLLIElement>;
	setRefElement: ( element: HTMLLIElement ) => void;

	constructor( public initData: Record<string, unknown> ) {
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
