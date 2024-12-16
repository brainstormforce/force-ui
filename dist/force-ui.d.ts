/// <reference types="react" />

import { AriaAttributes } from 'react';
import { BarProps } from 'recharts';
import { Boundary } from '@floating-ui/react';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import { default as default_2 } from 'react';
import { EditorState } from 'lexical';
import { ElementType } from 'react';
import { FloatingPortalProps } from '@floating-ui/react';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { LexicalEditor } from 'lexical';
import { NamedExoticComponent } from 'react';
import { OffsetOptions } from '@floating-ui/react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

export declare const Accordion: {
    ({ type, defaultValue, autoClose, disabled, children, className, }: AccordionProps): JSX_2.Element;
    displayName: string;
} & {
    Item: {
        ({ isOpen, onToggle, type, disabled, children, className, }: AccordionItemProps): JSX_2.Element;
        displayName: string;
    };
    Trigger: {
        ({ onToggle, isOpen, iconType, disabled, tag, type, children, className, ...props }: AccordionTriggerProps): JSX_2.Element;
        displayName: string;
    };
    Content: {
        ({ isOpen, disabled, type, children, className, }: AccordionContentProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface AccordionContentProps extends CommonProps_4 {
    /** Determines if the content is open */
    isOpen?: boolean;
    /** Accordion type (same as parent) */
    type?: 'simple' | 'separator' | 'boxed';
}

/**
 * Props for an AccordionItem component.
 */
declare interface AccordionItemProps extends CommonProps_4 {
    /** Determines if the item is open */
    isOpen?: boolean;
    /** Callback to toggle the item's state */
    onToggle?: () => void;
    /** Accordion type (same as parent) */
    type?: 'simple' | 'separator' | 'boxed';
    /** The value associated with the accordion item */
    value?: string;
}

declare interface AccordionProps extends CommonProps_4 {
    /** Type of accordion: 'simple', 'separator', or 'boxed' */
    type?: 'simple' | 'separator' | 'boxed';
    /** Initial active item(s) */
    defaultValue?: string | string[];
    /** Automatically close other items when one is opened */
    autoClose?: boolean;
}

declare interface AccordionTriggerProps extends CommonProps_4 {
    /** Callback for toggling item state */
    onToggle?: () => void;
    /** Indicates if the item is open */
    isOpen?: boolean;
    /** Type of icon to display */
    iconType?: 'arrow' | 'plus-minus';
    /** Element to render trigger as */
    tag?: ElementType;
    /** Accordion type (same as parent) */
    type?: 'simple' | 'separator' | 'boxed';
}

declare interface AdditionalProps {
    /** Additional props */
    [key: string]: unknown;
}

export declare const Alert: ({ design, theme, variant, className, title, content, icon, onClose, action, }: AlertProps) => JSX.Element;

declare interface AlertProps {
    /** Defines the style variant of the alert. */
    variant?: 'neutral' | 'info' | 'warning' | 'error' | 'success';
    /** Defines the theme of the alert. */
    theme?: 'light' | 'dark';
    /** Defines the design of the alert. */
    design?: 'inline' | 'stack';
    /** Defines the title of the alert. */
    title?: React.ReactNode;
    /** Defines the content of the alert. */
    content?: React.ReactNode;
    /** Defines the extra classes. */
    className?: string;
    /** Callback function for close event. */
    onClose?: () => void;
    /** Custom Icon for the alert. */
    icon?: React.ReactElement | null;
    /** Defines the action of the alert. */
    action?: {
        label: string;
        onClick: (close: () => void) => void;
        type: 'link' | 'button';
    };
}

export declare const AreaChart: ({ data, dataKeys, colors, variant, showXAxis, showYAxis, showTooltip, tooltipIndicator, tooltipLabelKey, showLegend, showCartesianGrid, tickFormatter, xAxisDataKey, yAxisDataKey, xAxisFontSize, xAxisFontColor, chartWidth, chartHeight, }: AreaChartProps) => JSX_2.Element;

declare interface AreaChartProps {
    /** An array of objects representing the source data for the chart. */
    data: DataItem_4[];
    /** An array of strings representing the keys to access data in each data object. Used for identifying different data series. */
    dataKeys: string[];
    /** An array of color strings that determine the colors for each data series in the chart. */
    colors?: Color_3[];
    /** Defines the variant of Area Chart. */
    variant?: 'solid' | 'gradient';
    /** Whether to render the `<XAxis />` component for the x-axis. */
    showXAxis?: boolean;
    /** Whether to render the `<XAxis />` component for the y-axis. */
    showYAxis?: boolean;
    /** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
    showTooltip?: boolean;
    /** The tooltip indicator. It can be `dot`, `line` or `dashed`. */
    tooltipIndicator?: 'dot' | 'line' | 'dashed';
    /** An array of objects representing the source data for the chart. */
    tooltipLabelKey?: string;
    /** Whether to render the `<Legend />` component to identify data series. */
    showLegend?: boolean;
    /** Whether to display the `<CartesianGrid />`, adding horizontal and vertical grid lines. */
    showCartesianGrid?: boolean;
    /** A function used to format the ticks on the axes, e.g., for formatting dates or numbers. */
    tickFormatter?: (value: string) => string;
    /** The key in the data objects representing values for the x-axis. This is used to access the x-axis values from each data entry. */
    xAxisDataKey?: string;
    /** The key in the data objects representing values for the y-axis. This is used to access the y-axis values from each data entry. */
    yAxisDataKey?: string;
    /** Font size for the labels on the x-axis. */
    xAxisFontSize?: 'sm' | 'md' | 'lg';
    /** Font color for the labels on the x-axis. */
    xAxisFontColor?: string;
    /** Width of the chart container. */
    chartWidth?: number;
    /** Height of the chart container. */
    chartHeight?: number;
}

export declare const Avatar: default_2.ForwardRefExoticComponent<{
    /** Defines the style variant of the avatar. */
    variant?: "primary" | "dark" | "gray" | "white" | "primary-light" | undefined;
    /** Defines the size of the avatar. */
    size?: "xs" | "sm" | "md" | "lg" | "xxs" | undefined;
    /** Defines the border of the avatar. */
    border?: "none" | "subtle" | "ring" | undefined;
    /** The URL of the Avatar image */
    url?: string | undefined;
    /** Defines the children of the avatar. */
    children?: ReactNode;
    /** Defines the extra classes */
    className?: string | undefined;
    /** The URL of the Avatar image. */
    src?: string | undefined;
    /** Alt text for the avatar image. */
    alt?: string | undefined;
} & Pick<default_2.HTMLAttributes<HTMLImageElement>, "title"> & default_2.RefAttributes<HTMLImageElement>>;

export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>>;

declare interface BadgeProps {
    /**
     * Defines the Label of the badge.
     */
    label?: string;
    /**
     * Defines the size of the badge.
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    /**
     * Defines the extra classes
     */
    className?: string;
    /**
     * Defines the type of the badge.
     */
    type?: 'pill' | 'rounded';
    /**
     * Defines the style variant of the badge.
     */
    variant?: 'neutral' | 'red' | 'yellow' | 'green' | 'blue' | 'inverse';
    /**
     * Custom Icon for the badge.
     */
    icon?: ReactNode;
    /**
     * Defines if the badge is disabled.
     */
    disabled?: boolean;
    /**
     * Callback function for close event
     */
    onClose?: (event: React.MouseEvent) => void;
    /**
     * Defines if the badge is closable.
     */
    closable?: boolean;
    /**
     * Callback function for mouse down event.
     */
    onMouseDown?: () => void;
}

export declare const BarChart: ({ data, dataKeys, colors, layout, stacked, showXAxis, showYAxis, showTooltip, tooltipIndicator, tooltipLabelKey, showLegend, showCartesianGrid, tickFormatter, xAxisDataKey, yAxisDataKey, xAxisFontSize, xAxisFontColor, yAxisFontColor, chartWidth, chartHeight, borderRadius, xAxisProps, yAxisProps, tooltipProps, activeBar, }: BarChartProps) => JSX_2.Element;

declare interface BarChartProps {
    /** An array of objects representing the source data for the chart. */
    data: DataItem[];
    /** An array of strings representing the keys to access data in each data object. Used for identifying different data series. */
    dataKeys: string[];
    /** An array of color strings that determine the colors for each data series in the chart. */
    colors?: Color[];
    /** Defines the layout of Bar Chart. if you want to check how layout `vertical` works, then you need to clear the xAxisDataKey value and set showCartesianGrid to false. */
    layout?: 'horizontal' | 'vertical';
    /** Defines are the chart bars are stacked. */
    stacked?: boolean;
    /** Whether to render the `<XAxis />` component for the x-axis. */
    showXAxis?: boolean;
    /** Whether to render the `<YAxis />` component for the y-axis. */
    showYAxis?: boolean;
    /** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
    showTooltip?: boolean;
    /** The tooltip indicator. It can be `dot`, `line` or `dashed`. */
    tooltipIndicator?: 'dot' | 'line' | 'dashed';
    /** Present tooltip lable key. E.g. for this data element: `{ month: 'January', desktop: 186, mobile: 80 }` if set lableKye to 'month' the tooltip will display the month name (like 'January'). */
    tooltipLabelKey?: string;
    /** Whether to render the `<Legend />` component to identify data series. */
    showLegend?: boolean;
    /** Whether to display the `<CartesianGrid />`, adding horizontal and vertical grid lines. */
    showCartesianGrid?: boolean;
    /** A function used to format the ticks on the axes, e.g., ```const monthFormatter = ( value: string ) => value.slice( 0, 3 );``` */
    tickFormatter?: (value: string) => string;
    /** The key in the data objects representing values for the x-axis. This is used to access the x-axis values from each data entry. */
    xAxisDataKey?: string;
    /** The key in the data objects representing values for the y-axis. This is used to access the y-axis values from each data entry. */
    yAxisDataKey?: string;
    /** Font size for the labels on the x-axis. */
    xAxisFontSize?: 'sm' | 'md' | 'lg';
    /** Font color for the labels on the x-axis. */
    xAxisFontColor?: string;
    /** Font color for the labels on the y-axis. */
    yAxisFontColor?: string;
    /** Width of the chart container. */
    chartWidth?: number;
    /** Height of the chart container. */
    chartHeight?: number;
    /** Border radius of chart bar. */
    borderRadius?: number;
    /**
     * xAxis related props.
     *
     * @see https://recharts.org/en-US/api/XAxis
     */
    xAxisProps?: Record<string, unknown>;
    /**
     * yAxis related props.
     *
     * @see https://recharts.org/en-US/api/YAxis
     */
    yAxisProps?: Record<string, unknown>;
    /**
     * Tooltip related props.
     *
     * @see https://recharts.org/en-US/api/Tooltip
     */
    tooltipProps?: Record<string, unknown>;
    /**
     * Active bar index.
     *
     * @see https://recharts.org/en-US/api/Bar#activeBar
     */
    activeBar?: BarProps['activeBar'];
}

declare interface BaseMenuProps {
    /** Additional CSS classes for the component. */
    className?: string;
}

declare interface BaseSearchBoxProps {
    /** Additional class names for styling. */
    className?: string;
    /** Size of the SearchBox. */
    size?: 'sm' | 'md' | 'lg';
    /** Whether the dropdown is open. */
    open?: boolean;
    /** Callback when dropdown state changes. */
    onOpenChange?: (open: boolean) => void;
    /** Whether to show loading state. */
    loading?: boolean;
    /** Child components to be rendered. */
    children?: ReactNode;
}

/**
 * Interface for base table props.
 */
declare interface BaseTableProps extends TableCommonProps, Omit<default_2.HTMLAttributes<HTMLTableElement>, 'className' | 'children'> {
    /**
     * Child components to render within the table.
     *
     * @default undefined
     */
    children?: ReactNode;
    /**
     * Whether to show checkboxes for row selection.
     */
    checkboxSelection?: boolean;
}

export declare const Breadcrumb: {
    ({ children, size }: BreadcrumbProps): JSX_2.Element;
    displayName: string;
    List: {
        ({ children }: BreadcrumbCommonProps): JSX_2.Element;
        displayName: string;
    };
    Item: {
        ({ children }: BreadcrumbCommonProps): JSX_2.Element;
        displayName: string;
    };
    Link: {
        ({ href, children, className, as: AsElement, ...props }: BreadcrumbLinkProps): JSX_2.Element;
        displayName: string;
    };
    Separator: {
        ({ type }: BreadcrumbSeparatorProps): JSX_2.Element;
        displayName: string;
    };
    Ellipsis: {
        (): JSX_2.Element;
        displayName: string;
    };
    Page: {
        ({ children }: BreadcrumbCommonProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface BreadcrumbCommonProps {
    /** Defines the children of the breadcrumb. */
    children: ReactNode;
}

declare interface BreadcrumbLinkProps extends BreadcrumbCommonProps {
    /** Defines the href of the link. */
    href: string;
    /** Defines the class name of the link. */
    className?: string;
    /** Defines the element type of the link. */
    as?: ElementType;
}

declare interface BreadcrumbProps extends BreadcrumbCommonProps {
    /** Defines the size of the breadcrumb. */
    size?: 'sm' | 'md';
}

declare interface BreadcrumbSeparatorProps {
    /**
     * Defines the type of separator.
     *
     * Available options:
     * - arrow
     * - slash
     */
    type: 'arrow' | 'slash';
}

export declare const Button: default_2.FunctionComponent<ButtonProps>;

export declare const ButtonGroup: {
    Group: ({ children, activeItem, onChange, className, size, iconPosition, }: ButtonGroupProps) => JSX_2.Element;
    Button: default_2.ForwardRefExoticComponent<ButtonProps_2 & default_2.RefAttributes<HTMLButtonElement>>;
};

/** Props for the ButtonGroup component. */
declare interface ButtonGroupProps extends CommonProps {
    /** Child elements, typically Button components. */
    children: ReactNode;
    /** Active item slug in the group. */
    activeItem?: string | null;
    /** Callback when the active item changes. */
    onChange?: (value: ButtonValue) => void;
    /** Size of the buttons in the group. */
    size?: 'xs' | 'sm' | 'md';
    /** Position of the icon inside the button. */
    iconPosition?: 'left' | 'right';
}

declare interface ButtonProps {
    /**
     * Defines the style variant of the button.
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    /**
     * Defines the size of the button.
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * Defines the type of the button.
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Defines the tag of the button.
     */
    tag?: ElementType;
    /**
     * The class name of the button
     */
    className?: string;
    /**
     * The children of the button
     */
    children?: ReactNode;
    /**
     * Defines if the button is disabled.
     */
    disabled?: boolean;
    /**
     * Defines if the button is destructive.
     */
    destructive?: boolean;
    /**
     * Custom Icon for the button.
     */
    icon?: ReactNode;
    /**
     * Defines the position of the icon.
     */
    iconPosition?: 'left' | 'right';
    /**
     * Defines if the button is loading.
     */
    loading?: boolean;
    /** On click event. */
    onClick?: (event: default_2.MouseEvent<HTMLElement>) => void;
}

/** Props for the Button component. */
declare interface ButtonProps_2 extends CommonProps {
    /** Unique slug identifying the button. */
    slug: string;
    /** Text content of the button. */
    text: string;
    /** Icon displayed inside the button. */
    icon?: ReactElement;
    /** Marks the button as disabled. */
    disabled?: boolean;
    /** Indicates if the button is the first child in the group. */
    isFirstChild?: boolean;
    /** Indicates if the button is the last child in the group. */
    isLastChild?: boolean;
}

/** Type for the value passed to the onChange callback. */
declare interface ButtonValue {
    event: default_2.MouseEvent<HTMLButtonElement>;
    value: {
        slug: string;
        text: string;
    };
}

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

declare interface CheckboxProps {
    /** Defines the content associated with the checkbox. */
    label?: {
        heading?: string;
        description?: string;
    } | undefined;
    /** ID of the checkbox input. */
    id?: string;
    /** Default checked state (uncontrolled). */
    defaultChecked?: boolean;
    /** Controlled checked state. */
    checked?: boolean;
    /** Change event handler. */
    onChange?: (checked: boolean) => void;
    /** If true, renders indeterminate state. */
    indeterminate?: boolean;
    /** If true, disables the checkbox. */
    disabled?: boolean;
    /** Size of the checkbox (sm or md). */
    size?: 'sm' | 'md';
    /** Custom className for the checkbox. */
    className?: string;
}

declare interface Color {
    fill: string;
}

declare interface Color_2 {
    stroke: string;
}

declare interface Color_3 {
    stroke: string;
    fill: string;
}

/** Defines the common props shared by components. */
declare interface CommonProps {
    /** Additional class names for styling. */
    className?: string;
}

declare interface CommonProps_2 {
    /** Additional class name. */
    className?: string;
    /** Additional inline styles. */
    style?: React.CSSProperties;
}

declare interface CommonProps_3 {
    /** Additional class names. */
    className?: string;
    /** Additional props. */
    [key: string]: unknown;
}

declare interface CommonProps_4 {
    /** Custom class names for additional styling */
    className?: string;
    /** Disables the component */
    disabled?: boolean;
    /** Children components */
    children: ReactNode;
}

export declare const Container: {
    ({ containerType, gap, gapX, gapY, direction, justify, align, wrap, cols, className, children, ...extraProps }: FlexContainerProps & GridContainerProps): JSX_2.Element;
    Item: {
        ({ grow, shrink, order, alignSelf, justifySelf, className, children, ...props }: FlexItemProps & GridItemProps): JSX_2.Element;
        displayName: string;
    };
    displayName: string;
};

declare interface ContainerCommonProps extends ContainerCoreCommonProps {
    /**
     * Defines the number of columns (if using a grid container).
     *
     * For responsive columns, use an object with screen sizes as keys and column values as values.
     * Example: `{ sm: 1, md: 2, lg: 3 }`
     */
    cols?: TCols;
    /**
     * Gap between container items. This will apply gap in both horizontal and vertical directions.
     *
     * For responsive gap, use an object with screen sizes as keys and gap values as values.
     * Example: `{ sm: 'sm', md: 'md', lg: 'lg' }`
     */
    gap?: TGap;
    /**
     * Horizontal gap between container items.  Use when need to apply gap only in horizontal direction.
     *
     * For responsive horizontal gap, use an object with screen sizes as keys and gap values as values.
     * Example: `{ sm: 'sm', md: 'md', lg: 'lg' }`
     */
    gapX?: TGap;
    /**
     * Vertical gap between container items. Use when need to apply gap only in vertical direction.
     *
     * For responsive vertical gap, use an object with screen sizes as keys and gap values as values.
     * Example: `{ sm: 'sm', md: 'md', lg: 'lg' }`
     */
    gapY?: TGap;
    /**
     * Alignment of container items along the cross axis.
     *
     * For responsive alignment, use an object with screen sizes as keys and alignment values as values.
     * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
     */
    align?: TAlign;
    /**
     * Justification of container items along the main axis.
     *
     * For responsive justification, use an object with screen sizes as keys and justification values as values.
     * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
     */
    justify?: TJustify;
}

declare interface ContainerCoreCommonProps {
    /** Defines any additional CSS classes for the container. */
    className?: string;
    /** Defines the children of the container. */
    children?: ReactNode;
}

declare interface DataItem {
    [key: string]: number | string;
}

declare interface DataItem_2 {
    [key: string]: number | string;
}

declare interface DataItem_3 {
    [key: string]: number | string;
}

declare interface DataItem_4 {
    [key: string]: number | string;
}

export declare const DatePicker: ({ selectionType, variant, presets: customPresets, onCancel, onApply, onDateSelect, applyButtonText, cancelButtonText, showOutsideDays, isFooter, ...props }: DatePickerProps) => JSX_2.Element | undefined;

declare interface DatePickerProps {
    /** Defines the selection selectionType of the date picker: single, range, or multiple dates. */
    selectionType?: 'single' | 'range' | 'multiple';
    /** Defines the variant of the date picker: normal, dualdate, or presets. */
    variant?: 'normal' | 'dualdate' | 'presets';
    /** An array of custom presets. */
    presets?: {
        label: string;
        range: {
            from: Date;
            to: Date;
        };
    }[];
    /** Callback function to be executed when the cancel button is clicked. */
    onCancel?: () => void;
    /** Callback function to be executed when the apply button is clicked. */
    onApply?: (selectedDates: Date | {
        from: Date;
        to: Date;
    } | Date[]) => void;
    /** Callback function to be executed when a date is selected. */
    onDateSelect?: (date: Date | Date[] | TDateRange | null) => void;
    /** Text displayed on the Apply button. */
    applyButtonText?: string;
    /** Text displayed on the Cancel button. */
    cancelButtonText?: string;
    /** Show or hide days outside of the current month. */
    showOutsideDays?: boolean;
    /** Show or hide the footer. */
    isFooter?: boolean;
}

export declare const Dialog: {
    ({ open, setOpen, children, trigger, className, exitOnClickOutside, exitOnEsc, design, scrollLock, }: DialogProps): JSX.Element;
    displayName: string;
    Panel: {
        ({ children, className, }: DialogPanelProps): JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children, as: Tag, className, ...props }: DialogTitleProp): JSX.Element;
        displayName: string;
    };
    Description: {
        ({ children, as: Tag, className, ...props }: DialogDescriptionProp): JSX.Element;
        displayName: string;
    };
    CloseButton: {
        ({ children, as: Tag, ...props }: DialogCloseButtonProps): JSX.Element | ReactNode;
        displayName: string;
    };
    Header: {
        ({ children, className, ...props }: DialogHeaderProps): JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children, className, ...props }: DialogBodyProps): JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children, className, }: DialogFooterProps): JSX.Element;
        displayName: string;
    };
    Backdrop: {
        ({ className, ...props }: CommonProps_2): JSX.Element | null;
        displayName: string;
    };
};

