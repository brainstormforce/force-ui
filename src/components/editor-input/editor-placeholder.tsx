interface EditorPlaceHolder {
	/** Placeholder content. */
	content: string | React.ReactNode;
}

const EditorPlaceholder = ({ content }: EditorPlaceHolder) => (
	<div
		aria-hidden="true"
		className="pointer-events-none absolute inset-0 flex items-center justify-start text-field-placeholder w-full"
	>
		<span className="truncate">{content}</span>
	</div>
);

export default EditorPlaceholder;
