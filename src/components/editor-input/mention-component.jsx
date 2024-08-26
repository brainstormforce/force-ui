import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, $getSelection, $setSelection } from "lexical";
import { X } from "lucide-react";
import { Badge } from "@/components";


const MentionComponent = ({ data, nodeKey }) => {
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

	return (
        <Badge className="inline-flex" type="rounded" size="xs" label={data} icon={null} onClose={removeMention} />
	);
};

export default MentionComponent;
