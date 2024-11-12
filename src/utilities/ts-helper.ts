/**
 * Extracts the props type from a React component.
 *
 * @param T - React component.
 * @return Props type of the React component.
 *
 * @example type TopbarProps = ComponentProps<typeof Topbar>;
 */
export type ComponentProps<T> =
	T extends React.ComponentType<infer P> ? P : never;

/**
 * Extract the type of the Play function from a Story object.
 *
 * @param T - Story object.
 *
 * @return Type of the Play function.
 *
 * @example
 *
 * type PlayFunction = PlayFunc<Story>;
 * // or
 * type PlayFunction = PlayFunc<StoryFn<typeof YourComponent>>;
 * // or
 * type PlayFunction = PlayFunc<StoryObj<typeof YourComponent>>;
 */
export type PlayFunc<T> = T extends { play?: infer P } ? P : never;
