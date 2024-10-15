import EditorInput from './editor-input.jsx';

// Avatar component story configuration
export default {
	title: 'Atoms/EditorInput',
	component: EditorInput,
	tags: [ 'autodocs' ],
	argTypes: {
		by: {
			name: 'By',
			description:
				'The key to be used to display the label of the option in the editor input and in the editor after selecting any mention/tag option.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'name' },
			},
		},
		options: {
			name: 'Options',
			description:
				'Array of options to be displayed in the editor input. Each option should be an object  or string.',
			control: 'array',
			table: {
				type: { summary: 'array' },
				defaultValue: {
					summary: [
						'Red',
						'Orange',
						'Yellow',
						'Green',
						'Cyan',
						'Blue',
						'Purple',
						'Pink',
					],
				},
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Defines if the editor input is disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		autoFocus: {
			name: 'Auto Focus',
			description:
				'Defines if the editor input is focused automatically.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		autoSpaceAfterMention: {
			name: 'autoSpaceAfterMention',
			description:
				'Defines if the editor input should add a space after selecting a mention/tag option.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		onChange: {
			name: 'On Change',
			description:
				'Callback function that is called when the value of the input changes. The function receives the updated value as an argument.',
			control: 'function',
			table: {
				type: { summary: 'object' },
				defaultValue: {
					summary: ( value ) => {
						return value;
					},
				},
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the sizes of the editor input.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		defaultValue: {
			name: 'Default Value',
			description: 'Default value for the editor input field.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
		placeholder: {
			name: 'Placeholder',
			description: 'Placeholder text for the editor input field.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: {
					summary: 'Press @ to view variable suggestions',
				},
			},
		},
		trigger: {
			name: 'Trigger',
			description: 'Trigger text for the editor input field.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '@' },
			},
		},
		className: {
			name: 'Class Name',
			description: 'Custom class name to be added to the editor input.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
		wrapperClassName: {
			name: 'wrapperClassName',
			description:
				'Custom class name to be added to the editor input wrapper.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
	decorators: [
		( Story ) => (
			<div
				className="[&_*]:box-border box-border"
				style={ { maxWidth: '900px', height: '200px' } }
			>
				<Story />
			</div>
		),
	],
};

const options = [
	'Red',
	'Orange',
	'Yellow',
	'Green',
	'Cyan',
	'Blue',
	'Purple',
	'Pink',
];

export const Default = {
	args: {
		size: 'md',
		autoSpaceAfterMention: false,
		autoFocus: false,
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small = {
	args: {
		size: 'sm',
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};

export const Medium = {
	args: {
		size: 'md',
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};

export const Large = {
	args: {
		size: 'lg',
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};
