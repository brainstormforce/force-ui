import { useCallback, useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
	$getNodeByKey,
	COMMAND_PRIORITY_LOW,
	KEY_ARROW_LEFT_COMMAND,
	KEY_ARROW_RIGHT_COMMAND,
	$isDecoratorNode,
	$isElementNode,
	$isTextNode,
	CommandListener,
} from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { Badge } from '@/components';
import type { OptionItem } from '../editor-input';

const mapSizeToBadgeSize = ( size: string ) => {
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

const MentionComponent = ( {
	data,
	by,
	size,
	nodeKey,
}: {
	data: OptionItem;
	by: keyof OptionItem;
	size: string;
	nodeKey: string;
} ) => {
	const [ editor ] = useLexicalComposerContext();
	const disabled = ! editor.isEditable();

	const removeMention = ( event: React.MouseEvent ) => {
		event.stopPropagation();
		event.preventDefault();

		if ( disabled ) {
			return;
		}

		editor.update( () => {
			const node = $getNodeByKey( nodeKey );
			if ( ! node ) {
				return;
			}
			node.remove();
		} );
	};

	let renderLabel = data as unknown as string;
	if ( typeof data === 'object' ) {
		renderLabel = data[ by ] as string;
	}

	const onArrowLeftPress = useCallback<CommandListener<KeyboardEvent>>(
		( event ) => {
			const node = $getNodeByKey( nodeKey );
			if ( ! node || ! node.isSelected() ) {
				return false;
			}
			let handled = false;
			const nodeToSelect = node.getPreviousSibling();
			if ( $isElementNode( nodeToSelect ) ) {
				nodeToSelect.selectEnd();
				handled = true;
			}
			if ( $isTextNode( nodeToSelect ) ) {
				nodeToSelect.select();
				handled = true;
			}
			if ( $isDecoratorNode( nodeToSelect ) ) {
				nodeToSelect.selectNext();
				handled = true;
			}
			if ( nodeToSelect === null ) {
				node.selectPrevious();
				handled = true;
			}
			if ( handled ) {
				event.preventDefault();
			}
			return handled;
		},
		[ nodeKey ]
	);

	const onArrowRightPress = useCallback<CommandListener<KeyboardEvent>>(
		( event ) => {
			const node = $getNodeByKey( nodeKey );
			if ( ! node || ! node.isSelected() ) {
				return false;
			}
			let handled = false;
			const nodeToSelect = node.getNextSibling();
			if ( $isElementNode( nodeToSelect ) ) {
				nodeToSelect.selectStart();
				handled = true;
			}
			if ( $isTextNode( nodeToSelect ) ) {
				nodeToSelect.select( 0, 0 );
				handled = true;
			}
			if ( $isDecoratorNode( nodeToSelect ) ) {
				nodeToSelect.selectPrevious();
				handled = true;
			}
			if ( nodeToSelect === null ) {
				node.selectNext();
				handled = true;
			}
			if ( handled ) {
				event.preventDefault();
			}
			return handled;
		},
		[ nodeKey ]
	);

	useEffect( () => {
		const unregister = mergeRegister(
			editor.registerCommand(
				KEY_ARROW_LEFT_COMMAND,
				onArrowLeftPress,
				COMMAND_PRIORITY_LOW
			),
			editor.registerCommand(
				KEY_ARROW_RIGHT_COMMAND,
				onArrowRightPress,
				COMMAND_PRIORITY_LOW
			)
		);
		return () => {
			unregister();
		};
	}, [ editor, onArrowLeftPress, onArrowRightPress ] );

	return (
		<Badge
			className="inline-flex mr-0.5"
			type="rounded"
			size={ mapSizeToBadgeSize( size ) }
			label={ renderLabel }
			icon={ null }
			closable={ true }
			onClose={ removeMention }
			disabled={ disabled }
		/>
	);
};

export default MentionComponent;
