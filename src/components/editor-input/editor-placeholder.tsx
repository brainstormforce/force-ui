interface EditorPlaceHolder {
	/** Placeholder content. */
	content: string | React.ReactNode;
}

const EditorPlaceholder = ( { content }: EditorPlaceHolder ) => (
	<div
		aria-hidden="true"
		className="editor-placeholder pointer-events-none absolute top-0 left-0 right-0 flex items-center justify-start text-field-placeholder w-full"
	>
		<span className="truncate">{ content }</span>
	</div>
);

export default EditorPlaceholder;
