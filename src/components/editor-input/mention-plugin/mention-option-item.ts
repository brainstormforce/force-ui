import { MenuOption } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { type TOptionItem } from '../editor-input';

class OptionItem extends MenuOption {
	data: TOptionItem;

	constructor(
		initData: TOptionItem,
		by: keyof TOptionItem | string = 'name',
		index?: number
	) {
		const label =
			typeof initData === 'string'
				? initData
				: String( initData?.[ by as keyof TOptionItem ] ?? '' );
		// Each option needs a unique, stable key. Lexical's menu keys both the
		// rendered list items and its internal ref/scroll map by this value, so
		// duplicate keys break keyboard navigation, highlighting and selection.
		// The index disambiguates options that share the same label.
		super( index === undefined ? label : `${ label }-${ index }` );
		this.data = initData;
	}
}

export default OptionItem;
