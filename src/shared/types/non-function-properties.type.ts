type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];

/*
 *
 * Exclude all function types from type
 */
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