declare interface DialogBodyProps extends CommonProps_2 {
    /** Children of the dialog body. */
    children: ReactNode;
}

declare interface DialogCloseButtonProps extends CommonProps_2 {
    /** Children of the dialog close button. */
    children?: ReactNode;
    /** Additional class name for the dialog close button. */
    as?: ElementType;
    /** Additional class name for the dialog close button. */
    className?: string;
    /** Additional props based on the as value. */
    [key: string]: unknown;
}

declare interface DialogDescriptionProp extends CommonProps_2 {
    /** Children of the dialog description. */
    children: ReactNode;
    /** Additional class name for the dialog description. */
    as?: ElementType;
}

declare interface DialogFooterProps extends CommonProps_2 {
    /** Children of the dialog footer. */
    children?: ReactNode | ((props: {
        close: () => void;
    }) => ReactNode);
}

declare interface DialogHeaderProps extends CommonProps_2 {
    /** Children of the dialog header. */
    children: ReactNode;
}

declare interface DialogPanelProps extends CommonProps_2 {
    /** Children of the dialog panel. */
    children: ReactNode | ((param: {
        close: () => void;
    }) => ReactNode);
}

declare interface DialogProps extends CommonProps_2 {
    /** Control the dialog open state. If not provided, the dialog will be controlled internally. */
    open?: boolean;
    /** Control the dialog open state. If not provided, the dialog will be controlled internally. */
    setOpen?: (open: boolean) => void;
    /** Children of the dialog. */
    children: ReactNode;
    /** Trigger element for the dialog. */
    trigger?: ReactNode | ((props: {
        onClick: () => void;
    }) => React.ReactElement);
    /** Close the dialog on clicking outside the dialog. */
    exitOnClickOutside?: boolean;
    /** Close the dialog on pressing the escape key. */
    exitOnEsc?: boolean;
    /** Design of the dialog. */
    design?: 'simple' | 'footer-divided';
    /** Lock the scroll when the dialog is open. */
    scrollLock?: boolean;
}

