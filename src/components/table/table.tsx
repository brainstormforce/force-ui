import { cn } from '@/utilities/functions';
import React, { Children, createContext, useContext, type ReactNode } from 'react';

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
export interface TableContextType {
	/**
	 * Set of indices for selected rows.
	 */
	selectedRows?: Set<number>;
	/**
	 * Whether to show checkboxes for row selection.
	 */
	checkboxSelection?: boolean;
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
export interface TableRowProps extends TableCommonProps {
	/**
	 * Child components to render within the table row.
	 */
	children?: ReactNode;
	/**
	 * value of the row.
	 */
	value?: string;
	/**
	 * Whether the row is selected.
	 */
	selected?: boolean;
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

const TableContext = createContext<TableContextType | undefined>( undefined );

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
	const contextValue: TableContextType = {
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
		<TableContext.Provider value={ contextValue }>
			<div className="overflow-x-auto">
				<table
					className={ cn(
						'min-w-full border-collapse border-spacing-0 mb-1',
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
export const TableHead: React.FC<TableHeadProps> = ( { children } ) => {
	return (
		<thead className="bg-background-secondary [clip-path:inset(0_0_0_0_round_0.375rem)]">
			<tr>{ children }</tr>
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

export const TableRow: React.FC<TableRowProps> = ( {
	children,
	selected,
	className,
} ) => {
	return (
		<tr className={ cn( selected && 'bg-background-secondary', className ) }>
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
				'px-3 py-4.5 border-t border-x-0 border-b-0 border-solid border-border-subtle',
				checkboxSelection && 'px-4 py-4.5',
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
