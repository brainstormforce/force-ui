import { DecoratorNode } from 'lexical';
import MentionComponent from './mention-component';

class MentionNode extends DecoratorNode {
	__data;
	__by;
	__size;

	constructor( data, by, size, key ) {
		super( key );
		this.__data = data;
		this.__by = by;
		this.__size = size;
	}

	static getType() {
		return 'mention';
	}

	static clone( node ) {
		return new MentionNode( node.__data, node.__by, node.__size, node.__key );
	}

	static importJSON( serializeNode ) {
		const node = $createMentionNode( serializeNode.data, serializeNode.by, serializeNode.size );
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
		return <MentionComponent data={ this.__data } by={ this.__by } size={ this.__size } nodeKey={ this.__key } />;
	}
}

export const $createMentionNode = ( data, by, size ) => new MentionNode( data, by, size );

export const $isMentionNode = ( node ) => node instanceof MentionNode;

export default MentionNode;
