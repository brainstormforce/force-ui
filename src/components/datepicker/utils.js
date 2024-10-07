import { format } from 'date-fns';

export const currentTimeDot = () => {
	return (
		<span className="bg-blue-500 h-1 w-1 absolute rounded-full inline-block bottom-0 left-1/2 right-1/2"></span>
	);
};

export const formatWeekdayName = ( date ) => {
	return format( date, 'E' ).slice( 0, 1 ); // Returns only the first letter
};

export const generateYearRange = ( start, count = 24 ) => {
	return Array.from( { length: count }, ( _, i ) => start + i );
};