declare interface DialogTitleProp extends CommonProps_2 {
    /** Children of the dialog title. */
    children: ReactNode;
    /** Additional class name for the dialog title. */
    as?: ElementType;
}

export declare const Drawer: {
    ({ open, setOpen, children, trigger, className, exitOnClickOutside, exitOnEsc, design, position, transitionDuration, scrollLock, }: DrawerProps): JSX_2.Element;
    displayName: string;
    Panel: {
        ({ children, className }: DrawerPanelProps): JSX_2.Element;
        displayName: string;
    };
    Header: {
        ({ children, className, ...props }: DrawerHeaderProps): JSX_2.Element;
        displayName: string;
    };
    Title: {
        ({ children, as: Tag, className, ...props }: DrawerTitleProps): JSX_2.Element;
        displayName: string;
    };
    Description: {
        ({ children, as: Tag, className, ...props }: DrawerDescriptionProps): JSX_2.Element;
        displayName: string;
    };
    Body: {
        ({ children, className, ...props }: DrawerBodyProps): JSX_2.Element;
        displayName: string;
    };
    CloseButton: {
        ({ children, as: Tag, ...props }: DrawerCloseButtonProps): string | number | boolean | Iterable<default_2.ReactNode> | JSX_2.Element | null | undefined;
        displayName: string;
    };
    Footer: {
        ({ children, className }: DrawerFooterProps): JSX_2.Element;
        displayName: string; /** Trigger element to open the drawer. Required for uncontrolled component. */
    };
    Backdrop: {
        ({ className, ...props }: DrawerBackdropProps): default_2.ReactPortal | null;
        displayName: string;
    };
};

declare interface DrawerBackdropProps {
    /** Additional class names. */
    className?: string;
    /** Additional props. */
    [key: string]: unknown;
}

declare interface DrawerBodyProps {
    /** Body content. */
    children: ReactNode;
    /** Additional class names. */
    className?: string;
    /** Additional props. */
    [key: string]: unknown;
}

declare interface DrawerCloseButtonProps extends CommonProps_3 {
    /** Button content. */
    children?: ReactNode | (({ close }: {
        close: () => void;
    }) => ReactNode);
    /** Button tag. */
    as?: ElementType;
}

declare interface DrawerDescriptionProps {
    /** Description tag. */
    as?: ElementType;
    /** Description content. */
    children: ReactNode;
    /** Additional class names. */
    className?: string;
    /** Additional props. */
    [key: string]: unknown;
}

declare interface DrawerFooterProps {
    /** Footer content. */
    children: ReactNode | (({ close }: {
        close: () => void;
    }) => ReactNode);
    /** Additional class names. */
    className?: string;
}

declare interface DrawerHeaderProps {
    /** Header content. */
    children: ReactNode;
    /** Additional class names. */
    className?: string;
    /** Additional props. */
    [key: string]: unknown;
}

declare interface DrawerPanelProps {
    /** Drawer content. */
    children: ReactNode | ((props: {
        close: () => void;
    }) => ReactNode);
    /** Additional class names. */
    className?: string;
}

declare interface DrawerProps {
    /** Open state of the drawer. Optional for uncontrolled component. */
    open?: boolean;
    /** Set open state of the drawer. Optional for uncontrolled component. */
    setOpen?: (open: boolean) => void;
    /** Drawer content. */
    children: ReactNode;
    /** Trigger element to open the drawer. Required for uncontrolled component. */
    trigger?: ReactNode | ((props: {
        onClick: () => void;
    }) => ReactNode);
    /** Additional class names. */
    className?: string;
    /** Close drawer when clicking outside of the drawer. */
    exitOnClickOutside?: boolean;
    /** Close drawer when pressing the escape key. */
    exitOnEsc?: boolean;
    /** Design of the drawer. */
    design?: 'simple' | 'footer-divided';
    /** Position of the drawer. */
    position?: 'left' | 'right';
    /** Duration of the drawer transition. */
    transitionDuration?: number;
    /** Lock the scroll when the drawer is open. */
    scrollLock?: boolean;
}

declare interface DrawerTitleProps {
    /** Title content. */
    children: ReactNode;
    /** HTML element to render. */
    as?: ElementType;
    /** Additional class names. */
    className?: string;
}

declare interface DropdownCommonProps {
    /** Children of the component */
    children: ReactNode;
    /** Additional class name */
    className?: string;
}

export declare const DropdownMenu: {
    ({ placement, offset: offsetValue, boundary, children, className, }: DropdownMenuProps): JSX_2.Element;
    displayName: string;
    Trigger: default_2.ForwardRefExoticComponent<DropdownCommonProps & default_2.RefAttributes<HTMLDivElement>>;
    Content: {
        ({ children, className, ...props }: DropdownCommonProps & AdditionalProps): JSX_2.Element;
        displayName: string;
    };
    List: {
        (props: DropdownMenuListProps): JSX_2.Element;
        displayName: string;
    };
    Item: {
        ({ children, as: Tag, ...props }: DropdownMenuItemProps): JSX_2.Element | null;
        displayName: string;
    };
    Separator: {
        (props: DropdownMenuSeparatorProps): JSX_2.Element;
        displayName: string;
    };
    Portal: {
        ({ children, className, root, id, }: DropdownPortalProps): false | JSX_2.Element;
        displayName: string;
    };
};

declare interface DropdownMenuItemProps {
    /** Content of the dropdown menu item. */
    children: ReactNode;
    /** Tag of the dropdown menu item. Use your custom component or HTML tag if needed instead of the default `li`. */
    as?: ElementType;
    /** Click handler. */
    onClick?: () => void;
    /** Additional class name. */
    className?: string;
}

declare type DropdownMenuListProps = MenuListProps;

declare interface DropdownMenuProps extends DropdownCommonProps {
    /** Defines the position of the dropdown menu. */
    placement?: 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
    /** Defines the offset of the dropdown menu. */
    offset?: OffsetOptions;
    /** Defines the boundary of the dropdown menu. */
    boundary?: Boundary;
    /** Additional class name */
    className?: string;
}

declare type DropdownMenuSeparatorProps = MenuSeparatorProps;

declare interface DropdownPortalProps extends DropdownCommonProps {
    /**
     * The ID of the portal where the dropdown will be rendered.
     * @default undefined
     */
    id?: FloatingPortalProps['id'];
    /**
     * The root element where the dropdown will be rendered.
     * @default undefined
     */
    root?: FloatingPortalProps['root'];
}

export declare const Dropzone: {
    ({ onFileUpload, inlineIcon, label, helpText, size, disabled, error, errorText, }: DropzoneProps): JSX_2.Element;
    displayName: string;
};

