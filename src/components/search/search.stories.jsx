import React, { useState } from 'react';
import {
    SearchBox,
    SearchBoxInput,
    SearchBoxContent,
    SearchBoxLoading,
    SearchBoxResults,
    SearchBoxResultTitle,
    SearchBoxResultItem,
    SearchBoxSeparator,
} from './search.jsx';
import { File, Folder } from 'lucide-react';

export default {
    title: 'Molecules/SearchBox',
    component: SearchBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            description: 'Defines the size variant of the search box',
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'sm' },
            },
        },
        variant: {
            description: 'Defines the visual style of the search box',
            control: { type: 'select' },
            options: ['primary', 'secondary', 'ghost'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
        },
        disabled: {
            description: 'If true, the search box will be disabled',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
            },
        },
        placeholder: {
            description: 'Placeholder text for the search input',
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
    },
};

const mockResults = [
    { type: 'file', name: 'document.pdf' },
    { type: 'file', name: 'image.jpg' },
    { type: 'folder', name: 'Project Files' },
    { type: 'file', name: 'report.docx' },
    { type: 'folder', name: 'Archive' },
];

const Template = (args) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    const handleSearch = (value) => {
        setLoading(true);
        setTimeout(() => {
            const filteredResults = mockResults.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filteredResults);
            setLoading(false);
        }, 1000);
    };

    return (
        <div style={{ width: '300px' }}>
            <SearchBox {...args} open={open} onOpenChange={setOpen}>
                <SearchBoxInput
                    placeholder={args.placeholder}
                    onChange={(value) => {
                        handleSearch(value);
                    }}
                    variant={args.variant}
                />
                <SearchBoxContent>
                    {loading ? (
                        <SearchBoxLoading />
                    ) : (
                        <SearchBoxResults>
                            <SearchBoxResultTitle>Search Results</SearchBoxResultTitle>
                            {results.map((item, index) => (
                                <React.Fragment key={index}>
                                    <SearchBoxResultItem
                                        icon={item.type === 'file' ? <File size={16} /> : <Folder size={16} />}
                                    >
                                        {item.name}
                                    </SearchBoxResultItem>
                                </React.Fragment>
                            ))}
                        </SearchBoxResults>
                    )}
                </SearchBoxContent>
            </SearchBox>
        </div>
    );
};

export const BasicSearchBox = Template.bind({});
BasicSearchBox.args = {
    size: 'sm',
    variant: 'primary',
    disabled: false,
    placeholder: 'Search...',
};

export const LargeSearchBox = Template.bind({});
LargeSearchBox.args = {
    ...BasicSearchBox.args,
    size: 'lg',
};

export const DisabledSearchBox = Template.bind({});
DisabledSearchBox.args = {
    ...BasicSearchBox.args,
    disabled: true,
};

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
    ...BasicSearchBox.args,
    variant: 'secondary',
};