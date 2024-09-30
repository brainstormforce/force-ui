import React from 'react';
import SearchBox from './search.jsx';
import { Search, File, Folder, Slash } from 'lucide-react';

export default {
    title: 'Molecules/SearchBox',
    component: SearchBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            name: 'Placeholder',
            description: 'The placeholder text for the search input.',
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Search' },
            },
        },
        variant: {
            name: 'Variant',
            description: 'The style variant of the search box.',
            control: 'select',
            options: ['primary', 'secondary', 'ghost'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'secondary' },
            },
        },
        size: {
            name: 'Size',
            description: 'The size of the search box.',
            control: 'select',
            options: ['sm', 'md', 'lg'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'sm' },
            },
        },
        disabled: {
            name: 'Disabled',
            description: 'Disables the search box input.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        loading: {
            name: 'Loading',
            description: 'Displays the loading state.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        loadingIcon: {
            name: 'Loading Icon',
            description: 'Icon displayed during the loading state.',
            control: 'select',
            options: [<Slash />, 'None'],
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        searchResult: {
            name: 'Search Results',
            description: 'Results shown in the dropdown list.',
            control: 'array',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: [] },
            },
        },
        additionalResult: {
            name: 'Additional Results (Categories)',
            description: 'Category results shown in the dropdown list.',
            control: 'array',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: [] },
            },
        },
        searchResultIcon: {
            name: 'Search Result Icon',
            description: 'Icon displayed next to each search result.',
            control: 'select',
            options: [<File />, 'None'],
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        additionalResultIcon: {
            name: 'Additional Result Icon',
            description: 'Icon displayed next to each category result.',
            control: 'select',
            options: [<Folder />, 'None'],
            table: {
                type: { summary: 'ReactNode' },
            },
        },
    },
};

// Basic SearchBox
export const Basic = {
    args: {
        placeholder: 'Search...',
        variant: 'secondary',
        size: 'sm',
        disabled: false,
        loading: false,
        loadingIcon: <Slash />,
        searchResult: ['Result 1', 'Result 2', 'Result 3'],
        additionalResult: ['Category 1', 'Category 2'],
        searchResultIcon: <File />,
        additionalResultIcon: <Folder />,
    },
};

// Loading State
export const Loading = {
    args: {
        placeholder: 'Search...',
        variant: 'secondary',
        size: 'md',
        disabled: false,
        loading: true,
        loadingIcon: <Slash />,
        searchResult: [],
        additionalResult: [],
    },
};

// Disabled State
export const Disabled = {
    args: {
        placeholder: 'Search...',
        variant: 'secondary',
        size: 'lg',
        disabled: true,
        loading: false,
        searchResult: [],
        additionalResult: [],
    },
};

// SearchBox with Results and Categories
export const WithResultsAndCategories = {
    args: {
        placeholder: 'Search...',
        variant: 'primary',
        size: 'md',
        disabled: false,
        loading: false,
        searchResult: ['App 1', 'App 2', 'App 3'],
        additionalResult: ['Integration 1', 'Integration 2'],
        searchResultIcon: <File />,
        additionalResultIcon: <Folder />,
    },
};