declare interface DropzoneProps {
    /** Callback function when a file is uploaded */
    onFileUpload?: (file: File) => void;
    /** Determines if the icon should be inline */
    inlineIcon?: boolean;
    /** Label for the dropzone */
    label?: string;
    /** Help text for the dropzone */
    helpText?: string;
    /** Size variant of the dropzone */
    size?: 'sm' | 'md' | 'lg';
    /** Indicates if the component is disabled */
    disabled?: boolean;
    /** Indicates if the component is in error state */
    error?: boolean;
    /** Error text to display */
    errorText?: string;
}

declare const EditorCombobox: {
    ({ size, className, children }: EditorComboboxProps): JSX_2.Element;
    displayName: string;
    Item: ForwardRefExoticComponent<EditorComboboxItemProps & RefAttributes<HTMLLIElement>>;
};

declare interface EditorComboboxItemProps extends React.HTMLAttributes<HTMLLIElement> {
    /** The size of the combobox item. */
    size: 'sm' | 'md' | 'lg';
    /** The class name of the combobox item. */
    className?: string;
    /** The children of the combobox item. */
    children: ReactNode;
    /** Whether the combobox item is selected. */
    selected?: boolean;
}

declare interface EditorComboboxProps {
    /** The size of the combobox. */
    size: 'sm' | 'md' | 'lg';
    /** The class name of the combobox. */
    className?: string;
    /** The children of the combobox. */
    children: ReactNode;
}

export declare const EditorInput: ForwardRefExoticComponent<EditorInputProps<TOptionItem> & RefAttributes<LexicalEditor>>;

declare const editorInputClassNames: {
    sm: string;
    md: string;
    lg: string;
};

declare interface EditorInputProps<T = TOptionItem> {
    /** Default value for the editor input field. */
    defaultValue?: string;
    /** Placeholder text for the editor input field. */
    placeholder?: string;
    /** Callback function that is called when the value of the input changes. The function receives the updated value as an argument. */
    onChange?: (editorState: EditorState, editor: LexicalEditor) => void;
    /** Defines the sizes of the editor input. */
    size?: keyof typeof editorInputClassNames;
    /** Defines if the editor input is focused automatically. */
    autoFocus?: boolean;
    /** Array of options to be displayed in the editor input. Each option should be an object  or string. */
    options: T[];
    /** The key to be used to display the label of the option in the editor input and in the editor after selecting any mention/tag option. */
    by?: T extends Record<string, unknown> ? keyof T : string;
    /** The trigger to be used to show the mention options. */
    trigger?: string;
    /** The component to be used for the mention menu. */
    menuComponent?: TMenuComponent;
    /** The component to be used for the mention menu items. */
    menuItemComponent?: TMenuItemComponent;
    /** Additional class names to be added to the editor input. */
    className?: string;
    /** Additional class names to be added to the editor input wrapper. */
    wrapperClassName?: string;
    /** Defines if the editor input is disabled. */
    disabled?: boolean;
    /** Defines if the editor input should add a space after selecting a mention/tag option. */
    autoSpaceAfterMention?: boolean;
}

declare interface FlexContainerProps extends ContainerCommonProps {
    /** Defines the type of the container (default: 'flex'). */
    containerType?: TContainerType;
    /**
     * Defines the flex direction of the container.
     *
     * For responsive direction, use an object with screen sizes as keys and direction values as values.
     * Example: `{ sm: 'row', md: 'column', lg: 'row-reverse' }`
     */
    direction?: TDirection;
    /**
     * Defines the wrapping behavior of child elements.
     *
     * For responsive wrap, use an object with screen sizes as keys and wrap values as values.
     * Example: `{ sm: 'nowrap', md: 'wrap', lg: 'wrap-reverse' }`
     */
    wrap?: TWrap;
}

declare interface FlexItemProps extends ContainerCoreCommonProps {
    /**
     * Defines how much the item will grow relative to others. `(For Flex container only.)`
     *
     * For responsive grow, use an object with screen sizes as keys and grow values as values.
     * Example: `{ sm: 1, md: 2, lg: 3 }`
     */
    grow?: 0 | 1;
    /**
     * Defines how much the item will shrink relative to others. `(For Flex container only.)`
     *
     * For responsive shrink, use an object with screen sizes as keys and shrink values as values.
     * Example: `{ sm: 1, md: 2, lg: 3 }`
     */
    shrink?: 0 | 1;
    /**
     * Defines the order of the item in the container. `(For Flex container only.)`
     *
     * For responsive order, use an object with screen sizes as keys and order values as values.
     * Example: `{ sm: 1, md: 2, lg: 3 }`
     */
    order?: TRange | 'first' | 'last' | 'none';
    /**
     * Defines the alignment of the item along the cross axis. `(For Flex container only.)`
     *
     * For responsive alignment, use an object with screen sizes as keys and alignment values as values.
     * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
     */
    alignSelf?: TAlignSelf;
    /**
     * Defines the justification of the item along the main axis. `(For Flex container only.)`
     *
     * For responsive justification, use an object with screen sizes as keys and justification values as values.
     * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
     */
    justifySelf?: TJustifySelf;
}

declare interface GridContainerProps extends ContainerCommonProps {
    /**
     * CSS grid-flow property.
     *
     * For responsive grid flow, use an object with screen sizes as keys and flow values as values.
     * Example: `{ sm: 'row', md: 'column', lg: 'row-dense' }`
     */
    gridFlow?: TFlow;
    /**
     * Enables subgrid columns.
     *
     * For responsive subgrid columns, use an object with screen sizes as keys and boolean values as values.
     * Example: `{ sm: true, md: false, lg: true }`
     */
    colsSubGrid?: boolean;
    /**
     * Enables subgrid rows.
     *
     * For responsive subgrid rows, use an object with screen sizes as keys and boolean values as values.
     * Example: `{ sm: true, md: false, lg: true }`
     */
    rowsSubGrid?: boolean;
    /**
     * Enables auto rows.
     *
     * For responsive auto rows, use an object with screen sizes as keys and boolean values as values.
     * Example: `{ sm: true, md: false, lg: true }`
     */
    autoRows?: boolean;
    /**
     * Enables auto columns.
     *
     * For responsive auto columns, use an object with screen sizes as keys and boolean values as values.
     * Example: `{ sm: true, md: false, lg: true }`
     */
    autoCols?: boolean;
}

declare interface GridItemProps extends ContainerCoreCommonProps {
    /**
     * Column span for the item. `(For Grid container only.)`
     *
     * For responsive column span, use an object with screen sizes as keys and column span values as values.
     * Example: `{ sm: 1, md: 2, lg: 3 }`
     */
    colSpan?: TRange;
    /**
     * Starting column for the item. `(For Grid container only.)`
     *
     * For responsive column start, use an object with screen sizes as keys and column start values as values.
     * Example: `{ sm: 1, md: 2, lg: 3 }`
     */
    colStart?: TRange;
    /**
     * Alignment along the cross axis. `(For Grid container only.)`
     *
     * For responsive alignment, use an object with screen sizes as keys and alignment values as values.
     * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
     */
    alignSelf?: TAlignSelf;
    /**
     * Justification along the main axis. `(For Grid container only.)`
     *
     * For responsive justification, use an object with screen sizes as keys and justification values as values.
     * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
     */
    justifySelf?: TJustifySelf;
}

export declare const Input: default_2.ForwardRefExoticComponent<InputProps & Omit<default_2.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> & default_2.RefAttributes<HTMLInputElement>>;

declare interface InputProps {
    /** Unique identifier for the input element. */
    id?: string;
    /** Specifies the type of the input element (e.g., text, file). */
    type?: 'text' | 'password' | 'email' | 'file';
    /** Initial value of the input element. */
    defaultValue?: string;
    /** Controlled value of the input element. */
    value?: string;
    /** Defines the size of the input (e.g., 'sm', 'md', 'lg'). */
    size?: 'sm' | 'md' | 'lg';
    /** Additional custom classes for styling. */
    className?: string;
    /** Disables the input element when true. */
    disabled?: boolean;
    /** Function called when the input value changes. */
    onChange?: (value: string | null) => void;
    /** Indicates whether the input has an error state. */
    error?: boolean;
    /** Function called when the input encounters an error. */
    onError?: () => void;
    /** React node displayed as a prefix inside the input. */
    prefix?: ReactNode;
    /** React node displayed as a suffix inside the input. */
    suffix?: ReactNode;
    /** Label displayed above the input field. */
    label?: string;
    /** Placeholder text for the input field. */
    placeholder?: string;
    /** Indicates whether the input is required. */
    required?: boolean;
}

export declare const Label: <T extends object>(props: LabelProps & T, ref: default_2.Ref<HTMLElement>) => default_2.ReactNode;

declare interface LabelProps {
    /** The content of the label. */
    children: ReactNode;
    /** Defines the HTML tag to use for the label. */
    tag?: string | ElementType;
    /** Defines the size of the label. */
    size?: 'xs' | 'sm' | 'md';
    /** Defines the extra classes. */
    className?: string;
    /** Defines the style variant of the label. */
    variant?: 'neutral' | 'help' | 'error' | 'disabled';
    /** Defines if the label is required. */
    required?: boolean;
}

export declare const LineChart: ({ data, dataKeys, colors, showXAxis, showYAxis, showTooltip, tooltipIndicator, tooltipLabelKey, showCartesianGrid, tickFormatter, xAxisDataKey, yAxisDataKey, xAxisFontSize, xAxisFontColor, yAxisFontColor, chartWidth, chartHeight, withDots, lineChartWrapperProps, }: LineChartProps) => JSX_2.Element;

