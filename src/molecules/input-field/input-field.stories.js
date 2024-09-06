import Label from '../../components/label/label.jsx';
import Input from '../../components/input/input.jsx';
import TextArea from '../../components/textarea/textarea.jsx';
import Container from '../../components/container/container.jsx';
import { Info } from 'lucide-react';

export const InputField = {
	render: () => (
        <div style={{width: '800px'}}>
            <Container direction="column" gap="xs">
                <Label size="md">Label</Label>
                <Input type="text" placeholder="Placeholder" />
                <Label size="xs" variant="help">
                    <Info/> Help label with a <a href="https://example.com">link</a>
                    .
                </Label>
            </Container>
        </div>
    )
};

export const TextAreaField = {
    render: () => (
        <div style={{width: '800px'}}>
            <Container direction="column" gap="xs">
                <Label size="md">Label</Label>
                <TextArea size="md" placeholder="Placeholder"/>
                <Label size="xs" variant="help">
                    <Info/> Help label with a <a href="https://example.com">link</a>
                    .
                </Label>
            </Container>
        </div>
    )
};

// Badge component story configuration
export const InputFileField = {
    render: () => (
        <div style={{width: '800px'}}>
            <Container direction="column" gap="xs">
                <Label size="md">Label</Label>
                <Input type="file" />
                <Label size="xs" variant="help">
                    <Info/> Help label with a <a href="https://example.com">link</a>
                    .
                </Label>
            </Container>
        </div>
    )
};

// Badge component story configuration
export default {
	title: 'Molecules/Input Field',
	component: InputField,
    render: () => (
        <>
            <Label size="md">Input Field</Label>
            <Input type="text" />
        </>
    ),
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	// argTypes: {
	// 	variant: {
	// 		name: 'Variant',
	// 		description: 'Defines the style variant of the badge.',
	// 		control: 'select',
	// 		options: [ 'neutral', 'red', 'yellow', 'green', 'blue', 'inverse' ],
	// 		table: {
	// 			type: { summary: 'string' },
	// 			defaultValue: { summary: 'neutral' },
	// 		},
	// 	},
	// 	size: {
	// 		name: 'Size',
	// 		description: 'Defines the size of the badge.',
	// 		control: 'select',
	// 		options: [ 'xs', 'sm', 'md', 'lg' ],
	// 		table: {
	// 			type: { summary: 'string' },
	// 			defaultValue: { summary: 'md' },
	// 		},
	// 	},
	// 	type: {
	// 		name: 'Type',
	// 		description: 'Defines the type of the badge.',
	// 		control: 'select',
	// 		options: [ 'pill', 'rounded' ],
	// 		table: {
	// 			type: { summary: 'string' },
	// 			defaultValue: { summary: 'pill' },
	// 		},
	// 	},
	// 	disabled: {
	// 		name: 'Disabled',
	// 		description: 'Defines if the badge is disabled.',
	// 		control: 'boolean',
	// 		table: {
	// 			type: { summary: 'boolean' },
	// 			defaultValue: { summary: 'false' },
	// 		},
	// 	},
	// 	closable: {
	// 		name: 'Clasable',
	// 		description: 'Defines if the badge is closable.',
	// 		control: 'boolean',
	// 		table: {
	// 			type: { summary: 'boolean' },
	// 			defaultValue: { summary: 'true' },
	// 		},
	// 	},
	// 	label: { control: 'text', defaultValue: 'Badge' },
	// },
};
