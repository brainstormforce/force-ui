import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getNodeByKey } from 'lexical';
import { Badge } from '@/components';

const mapSizeToBadgeSize = ( size ) => {
	switch ( size ) {
		case 'sm':
			return 'xs';
		case 'md':
			return 'sm';
		case 'lg':
			return 'md';
		default:
			return 'sm';
	}
};

const MentionComponent = ( { data, by, size, nodeKey } ) => {
	const [ editor ] = useLexicalComposerContext();

	const removeMention = ( event ) => {
		event.stopPropagation();
		event.preventDefault();

		editor.update( () => {
			const node = $getNodeByKey( nodeKey );
			if ( ! node ) {
				return;
			}
			node.remove();
		} );
	};

	let renderLabel = data;
	if ( typeof data === 'object' ) {
		renderLabel = data[ by ];
	}
	return (
		<Badge
			className="inline-flex"
			type="rounded"
			size={ mapSizeToBadgeSize( size ) }
			label={ renderLabel }
			icon={ null }
			onClose={ removeMention }
		/>
	);
};

export default MentionComponent;