declare interface LineChartProps {
    /** An array of objects representing the source data for the chart. */
    data: DataItem_2[];
    /** An array of strings representing the keys to access data in each data object. Used for identifying different data series. */
    dataKeys: string[];
    /** An array of color objects that determine the stroke colors for each data series in the chart. */
    colors?: Color_2[];
    /** Whether to render the `<XAxis />` component for the x-axis. */
    showXAxis?: boolean;
    /** Whether to render the `<YAxis />` component for the y-axis. */
    showYAxis?: boolean;
    /** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
    showTooltip?: boolean;
    /** The tooltip indicator. It can be `dot`, `line`, or `dashed`. */
    tooltipIndicator?: 'dot' | 'line' | 'dashed';
    /** The key to use for the tooltip label. */
    tooltipLabelKey?: string;
    /** Whether to display the `<CartesianGrid />`, adding horizontal and vertical grid lines. */
    showCartesianGrid?: boolean;
    /** A function used to format the ticks on the x-axis, e.g., for formatting dates or numbers. */
    tickFormatter?: (value: string) => string;
    /** The key in the data objects representing values for the x-axis. */
    xAxisDataKey?: string;
    /** The key in the data objects representing values for the y-axis. */
    yAxisDataKey?: string;
    /** Font size for the labels on the x-axis. */
    xAxisFontSize?: 'sm' | 'md' | 'lg';
    /** Font color for the labels on the x-axis. */
    xAxisFontColor?: string;
    /** Font color for the labels on the y-axis. */
    yAxisFontColor?: string;
    /** Width of the chart container. */
    chartWidth?: number;
    /** Height of the chart container. */
    chartHeight?: number;
    /** Determines whether dots are shown on each data point. */
    withDots?: boolean;
    /**
     * Line chart Wrapper props to apply additional props to the wrapper component. Ex. `margin`, or `onClick` etc.
     * @see https://recharts.org/en-US/api/LineChart
     */
    lineChartWrapperProps?: Omit<CategoricalChartProps, 'width' | 'height' | 'data'>;
}

export declare const Loader: ({ variant, size, icon, className, }: LoaderProps) => JSX_2.Element;

declare interface LoaderProps {
    /** Defines the variant of the loader. Options are 'primary' or 'secondary'. */
    variant?: 'primary' | 'secondary';
    /** Defines the size of the loader. Options are 'sm', 'md', 'lg', or 'xl'. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Optional icon to display instead of the default loader icon. */
    icon?: ReactNode;
    /** Additional custom classes for styling. */
    className?: string;
}

