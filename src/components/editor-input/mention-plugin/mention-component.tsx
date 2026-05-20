import { NodeViewWrapper } from '@tiptap/react';
import type { NodeViewProps } from '@tiptap/react';
import { useContext } from 'react';
import { Badge } from '@/components';
import { EditorInputContext } from '../editor-input';

const mapSizeToBadgeSize = ( size: string ) => {
	switch ( size ) {
		case 'sm':
			return 'xs';
		case 'lg':
			return 'md';
		default:
			return 'sm';
	}
};

const MentionComponent = ( { node, editor, deleteNode }: NodeViewProps ) => {
	const { size, disabled } = useContext( EditorInputContext );
	const label = node.attrs.label as string;
	const isDisabled = disabled || ! editor.isEditable;

	const removeMention = ( event: React.MouseEvent ) => {
		event.stopPropagation();
		event.preventDefault();
		if ( isDisabled ) {
			return;
		}
		deleteNode();
	};

	return (
		<NodeViewWrapper
			as="span"
			contentEditable={ false }
			style={ { display: 'inline-block', userSelect: 'none' } }
		>
			<Badge
				className="inline-flex"
				type="rounded"
				size={ mapSizeToBadgeSize( size ) }
				label={ label }
				icon={ null }
				closable={ true }
				onClose={ removeMention }
				disabled={ isDisabled }
			/>
		</NodeViewWrapper>
	);
};

export default MentionComponent;
