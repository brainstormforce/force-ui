import { DecoratorNode } from 'lexical';
import MentionComponent from './mention-component';

class MentionNode extends DecoratorNode {
    __data

    constructor(data, key) {
        super(key);
        this.__data = data;
    }

    static getType() {
        return 'mention';
    }

    static clone(node) {
        return new MentionNode(node.__data, node.__key);
    }

    static importJSON(serializeNode) {
        const node = $createMentionNode(serializeNode.data);
        return node;
    }

    createDOM() {
        return document.createElement('span');
    }

    updateDOM() {
        return false;
    }

    exportDOM() {
        const element = document.createElement('span');

        return { element };
    }

    exportJSON() {
        return {
            type: MentionNode.getType(),
            data: this.__data,
            version: 1,
        };
    }

    decorate() {
        return <MentionComponent data={this.__data} nodeKey={this.__key} />;
    }
}

export const $createMentionNode = (data = {}) => new MentionNode(data);

export const $isMentionNode = (node) => node instanceof MentionNode;

export default MentionNode;