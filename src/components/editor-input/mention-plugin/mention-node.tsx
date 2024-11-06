import { DecoratorNode, type LexicalNode } from 'lexical';
import MentionComponent from './mention-component';
import { type TOptionItem } from '../editor-input';
import { type TSizes } from './mention-plugin';

class MentionNode extends DecoratorNode<JSX.Element> {
	__data;
	__by;
	__size;

	constructor(
		data: TOptionItem,
		by: keyof TOptionItem,
		size: TSizes,
		key?: string
	) {
		super( key );
		this.__data = data;
		this.__by = by;
		this.__size = size;
	}

	static getType() {
		return 'mention';
	}

	static clone( node: MentionNode ) {
		return new MentionNode( node.__data, node.__by, node.__size, node.__key );
	}

	static importJSON( serializeNode: Record<string, unknown> ) {
		const node = $createMentionNode(
			serializeNode.data as TOptionItem,
			serializeNode.by as keyof TOptionItem,
			serializeNode.size as TSizes
		);
		return node;
	}

	createDOM() {
		return document.createElement( 'span' );
	}

	updateDOM() {
		return false;
	}

	exportDOM() {
		const element = document.createElement( 'span' );

		return { element };
	}

	exportJSON() {
		return {
			type: MentionNode.getType(),
			data: this.__data,
			by: this.__by,
			size: this.__size,
			version: 1,
		};
	}

	decorate() {
		return (
			<MentionComponent
				data={ this.__data }
				by={ this.__by }
				size={ this.__size }
				nodeKey={ this.__key }
			/>
		);
	}
}

export const $createMentionNode = (
	data: TOptionItem,
	by: keyof TOptionItem,
	size: TSizes
) => new MentionNode( data, by, size );

export const $isMentionNode = ( node: MentionNode | LexicalNode ) =>
	node instanceof MentionNode;

export default MentionNode;
