import { cn } from '@/utilities/functions';
import React, { Children, createContext, useContext, type ReactNode } from 'react';
import { Checkbox } from '@/components';

/**
 * Common props for all table components.
 */
export interface TableCommonProps {
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
 * Interface for column configurations.
 */
export interface Column<T> {
	/**
	 * Header text to display in the column.
	 */
	header: string;
	/**
	 * Property key from data object to display in this column.
	 */
	accessor: keyof T;
	/**
	 * Whether this column can be sorted.
	 */
	sortable?: boolean;
	/**
	 * Custom sort function for this column.
	 */
	sortFn?: ( a: T, b: T ) => number;
	/**
	 * Custom cell renderer for this column.
	 */
	Cell?: ( props: { value: unknown; row: T; index: number } ) => ReactNode;
}

/**
 * Interface for table props.
 */
export interface TableProps<T> extends TableCommonProps {
	/**
	 * Whether to show checkboxes for row selection.
	 */
	showCheckbox?: boolean;
	/**
	 * Callback fired when row selection changes.
	 */
	onSelectionChange?: ( selectedItems: T[] ) => void;
	/**
	 * Child components to render within the table.
	 */
	children?: ReactNode;
}

/**
 * Interface for table context.
 */
export interface TableContextType<T> {
	/**
	 * Set of indices for selected rows.
	 */
	selectedRows?: Set<number>;
	/**
	 * Whether to show checkboxes for row selection.
	 */
	checkboxSelection?: boolean;
	/**
	 * On checkbox selection change.
	 */
	onChangeSelection?: ( checked: boolean, value: T ) => void;
}

/**
 * Interface for base table props.
 */
export interface BaseTableProps extends TableCommonProps {
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

/**
 * Interface for table head props.
 */
export interface TableHeadProps extends TableCommonProps {
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
	onChangeSelection?: ( checked: boolean ) => void;
}

/**
 * Interface for table head cell props.
 */
export interface TableHeadCellProps extends TableCommonProps {
	/**
	 * Content to display in the header cell.
	 */
	children?: ReactNode;
}

/**
 * Interface for table body props.
 */
export interface TableBodyProps extends TableCommonProps {
	/**
	 * Child components to render within the table body.
	 */
	children?: ReactNode;
}

/**
 * Interface for table row props.
 */
export interface TableRowProps<T> extends TableCommonProps {
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
	onChangeSelection?: ( checked: boolean, value: T ) => void;

	/**
	 * Whether the row is disabled.
	 */
	disabled?: boolean;
}

/**
 * Interface for table cell props.
 */
export interface TableCellProps extends TableCommonProps {
	/**
	 * Content to display in the table cell.
	 */
	children?: ReactNode;
}

/**
 * Interface for table footer props.
 */
export interface TableFooterProps extends TableCommonProps {
	/**
	 * Child components to render within the table footer.
	 */
	children?: ReactNode;
}

const TableContext = createContext<TableContextType<unknown> | undefined>( undefined );

const useTableContext = () => {
	const context = useContext( TableContext );
	if ( ! context ) {
		throw new Error( 'Table components must be used within Table component' );
	}
	return context;
};

export const Table = ( {
	children,
	className,
	checkboxSelection = false,
}: BaseTableProps ) => {
	const contextValue: TableContextType<unknown> = {
		checkboxSelection,
	};

	// Extract footer from children
	const footer = Children.toArray( children ).find(
		( child ) => React.isValidElement( child ) && child.type === TableFooter
	);
	const restChildren = Children.toArray( children ).filter(
		( child ) => React.isValidElement( child ) && child.type !== TableFooter
	);
	return (
		<TableContext.Provider value={ contextValue as TableContextType<unknown> }>
			<div className="overflow-x-auto divide-y divide-x-0 divide-solid divide-border-subtle">
				<table
					className={ cn(
						'table-fixed min-w-full border-collapse border-spacing-0',
						className
					) }
				>
					{ restChildren }
				</table>
				{ footer }
			</div>
		</TableContext.Provider>
	);
};

// Head Components
export const TableHead: React.FC<TableHeadProps> = ( { children, className, selected, onChangeSelection, indeterminate, disabled } ) => {
	const { checkboxSelection } = useTableContext();

	const handleCheckboxChange = ( checked: boolean ) => {
		if ( typeof onChangeSelection !== 'function' ) {
			return;
		}
		onChangeSelection( checked );
	};

	return (
		<thead
			className={ cn(
				'bg-background-secondary [clip-path:inset(0_0_0_0_round_0.375rem)]',
				className
			) }
		>
			<tr>
				{ checkboxSelection && (
					<th
						scope="col"
						className="relative p-3.5 w-11 align-middle"
					>
						<Checkbox
							size="sm"
							checked={ selected }
							indeterminate={ indeterminate }
							disabled={ disabled }
							onChange={ handleCheckboxChange }
							aria-label={ selected ? 'Deselect all' : 'Select all' }
						/>
					</th>
				) }
				{ children }
			</tr>
		</thead>
	);
};

export const TableHeadCell: React.FC<TableHeadCellProps> = ( {
	children,
	className,
} ) => {
	return (
		<th
			scope="col"
			className={ cn(
				'p-3 text-left text-sm font-medium leading-5 text-text-primary',
				className
			) }
		>
			{ children }
		</th>
	);
};

// Body Components
export const TableBody: React.FC<TableBodyProps> = ( {
	children,
	className,
} ) => {
	return (
		<tbody
			className={ cn(
				'bg-background-primary divide-y divide-x-0 divide-solid divide-border-subtle',
				className
			) }
		>
			{ children }
		</tbody>
	);
};

export const TableRow = <T, >( {
	children,
	selected,
	value,
	className,
	onChangeSelection,
}: TableRowProps<T> ) => {
	const { checkboxSelection } = useTableContext();

	const handleCheckboxChange = ( checked: boolean ) => {
		if ( typeof onChangeSelection !== 'function' ) {
			return;
		}
		onChangeSelection( checked, value as T );
	};

	return (
		<tr className={ cn( 'hover:bg-background-secondary', selected && 'bg-background-secondary', className ) }>
			{ checkboxSelection && (
				<td className="px-3.5 py-4.5 align-middle text-center">
					<Checkbox size="sm" checked={ selected } onChange={ handleCheckboxChange } aria-label="Select row" />
				</td>
			) }
			{ children }
		</tr>
	);
};

export const TableCell: React.FC<TableCellProps> = ( {
	children,
	className,
} ) => {
	return (
		<td
			className={ cn(
				'px-3 py-4.5 text-sm font-normal leading-5 text-text-secondary',
				className
			) }
		>
			{ children }
		</td>
	);
};

// Table Footer
export const TableFooter: React.FC<TableFooterProps> = ( {
	children,
	className,
} ) => {
	const { checkboxSelection } = useTableContext();
	return (
		<div
			className={ cn(
				'px-3 pb-4.5 pt-5.5',
				checkboxSelection && 'px-4',
				className,
			) }
		>
			{ children }
		</div>
	);
};

// Update display name
Table.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableHeadCell.displayName = 'Table.HeadCell';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableFooter.displayName = 'Table.Footer';

// Assign compound components
Table.Head = TableHead;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Footer = TableFooter;

export default Table;
