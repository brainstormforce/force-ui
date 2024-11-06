interface EditorPlaceHolder {
	/** Placeholder content. */
	content: string | React.ReactNode;
}

const EditorPlaceholder = ( { content }: EditorPlaceHolder ) => (
	<div className="pointer-events-none absolute inset-0 flex items-center justify-start text-field-placeholder">
		{ content }
	</div>
);

export default EditorPlaceholder;
