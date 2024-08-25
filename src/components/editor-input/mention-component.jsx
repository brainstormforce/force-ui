import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, $getSelection, $setSelection } from "lexical";
import { X } from "lucide-react";


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
		<span className="inline-flex items-center gap-1 px-1 py-0.5 bg-slate-300">
			<span>{data.data}</span>
			<span
				className="inline-flex items-center justify-center cursor-pointer"
				onClick={removeMention}
			>
				<X className="size-4" />
			</span>
		</span>
	);
};

export default MentionComponent;
