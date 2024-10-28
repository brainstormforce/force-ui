
/** 
 * Extracts the props type from a React component.
 *  
* @param T - React component.
 * @returns Props type of the React component.
 * 
 * @example type TopbarProps = ComponentProps<typeof Topbar>;
*/
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;