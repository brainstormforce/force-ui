export const getElementPositionRelativeToScreen = (
	element: HTMLElement | null
) => {
	if ( ! element ) {
		return { error: 'Element not found.' };
	}

	const elementRect = element.getBoundingClientRect();
	const viewportWidth = window.innerWidth;
	const viewportCenter = viewportWidth / 2;

	const isLeft = elementRect.right < viewportCenter;
	const isRight = elementRect.left > viewportCenter;
	const isCenter = ! isLeft && ! isRight;

	return {
		isLeft,
		isRight,
		isCenter,
		elementRect: {
			left: elementRect.left,
			right: elementRect.right,
			width: elementRect.width,
		},
		viewport: {
			width: viewportWidth,
			center: viewportCenter,
		},
	};
};
