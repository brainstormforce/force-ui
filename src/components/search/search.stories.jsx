import React, { useRef, useState } from 'react';
import SearchBox from './search.jsx';
import { File, Folder } from 'lucide-react';

export default {
    title: 'Molecules/SearchBox',
    component: SearchBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        dimension: {
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
        open: {
            description: 'State variable to control opening and closing of dropdown',
            table: {
                type: { summary: 'boolean' },
            },
        },
        onOpenChange: {
            description: 'Function to change the open state of dropdown',
            table: {
                type: { summary: 'function' },
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

    // Ref to store the timeout ID
    const searchTimeout = useRef(null);

    // Debounced search function
    const handleSearch = (value) => {
        // Clear previous timeout if a new search is triggered
        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        setLoading(true); // Start showing the loader
        setResults([]); // Clear existing results

        // Set a new timeout for the debounce
        searchTimeout.current = setTimeout(() => {
            const filteredResults = mockResults.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );

            setResults(filteredResults); // Update with filtered results
            setLoading(false); // Stop loader once results are set
        }, 1000); // Adjust debounce delay (e.g., 500ms) as needed
    };


    return (
        <div style={{ width: '400px' }}>
            <SearchBox {...args} open={open} onOpenChange={setOpen}>
                <SearchBox.Input
                    placeholder={args.placeholder}
                    onChange={(value) => {
                        handleSearch(value);
                    }}
                    variant={args.variant}
                    disabled={args.disabled}
                />
                <SearchBox.Content>
                    {loading ? (
                        <SearchBox.Loading />
                    ) : (
                            <>
                                <SearchBox.Results>
                                    <SearchBox.ResultTitle>Search Results</SearchBox.ResultTitle>
                            {results.map((item, index) => (
                                <React.Fragment key={index}>
                                    <SearchBox.ResultItem
                                        icon={item.type === 'file' ? <File size={16} /> : <Folder size={16} />}
                                        onClick={() => { setOpen(false); console.log(item.name) }}
                                        index={index}
                                    >
                                        {item.name}
                                    </SearchBox.ResultItem>
                                </React.Fragment>
                            ))}
                                </SearchBox.Results>
                                <SearchBox.Separator />
                                <SearchBox.Results>
                                    <SearchBox.ResultTitle>Extra Results</SearchBox.ResultTitle>
                                    {results.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <SearchBox.ResultItem
                                                onClick={() => { setOpen(false); console.log(item.name) }}
                                                index={index}
                                            >
                                                {item.name} - (without icon)
                                            </SearchBox.ResultItem>
                                        </React.Fragment>
                                    ))}
                                </SearchBox.Results>
                            </>
                    )}
                </SearchBox.Content>
            </SearchBox>
        </div>
    );
};

export const BasicSearchBox = Template.bind({});
BasicSearchBox.args = {
    dimension: 'sm',
    variant: 'secondary',
    disabled: false,
    placeholder: 'Search...',
};

export const LargeSearchBox = Template.bind({});
LargeSearchBox.args = {
    ...BasicSearchBox.args,
    dimension: 'lg',
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