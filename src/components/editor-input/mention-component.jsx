import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey } from "lexical";
import { Badge } from "@/components";


const MentionComponent = ({ data, by, nodeKey }) => {
    const [editor] = useLexicalComposerContext();

    const removeMention = (event) => {
        event.stopPropagation();
        event.preventDefault();

        editor.update(() => {

        const node = $getNodeByKey(nodeKey);
        if (! node ) {
            return;
        }
        node.remove();
    } ) }


    let renderLabel = data;
    if ( typeof data === 'object' ) {
        renderLabel = data[by];
    }
	return (
        <Badge className="inline-flex" type="rounded" size="xs" label={renderLabel} icon={null} onClose={removeMention} />
	);
};

export default MentionComponent;
