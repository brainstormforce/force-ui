import Label from '../../components/label/label.jsx';
import Input from '../../components/input/input.jsx';
import TextArea from '../../components/textarea/textarea.jsx';
import Container from '../../components/container/container.jsx';
import { Info } from 'lucide-react';

export const InputField = {
	render: () => (
		<div style={ { width: '800px' } }>
			<Container direction="column" gap="xs">
				<Label size="md">Label</Label>
				<Input type="text" placeholder="Placeholder" />
				<Label size="xs" variant="help">
					<Info /> Help label with a{ ' ' }
					<a href="https://example.com">link</a>.
				</Label>
			</Container>
		</div>
	),
};

export const TextAreaField = {
	render: () => (
		<div style={ { width: '800px' } }>
			<Container direction="column" gap="xs">
				<Label size="md">Label</Label>
				<TextArea size="md" placeholder="Placeholder" />
				<Label size="xs" variant="help">
					<Info /> Help label with a{ ' ' }
					<a href="https://example.com">link</a>.
				</Label>
			</Container>
		</div>
	),
};

// Badge component story configuration
export const InputFileField = {
	render: () => (
		<div style={ { width: '800px' } }>
			<Container direction="column" gap="xs">
				<Label size="md">Label</Label>
				<Input type="file" />
				<Label size="xs" variant="help">
					<Info /> Help label with a{ ' ' }
					<a href="https://example.com">link</a>.
				</Label>
			</Container>
		</div>
	),
};

// Badge component story configuration
export default {
	title: 'Molecules/Input Field',
	component: InputField,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
};