export declare const Menu: {
    ({ size, children, className }: MenuProps): JSX_2.Element;
    displayName: string;
    List: {
        ({ heading, arrow, showArrowOnHover, open: initialOpen, onClick, children, className, }: MenuListProps): JSX_2.Element;
        displayName: string;
    };
    Item: {
        ({ disabled, active, onClick, children, className, }: MenuItemProps): JSX_2.Element;
        displayName: string;
    };
    Separator: {
        ({ variant, className, }: MenuSeparatorProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface MenuItemProps extends BaseMenuProps {
    /** Disables the menu item if true. */
    disabled?: boolean;
    /** Marks the menu item as active. */
    active?: boolean;
    /** Callback function triggered when the menu item is clicked. */
    onClick?: () => void;
    /** Child elements of the menu item. */
    children: ReactNode;
}

declare interface MenuListProps extends BaseMenuProps {
    /** Heading for the menu list. */
    heading?: string;
    /** Displays an arrow next to the heading. */
    arrow?: boolean;
    /** Controls the initial open state of the menu list. */
    open?: boolean;
    /** Callback function triggered when the menu list is clicked. */
    onClick?: (isOpen: boolean) => void;
    /** Child elements of the menu list. */
    children: ReactNode;
    /** Shows the arrow only when hovering. */
    showArrowOnHover?: boolean;
}

declare interface MenuProps extends BaseMenuProps {
    /** Defines the size of the menu (e.g., 'sm', 'md'). */
    size?: 'sm' | 'md';
    /** Child elements of the menu. */
    children: ReactNode;
}

declare interface MenuSeparatorProps extends BaseMenuProps {
    /** Defines the style of the separator (e.g., 'solid', 'dashed'). */
    variant?: 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none';
}

declare type MultiTypeChildren = ReactElement | ReactNode | SelectFunctionChildren;

declare type OnChangeValue = {
    slug: string;
    text: string;
};

export declare const Pagination: {
    ({ size, disabled, children, className, ...props }: PaginationProps): JSX_2.Element;
    displayName: string;
    Content: ForwardRefExoticComponent<PaginationCommonProps & RefAttributes<HTMLUListElement>>;
    Item: ForwardRefExoticComponent<PaginationItemProps & RefAttributes<HTMLLIElement>>;
    Previous: {
        (props: PaginationButtonProps): JSX_2.Element;
        displayName: string;
    };
    Next: {
        (props: PaginationButtonProps): JSX_2.Element;
        displayName: string;
    };
    Ellipsis: {
        (props: PaginationCommonProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface PaginationButtonProps extends PaginationCommonProps {
    /** Marks the button as active. */
    isActive?: boolean;
    /** Disables the button. */
    disabled?: boolean;
    /** Optional click handler for the button. */
    onClick?: React.MouseEventHandler;
    /** The HTML tag to be rendered for the pagination button. */
    tag?: 'a' | 'button';
}

declare interface PaginationCommonProps {
    /** Defines the children of the pagination component. */
    children?: ReactNode;
    /** Additional CSS classes. */
    className?: string;
}

declare interface PaginationItemProps extends PaginationCommonProps, PaginationButtonProps {
    /** Marks the pagination item as active. */
    isActive?: boolean;
}

declare interface PaginationProps extends PaginationCommonProps {
    /** Defines the size of pagination items. */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Disables all pagination controls. */
    disabled?: boolean;
}

export declare const PieChart: ({ data, dataKey, type, showTooltip, tooltipIndicator, tooltipLabelKey, label, labelName, labelNameColor, labelValue, showLegend, chartWidth, pieOuterRadius, pieInnerRadius, }: PieChartProps) => JSX_2.Element;

declare interface PieChartProps {
    /** An array of objects representing the source data for the chart. */
    data: DataItem_3[];
    /** A string which representing the key to access data in each data object. Used for identifying different data series. */
    dataKey: string;
    /** Type of pie chart. It can be `simple` or `donut` */
    type?: 'simple' | 'donut';
    /** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
    showTooltip?: boolean;
    /** The tooltip indicator. It can be `dot`, `line`, or `dashed`. */
    tooltipIndicator?: 'dot' | 'line' | 'dashed';
    /** The key to use for the tooltip label. */
    tooltipLabelKey?: string;
    /** When is true it show the label inside `donut` pie chart */
    label?: boolean;
    /** Label name which will be displayed inside donut pie chart. */
    labelName?: string;
    /** Label name color which will be displayed inside donut pie chart. */
    labelNameColor?: string;
    /** Label value which will be displayed inside donut pie chart. */
    labelValue?: number | string;
    /** Whether to render the `<Legend />` component to identify data series. */
    showLegend?: boolean;
    /** Width of the chart container. */
    chartWidth?: number;
    /** Outer radius of the pie chart. */
    pieOuterRadius?: number;
    /** Inner radius of the pie chart. */
    pieInnerRadius?: number;
}

export declare const ProgressBar: ({ progress, speed, className, }: ProgressBarProps) => JSX_2.Element;

declare interface ProgressBarProps {
    /** Current progress value (0 to 100). */
    progress?: number;
    /** Speed of the progress transition in milliseconds. */
    speed?: number;
    /** Additional custom classes for styling. */
    className?: string;
}

declare interface ProgressCommonProps {
    /** Defines the children of the progress steps. */
    children: ReactNode;
    /** Defines the class name for the component. */
    className?: string;
}

declare interface ProgressStepProps extends ProgressCommonProps {
    /** Text label for the step. */
    labelText?: string;
    /** Custom icon for the step. */
    icon?: ReactNode;
    /** Indicates if this step is currently active. */
    isCurrent?: boolean;
    /** Indicates if this step has been completed. */
    isCompleted?: boolean;
    /** Defines the layout type: 'inline' or 'stack'. */
    type?: 'inline' | 'stack';
    /** Specifies the variant style: 'dot', 'number', or 'icon'. */
    variant?: 'dot' | 'number' | 'icon';
    /** Size-specific CSS classes for the step. */
    sizeClasses?: StepSizeClasses;
    /** Defines the size of the step: 'sm', 'md', or 'lg'. */
    size: 'sm' | 'md' | 'lg';
    /** Indicates if this step is the last in the sequence. */
    isLast?: boolean;
    /** The index of the step in the sequence. */
    index?: number;
    /** Additional class names for the connecting line. */
    lineClassName?: string;
}

export declare const ProgressSteps: {
    ({ variant, size, type, currentStep, children, className, lineClassName, ...rest }: ProgressStepsProps): JSX_2.Element;
    Step: {
        ({ labelText, icon, isCurrent, isCompleted, className, type, variant, sizeClasses, size, isLast, index, lineClassName, ...rest }: ProgressStepProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface ProgressStepsProps extends ProgressCommonProps {
    /** Defines the variant of the progress step. */
    variant?: 'dot' | 'number' | 'icon';
    /** Defines the size of the progress step. */
    size?: 'sm' | 'md' | 'lg';
    /** Defines the type of layout. */
    type?: 'inline' | 'stack';
    /** Defines the current step number. `-1` keeps all steps completed. */
    currentStep?: number;
    /** Additional props for the connecting line. */
    lineClassName?: string;
}

export declare const RadioButton: default_2.ForwardRefExoticComponent<RadioButtonProps & default_2.RefAttributes<HTMLInputElement>> & {
    Group: {
        ({ children, name, style, size, value, defaultValue, by, as: AsElement, onChange, className, disableGroup, vertical, columns, multiSelection, gapClassName, }: RadioButtonGroupProps): JSX_2.Element;
        displayName: string;
    };
    Button: default_2.ForwardRefExoticComponent<RadioButtonProps & default_2.RefAttributes<HTMLInputElement>>;
};

/** Common props used across the radio button components */
declare interface RadioButtonCommonProps {
    /** Custom class names for additional styling */
    className?: string;
    /** HTML element or React component to render the element as */
    as?: ElementType;
    /** Children components (usually RadioButton.Button instances) */
    children?: ReactNode;
    /** Disables the radio button */
    disabled?: boolean;
}

/** Props for the RadioButtonGroup component */
declare interface RadioButtonGroupProps extends RadioButtonCommonProps {
    /** Name used for form submission */
    name?: string;
    /** Style of the radio button group: 'simple' or 'tile' */
    style?: 'simple' | 'tile';
    /** Size of the radio buttons: 'sm' or 'md' */
    size?: 'sm' | 'md';
    /** Controlled value of the group */
    value?: string | string[];
    /** Default value if the group is uncontrolled */
    defaultValue?: string | string[];
    /** Attribute to compare selected values, typically 'id' */
    by?: string;
    /** Handler invoked on value change */
    onChange?: (value: string | string[]) => void;
    /** Disables all radio buttons in the group */
    disableGroup?: boolean;
    /** Arranges the radio buttons vertically */
    vertical?: boolean;
    /** Number of columns for arranging the buttons */
    columns?: number;
    /** Enables multi-selection mode */
    multiSelection?: boolean;
    /** Gap between radio buttons */
    gapClassName?: string;
}

/** Props for an individual RadioButton */
declare interface RadioButtonProps extends RadioButtonCommonProps {
    /** Unique identifier for the radio button */
    id?: string;
    /** Label content for the radio button */
    label?: {
        heading: string;
        description?: string;
    };
    /** Value of the radio button */
    value: string;
    /** Disables the radio button */
    disabled?: boolean;
    /** Custom icon to display */
    icon?: ReactNode;
    /** Aligns icon inline with the label */
    inlineIcon?: boolean;
    /** Hides the selection indicator */
    hideSelection?: boolean;
    /** Reverses the position of icon and label */
    reversePosition?: boolean;
    /** Adds a border around the button */
    borderOn?: boolean;
    /** Adds a border when the button is active */
    borderOnActive?: boolean;
    /** Badge element to display */
    badgeItem?: ReactNode;
    /** Uses a switch for selection instead of radio input */
    useSwitch?: boolean;
    /** Info object with heading and description */
    info?: {
        heading: string;
        description?: string;
    };
    /** Ensures the button has minimum width */
    minWidth?: boolean;
    /** Custom classes for the button wrapper */
    buttonWrapperClasses?: string;
    /** Checked state of the radio button */
    checked?: boolean;
}

export declare const SearchBox: SearchBoxComponent;

declare type SearchBoxComponent = default_2.ForwardRefExoticComponent<BaseSearchBoxProps & default_2.RefAttributes<HTMLDivElement>> & {
    Input: typeof SearchBoxInput;
    Loading: typeof SearchBoxLoading;
    Separator: typeof SearchBoxSeparator;
    Content: typeof SearchBoxContent;
    List: typeof SearchBoxList;
    Empty: typeof SearchBoxEmpty;
    Group: typeof SearchBoxGroup;
    Item: typeof SearchBoxItem;
};

declare const SearchBoxContent: {
    ({ className, dropdownPortalRoot, dropdownPortalId, children, ...props }: SearchBoxContentProps): JSX_2.Element | null;
    displayName: string;
};

declare interface SearchBoxContentProps {
    /** Additional class names for styling. */
    className?: string;
    /** Root element where the dropdown will be rendered. */
    dropdownPortalRoot?: HTMLElement | null;
    /** Id of the dropdown portal where the dropdown will be rendered. */
    dropdownPortalId?: string;
    /** Child components to be rendered inside the dropdown. */
    children: ReactNode;
}

declare const SearchBoxEmpty: {
    ({ children, }: SearchBoxEmptyProps): JSX_2.Element;
    displayName: string;
};

declare interface SearchBoxEmptyProps {
    /** Content to display when there are no results. */
    children?: ReactNode;
}

declare const SearchBoxGroup: {
    ({ heading, children }: SearchBoxGroupProps): JSX_2.Element;
    displayName: string;
};

declare interface SearchBoxGroupProps {
    /** Heading for the group. */
    heading?: string;
    /** Child components to be rendered in the group. */
    children: ReactNode;
}

declare const SearchBoxInput: default_2.ForwardRefExoticComponent<SearchBoxInputProps & default_2.RefAttributes<HTMLInputElement>>;

declare interface SearchBoxInputProps extends BaseSearchBoxProps {
    /** Type of the input (e.g., text, search). */
    type?: string;
    /** Placeholder text for the input. */
    placeholder?: string;
    /** Style variant of the input. */
    variant?: 'primary' | 'secondary' | 'ghost';
    /** Whether the input is disabled. */
    disabled?: boolean;
    /** Callback for input changes. */
    onChange?: (value: string) => void;
    /** Child components to be rendered. */
    children?: ReactNode;
}

declare const SearchBoxItem: default_2.ForwardRefExoticComponent<SearchBoxItemProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface SearchBoxItemProps {
    /** Additional class names for styling. */
    className?: string;
    /** Icon to display next to the item. */
    icon?: ReactNode;
    /** Child components to be rendered. */
    children: ReactNode;
}

declare const SearchBoxList: {
    ({ filter, children, }: SearchBoxListProps): JSX_2.Element;
    displayName: string;
};

declare interface SearchBoxListProps {
    /** Whether to filter children based on the search term. */
    filter?: boolean;
    /** Child components to be rendered. */
    children: ReactNode;
}

declare const SearchBoxLoading: {
    ({ loadingIcon, }: SearchBoxLoadingProps): JSX_2.Element;
    displayName: string;
};

declare interface SearchBoxLoadingProps {
    /** Loading icon to display while loading. */
    loadingIcon?: ReactNode & {
        size?: string;
    };
}

declare const SearchBoxSeparator: default_2.ForwardRefExoticComponent<SearchBoxSeparatorProps & default_2.RefAttributes<HTMLHRElement>>;

declare interface SearchBoxSeparatorProps {
    /** Additional class names for styling. */
    className?: string;
}

export declare const Select: {
    ({ id, size: sizeValue, value, defaultValue, onChange, by, children, multiple, combobox, disabled, }: SelectProps): JSX_2.Element;
    Portal: typeof SelectPortal;
    Button: typeof SelectButton;
    Options: typeof SelectOptions;
    Option: typeof SelectItem;
};

declare function SelectButton({ children, icon, // Icon to show in the select button.
    placeholder, // Placeholder text.
    optionIcon, // Icon to show in the selected option.
    displayBy, // Used to display the value. Default is 'name'.
    label, // Label for the select component.
    className, ...props }: SelectButtonProps): JSX_2.Element;

declare namespace SelectButton {
    var displayName: string;
}

declare interface SelectButtonProps extends AriaAttributes {
    /** Expects the `Select.Button` children of the Select Component. */
    children?: MultiTypeChildren;
    /** Option Icon to show at the right of the option trigger/button. By default it will show chevron down icon. */
    icon?: ReactNode | null;
    /** Placeholder text when no option is selected. */
    placeholder?: string;
    /** Icon to show in the selected option badge (Multi-select mode only). By default it won't show unknown icon. */
    optionIcon?: ReactNode | null;
    /** Key to display selected item when the selected value is an object. Default value is `name`. */
    displayBy?: string;
    /** Label for the Select component. */
    label?: string;
    /** Additional class name for the Select Button. */
    className?: string;
}

declare type SelectFunctionChildren = ({ value, onClose, }: {
    value: SelectOptionValue;
    onClose?: (event: React.MouseEvent<HTMLElement>) => void;
}) => React.JSX.Element;

declare function SelectItem({ value, selected, children, className, ...props }: SelectOptionProps): JSX_2.Element;

declare namespace SelectItem {
    var displayName: string;
}

declare type SelectOnChange = (value: SelectOptionValue | SelectOptionValue[]) => void;

declare interface SelectOptionProps {
    /** Value of the option. */
    value: SelectOptionValue;
    /** Selected state of the option. */
    selected?: boolean;
    /** Expects the `Select.Option` children of the Select Component. */
    children?: ReactNode;
    /** Additional class name for the Select Option. */
    className?: string;
    /** Additional Props */
    [key: string]: unknown;
}

declare function SelectOptions({ children, searchBy, // Used to identify searched value using the key. Default is 'id'.
    searchPlaceholder, // Placeholder text for search box.
    className, }: SelectOptionsProps): JSX_2.Element;

declare namespace SelectOptions {
    var displayName: string;
}

declare interface SelectOptionsProps {
    /** Expects the `Select.Option` children of the Select.Options Component. */
    children?: ReactNode;
    /** Key used to identify searched value using the key. Default is 'id'. */
    searchBy?: string;
    /** Placeholder text for search box. */
    searchPlaceholder?: string;
    /** Additional class name for the Select Options wrapper. */
    className?: string;
}

declare type SelectOptionValue = string | number | Record<string, unknown>;

declare function SelectPortal({ children, root, id }: SelectPortalProps): JSX_2.Element;

declare namespace SelectPortal {
    var displayName: string;
}

declare interface SelectPortalProps {
    /** Expects the `Select.Options` children of the Select.Portal Component. */
    children?: ReactNode;
    /**
     * Root element where the `Select.Options` will be rendered.  If not provided Select.Options will be rendered in the body.
     */
    root?: HTMLElement;
    /**
     * Root element ID where the `Select.Options` will be rendered. If not provided Select.Options will be rendered in the body.
     */
    id?: string;
}

declare type SelectProps = {
    /** Select Component unique ID. */
    id?: string;
    /** Defines the size of the Select Component. */
    size?: SelectSizes;
    /** When the value is an object, a key is required to compare the selected value. The default value is `id`. */
    by?: string;
    /** Expects the `Select.Portal`/`Select.Options` and `Select.Button` children of the Select Component. */
    children?: ReactNode;
    /** Combobox mode. */
    combobox?: boolean;
    /** Disables the Select Component. */
    disabled?: boolean;
    /** Multi select mode. */
    multiple?: boolean;
    /** Defines the width of the Select Component. */
    value?: SelectOptionValue | SelectOptionValue[];
    /** onChange event to be triggered when the value of the Select Component changes. */
    onChange: SelectOnChange;
    /** Defines the default value of the Select Component. */
    defaultValue?: SelectOptionValue | SelectOptionValue[];
};

declare type SelectSizes = 'sm' | 'md' | 'lg';

export declare const Sidebar: {
    ({ children, className, onCollapseChange, collapsible, screenHeight, borderOn, ...props }: SidebarProps): JSX_2.Element;
    displayName: string;
} & {
    Header: {
        ({ children }: SidebarCommonProps): JSX_2.Element;
        displayName: string;
    };
    Body: {
        ({ children }: SidebarCommonProps): JSX_2.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: SidebarCommonProps): JSX_2.Element;
        displayName: string;
    };
    Item: {
        ({ children, className }: SidebarItemProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface SidebarCommonProps {
    /** Content to render inside the Sidebar. Typically includes Sidebar.Header, Sidebar.Body, and Sidebar.Footer components. */
    children: ReactNode;
}

declare interface SidebarItemProps extends SidebarCommonProps {
    /** Optional custom CSS classes for styling the Sidebar item. */
    className?: string;
    /** Click event handler */
    onClick?: () => void;
}

declare interface SidebarProps extends SidebarCommonProps {
    /** Optional custom CSS classes to apply to the Sidebar container for styling. */
    className?: string;
    /** Callback function triggered when the Sidebar collapse state changes. */
    onCollapseChange?: (isCollapsed: boolean) => void;
    /** Determines if the Sidebar can be collapsed or not. If true, a collapse button is shown. */
    collapsible?: boolean;
    /** Determines whether the Sidebar should occupy the full screen height. */
    screenHeight?: boolean;
    /** Controls whether a border should appear on the right of the Sidebar. */
    borderOn?: boolean;
}

declare const sizeClassnames: {
    sm: {
        dot: string;
        ring: string;
        numberIcon: string;
        icon: string;
        label: string;
    };
    md: {
        dot: string;
        ring: string;
        numberIcon: string;
        icon: string;
        label: string;
    };
    lg: {
        dot: string;
        ring: string;
        numberIcon: string;
        icon: string;
        label: string;
    };
};

export declare const Skeleton: ({ variant, className, ...props }: SkeletonProps) => JSX.Element;

declare interface SkeletonProps {
    /** Defines the style variant of the skeleton. */
    variant?: 'rectangular' | 'circular';
    /** Allows you to pass custom classes to control the size and styles. */
    className?: string;
}

declare type StepSizeClasses = typeof sizeClassnames;

export declare const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLInputElement>>;

declare interface SwitchProps {
    /** Unique identifier for the switch component. */
    id?: string;
    /** Callback function triggered when the switch value changes. */
    onChange?: (checked: boolean) => void;
    /** Controlled value of the switch (checked or unchecked). */
    value?: boolean;
    /** Initial value of the switch (checked or unchecked) when used as an uncontrolled component. */
    defaultValue?: boolean;
    /** Defines the size of the switch (e.g., 'sm', 'md', 'lg'). */
    size?: 'sm' | 'md' | 'lg';
    /** Disables the switch if true. */
    disabled?: boolean;
    /** Defines the label for the switch, can include heading and description. */
    label?: {
        /** Heading for the label. */
        heading?: string;
        /** Description for the label. */
        description?: string;
    };
    /** Name attribute for the switch input. */
    name?: string;
    /** Additional CSS classes for the switch component. */
    className?: string;
}

export declare const Table: {
    ({ children, className, checkboxSelection, ...props }: BaseTableProps): JSX_2.Element;
    displayName: string;
    Head: default_2.FC<TableHeadProps>;
    HeadCell: default_2.FC<TableHeadCellProps>;
    Body: default_2.FC<TableBodyProps>;
    Row: {
        <T>({ children, selected, value, className, onChangeSelection, ...props }: TableRowProps<T>): JSX_2.Element;
        displayName: string;
    };
    Cell: default_2.FC<TableCellProps>;
    Footer: default_2.FC<TableFooterProps>;
};

/**
 * Interface for table body props.
 */
declare interface TableBodyProps extends TableCommonProps, Omit<default_2.HTMLAttributes<HTMLTableSectionElement>, 'className' | 'children'> {
    /**
     * Child components to render within the table body.
     */
    children?: ReactNode;
}

/**
 * Interface for table cell props.
 */
declare interface TableCellProps extends TableCommonProps, Omit<default_2.HTMLAttributes<HTMLTableCellElement>, 'className' | 'children'> {
    /**
     * Content to display in the table cell.
     */
    children?: ReactNode;
}

/**
 * Common props for all table components.
 */
declare interface TableCommonProps {
    /**
     * Children to render within the component.
     */
    children?: ReactNode;
    /**
     * Class name to apply to the component.
     */
    className?: string;
}

/**
 * Interface for table footer props.
 */
declare interface TableFooterProps extends TableCommonProps, Omit<default_2.HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
    /**
     * Child components to render within the table footer.
     */
    children?: ReactNode;
}

/**
 * Interface for table head cell props.
 */
declare interface TableHeadCellProps extends TableCommonProps, Omit<default_2.HTMLAttributes<HTMLTableCellElement>, 'className' | 'children'> {
    /**
     * Content to display in the header cell.
     */
    children?: ReactNode;
}

/**
 * Interface for table head props.
 */
declare interface TableHeadProps extends TableCommonProps, Omit<default_2.HTMLAttributes<HTMLTableSectionElement>, 'className' | 'children'> {
    /**
     * Child components to render within the table head.
     */
    children?: ReactNode;
    /**
     * Whether any of the rows are selected.
     */
    selected?: boolean;
    /**
     * Whether the checkbox is indeterminate.
     */
    indeterminate?: boolean;
    /**
     * Whether the checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * On checkbox change for bulk selection/deselection.
     *
     * @default undefined
     */
    onChangeSelection?: (checked: boolean) => void;
}

/**
 * Interface for table row props.
 */
declare interface TableRowProps<T> extends TableCommonProps, Omit<default_2.HTMLAttributes<HTMLTableRowElement>, 'className' | 'children'> {
    /**
     * Child components to render within the table row.
     */
    children?: ReactNode;
    /**
     * value of the row.
     */
    value?: T | undefined;
    /**
     * Whether the row is selected.
     */
    selected?: boolean;
    /**
     * On checkbox selection change.
     */
    onChangeSelection?: (checked: boolean, value: T) => void;
    /**
     * Whether the row is disabled.
     */
    disabled?: boolean;
}

declare interface TabPanelProps {
    /** Unique identifier for the tab panel that is used for the tab. */
    slug: string;
    /** Content to display in the tab panel. */
    children: ReactNode;
}

declare interface TabProps {
    /** Unique identifier for the tab. */
    slug: string;
    /** Text to display in the tab. */
    text: string;
    /** Icon to display in the tab. */
    icon?: ReactNode;
    /** Additional class names for styling. */
    className?: string;
    /** Disables the tab. */
    disabled?: boolean;
    /** Badge to display in the tab. */
    badge?: ReactNode;
}

export declare const Tabs: {
    ({ activeItem, children }: TabsProps): JSX_2.Element;
    Group: {
        ({ children, activeItem: activeTabSlug, onChange, className, size, orientation, variant, iconPosition, width, }: TabsGroupProps): JSX_2.Element;
        displayName: string;
    };
    Tab: default_2.ForwardRefExoticComponent<TabProps & default_2.RefAttributes<HTMLButtonElement>>;
    Panel: {
        ({ slug, children }: TabPanelProps): JSX_2.Element | null;
        displayName: string;
    };
};

declare interface TabsGroupProps {
    /** Controls the active tab. */
    activeItem?: string | null;
    /** Callback when the active item changes. */
    onChange?: ({ event, value, }: {
        event: default_2.MouseEvent<HTMLButtonElement>;
        value: OnChangeValue;
    }) => void;
    /** Additional class names for styling. */
    className?: string;
    /** Defines the size of the tabs. */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Defines the orientation of the tabs. */
    orientation?: 'horizontal' | 'vertical';
    /** Defines the style variant of the tabs. */
    variant?: 'pill' | 'rounded' | 'underline';
    /** Defines the position of the icon. */
    iconPosition?: 'left' | 'right';
    /** Defines the width of the tabs. */
    width?: 'auto' | 'full';
    /** Tabs to display in the group. */
    children: ReactNode;
}

declare interface TabsProps {
    /** The active tab value to identify active tab. */
    activeItem: string | null;
    /** Tabs and their content to display. */
    children: ReactNode;
}

declare type TAlign = 'start' | 'center' | 'end' | 'stretch';

declare type TAlignSelf = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

declare type TCols = TRange;

declare type TContainerType = 'grid' | 'flex';

declare type TDateRange = {
    from: Date | null;
    to: Date | null;
};

declare type TDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export declare const TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<HTMLTextAreaElement>>;

declare interface TextAreaProps {
    /** ID of the textarea element. */
    id?: string;
    /** Default value when used in uncontrolled mode. */
    defaultValue?: string;
    /** Value when used in controlled mode. */
    value?: string;
    /** Size of the textarea (sm, md, lg). */
    size?: 'sm' | 'md' | 'lg';
    /** Additional class names for the textarea. */
    className?: string;
    /** Disables the textarea if true. */
    disabled?: boolean;
    /** Handles changes in the textarea value. */
    onChange?: (value: string) => void;
    /** Marks the field with an error state. */
    error?: boolean;
    /** Callback triggered when the field is invalid. */
    onError?: () => void;
}

declare type TFlow = 'row' | 'column' | 'row-dense' | 'column-dense';

declare type TGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export declare const Title: ({ title, description, icon, iconPosition, tag, size, className, }: TitleProps) => JSX_2.Element | null;

/**
 * Title component.
 */
/**
 * Props for the Title component.
 */
declare interface TitleProps {
    /** The main title text to render. */
    title?: string;
    /** Optional description text to display below the title. */
    description?: string;
    /** Icon element to display alongside the title. */
    icon?: ReactNode;
    /** Determines the position of the icon relative to the title. */
    iconPosition?: 'left' | 'right';
    /** HTML tag to use for the title (e.g., h1, h2, h3). */
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /** Size variant of the title (affects both title and description styles) - xs, sm, md, lg. */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Additional class names to apply to the root element. */
    className?: string;
}

declare type TJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'stretch';

declare type TJustifySelf = 'auto' | 'start' | 'center' | 'end' | 'baseline' | 'stretch';

declare type TMenuComponent = default_2.ComponentType<default_2.ComponentProps<typeof EditorCombobox>>;

declare type TMenuItemComponent = default_2.ComponentType<default_2.ComponentProps<typeof EditorCombobox.Item>>;

export declare const toast: ((message: string | default_2.ReactElement, options: ToastType) => number | undefined) & {
    success: (message?: string | default_2.ReactElement, options?: Partial<ToastType>) => number | undefined;
    error: (message?: string | default_2.ReactElement, options?: Partial<ToastType>) => number | undefined;
    warning: (message?: string | default_2.ReactElement, options?: Partial<ToastType>) => number | undefined;
    info: (message?: string | default_2.ReactElement, options?: Partial<ToastType>) => number | undefined;
    custom: (jsx: ToastType['jsx'], options?: Partial<ToastType>) => number | undefined;
    dismiss: (id: number) => number;
    update: (id: number, data: Partial<ToastType>) => void;
} & {
    getHistory: () => ToastType[];
};

declare type ToastAction = {
    label: string;
    onClick: (callback?: (toast: ToastType) => void) => void;
    type?: 'button' | 'link';
};

declare type ToastDesign = 'stack' | 'inline';

export declare const Toaster: NamedExoticComponent<object>;

declare type ToastTheme = 'light' | 'dark';

declare interface ToastType {
    id?: number;
    title?: string | React.ReactElement;
    description?: string | React.ReactElement;
    type?: ToastVariant;
    jsx?: ({ close, action, }: {
        close: () => void;
        action?: ToastAction | null;
    }) => JSX.Element;
    render?: string | (() => JSX.Element);
    autoDismiss?: boolean;
    dismissAfter?: number;
    theme?: ToastTheme;
    design?: ToastDesign;
    dismiss?: boolean;
    icon?: React.ReactElement;
    action?: ToastAction;
}

declare type ToastVariant = 'neutral' | 'success' | 'error' | 'warning' | 'info' | 'custom';

export declare const Tooltip: ({ variant, placement, title, content, arrow, open, setOpen, children, className, tooltipPortalRoot, tooltipPortalId, boundary, strategy, offset: offsetValue, triggers, interactive, }: TooltipProps) => JSX_2.Element;

declare interface TooltipProps {
    /** Defines the visual variant of the tooltip. */
    variant?: 'light' | 'dark';
    /** Specifies the position of the tooltip relative to its target. */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    /** The title displayed at the top of the tooltip. */
    title?: string;
    /** The main content to be displayed within the tooltip. */
    content?: ReactNode;
    /** Indicates whether to show an arrow pointing to the target element. */
    arrow?: boolean;
    /** Controls the visibility of the tooltip in a controlled manner. */
    open?: boolean;
    /** Function to set the visibility state of the tooltip. */
    setOpen?: (isOpen: boolean) => void;
    /** The child element to which the tooltip is attached. */
    children: ReactNode;
    /** Additional CSS classes to apply to the tooltip for custom styling. */
    className?: string;
    /** The root element where the tooltip will be rendered. */
    tooltipPortalRoot?: HTMLElement | null;
    /** The ID of the tooltip portal. */
    tooltipPortalId?: string;
    /** Specifies the positioning strategy for the tooltip. */
    strategy?: 'fixed' | 'absolute';
    /** Offset distance (in pixels) from the target element to the tooltip. */
    offset?: number;
    /** Events that trigger the tooltip. */
    triggers?: ('click' | 'hover' | 'focus')[];
    /** Indicates whether the tooltip content is interactive. Keeps the tooltip open while the user interacts with its content. */
    interactive?: boolean;
    /** Defines the boundary for positioning the tooltip, accepting 'viewport', 'clippingAncestors', or an HTML element reference. */
    boundary?: 'viewport' | 'clippingAncestors' | HTMLElement | null;
}

export declare const Topbar: {
    ({ children, gap, className, ...props }: TopbarProps): JSX_2.Element;
    displayName: string;
    Left: {
        ({ gap, children, className }: TopbarProps): JSX_2.Element;
        displayName: string;
    };
    Middle: {
        ({ gap, children, align, className, }: TopbarMiddleProps): JSX_2.Element;
        displayName: string;
    };
    Right: {
        ({ gap, children, className }: TopbarProps): JSX_2.Element;
        displayName: string;
    };
    Item: {
        ({ children, className }: TopbarCommonProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface TopbarCommonProps {
    /** Children to be rendered inside the Topbar. */
    children?: ReactNode;
    /** Additional classes to be added to the Topbar. */
    className?: string;
}

declare interface TopbarMiddleProps extends TopbarProps {
    /** Defines how the content inside the Middle section is aligned. */
    align?: 'left' | 'center' | 'right';
}

declare interface TopbarProps extends TopbarCommonProps {
    /** Defines the gap between items. */
    gap?: '0' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

declare type TOptionItem = Record<string, unknown> | string;

declare type TRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

declare type TWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export { }


declare namespace defaultTheme {
    let content: string[];
    namespace theme {
        namespace extend {
            let colors: {
                'brand-background-50': string;
                'brand-background-hover-100': string;
                'brand-200': string;
                'brand-border-300': string;
                'brand-400': string;
                'brand-500': string;
                'brand-primary-600': string;
                'brand-hover-700': string;
                'brand-800': string;
                'brand-900': string;
                'brand-text-950': string;
                'background-primary': string;
                'background-secondary': string;
                'background-inverse': string;
                'background-brand': string;
                'background-important': string;
                'field-primary-background': string;
                'field-secondary-background': string;
                'field-primary-hover': string;
                'field-secondary-hover': string;
                'field-dropzone-background': string;
                'field-border': string;
                'field-dropzone-background-hover': string;
                'field-dropzone-color': string;
                'field-label': string;
                'field-input': string;
                'field-helper': string;
                'field-background-disabled': string;
                'field-color-disabled': string;
                'field-placeholder': string;
                'field-border-disabled': string;
                'field-color-error': string;
                'field-border-error': string;
                'field-background-error': string;
                'field-required': string;
                'border-interactive': string;
                'border-subtle': string;
                'border-strong': string;
                'border-inverse': string;
                'border-disabled': string;
                'border-muted': string;
                'border-error': string;
                'border-transparent-subtle': string;
                'border-white': string;
                'text-primary': string;
                'text-secondary': string;
                'text-tertiary': string;
                'text-on-color': string;
                'text-error': string;
                'text-error-inverse': string;
                'text-inverse': string;
                'text-disabled': string;
                'text-on-button-disabled': string;
                'link-primary': string;
                'link-primary-hover': string;
                'link-inverse': string;
                'link-visited': string;
                'link-visited-inverse': string;
                'link-inverse-hover': string;
                'icon-primary': string;
                'icon-secondary': string;
                'icon-on-color': string;
                'icon-inverse': string;
                'icon-interactive': string;
                'icon-on-color-disabled': string;
                'icon-disabled': string;
                'support-error': string;
                'support-success': string;
                'support-warning': string;
                'support-info': string;
                'support-error-inverse': string;
                'support-success-inverse': string;
                'support-warning-inverse': string;
                'support-info-inverse': string;
                'button-primary': string;
                'button-primary-hover': string;
                'button-secondary': string;
                'button-secondary-hover': string;
                'button-tertiary': string;
                'button-tertiary-hover': string;
                'button-danger': string;
                'button-danger-secondary': string;
                'button-danger-hover': string;
                'button-disabled': string;
                'button-tertiary-border': string;
                'button-tertiary-color': string;
                focus: string;
                'focus-inset': string;
                'focus-inverse': string;
                'focus-inverse-inset': string;
                'focus-error': string;
                'focus-border': string;
                'focus-error-border': string;
                'misc-highlight': string;
                'misc-overlay': string;
                'misc-skeleton-background': string;
                'misc-skeleton-element': string;
                'misc-popup-button-hover': string;
                'misc-tab-item-hover': string;
                'misc-dropdown-hover': string;
                'misc-loader-base': string;
                'misc-loader-color': string;
                'misc-progress-background': string;
                'badge-background-gray': string;
                'badge-color-gray': string;
                'badge-hover-gray': string;
                'badge-border-gray': string;
                'badge-background-red': string;
                'badge-color-red': string;
                'badge-hover-red': string;
                'badge-border-red': string;
                'badge-background-yellow': string;
                'badge-color-yellow': string;
                'badge-hover-yellow': string;
                'badge-border-yellow': string;
                'badge-hover-green': string;
                'badge-border-green': string;
                'badge-background-green': string;
                'badge-color-green': string;
                'badge-background-sky': string;
                'badge-color-sky': string;
                'badge-hover-sky': string;
                'badge-border-sky': string;
                'badge-background-disabled': string;
                'badge-color-disabled': string;
                'badge-hover-disabled': string;
                'badge-border-disabled': string;
                'badge-background-important': string;
                'alert-background-neutral': string;
                'alert-border-neutral': string;
                'alert-background-danger': string;
                'alert-border-danger': string;
                'alert-background-warning': string;
                'alert-border-warning': string;
                'alert-background-green': string;
                'alert-border-green': string;
                'alert-background-info': string;
                'alert-border-info': string;
                'tab-background': string;
                'tab-border': string;
                'tooltip-background-light': string;
                'tooltip-background-dark': string;
                'toggle-off': string;
                'toggle-on': string;
                'toggle-dial-background': string;
                'toggle-off-hover': string;
                'toggle-off-border': string;
                'toggle-on-hover': string;
                'toggle-on-border': string;
                'toggle-on-disabled': string;
                'toggle-off-disabled': string;
            };
            let width: {
                '1/7': string;
                '1/8': string;
                '1/9': string;
                '1/10': string;
                '1/11': string;
                '1/12': string;
            };
            let boxShadow: {
                'soft-shadow-sm': string;
                'soft-shadow': string;
                'soft-shadow-md': string;
                'soft-shadow-lg': string;
                'soft-shadow-xl': string;
                'soft-shadow-2xl': string;
                'soft-shadow-inner': string;
            };
            namespace fontSize {
                let tiny: string;
            }
            let spacing: {
                4.5: string;
                5.5: string;
                120: string;
                95: string;
                141.5: string;
                188: string;
            };
            let zIndex: {
                999999: string;
            };
        }
    }
    let plugins: never[];
    namespace corePlugins {
        let preflight: boolean;
    }
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
        namespace a11y {
            namespace config {
                let rules: {
                    selector: string;
                    id: string;
                    enabled: boolean;
                }[];
            }
        }
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}
