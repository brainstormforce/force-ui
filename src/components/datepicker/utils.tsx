import { format } from 'date-fns';

export const currentTimeDot = () => {
	return (
		<span className="bg-icon-interactive h-1 w-1 absolute rounded-full inline-block bottom-0 left-1/2 right-1/2"></span>
	);
};

export const formatWeekdayName = ( date: Date ) => {
	return format( date, 'E' ).slice( 0, 1 ); // Returns only the first letter
};

export const generateYearRange = ( start: number, count = 24 ) => {
	return Array.from( { length: count }, ( _, i ) => start + i );
};

export const getDefaultSelectedValue = ( type: string ) => {
	if ( type === 'multiple' ) {
		return [];
	}
	if ( type === 'range' ) {
		return { from: null, to: null };
	}
	return null;
};
