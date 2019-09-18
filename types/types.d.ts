export declare type Updates = any;
export declare type Source = any;
export declare type PathPart = number | string;
export declare type Path = PathPart | PathPart[];
export declare type TruePredicate<S = any> = true | ((a: S) => true);
export declare type FalsePredicate<S = any> = false | ((a: S) => false);
export declare type Predicate<S = any> = boolean | ((arg: S) => boolean);
export declare type MergedUpdate<U, O> = O extends object ? (UpdateReturnType<U> extends object ? object : UpdateReturnType<U>) : UpdateReturnType<U>;
export declare type UpdateReturnMap<T> = {
    [K in keyof T]: UpdateReturnType<T[K]>;
};
export declare type UpdateReturnType<U> = U extends (object: any) => any ? ReturnType<U> : U extends object ? UpdateReturnMap<U> : U;
export declare type ReturningFunction = (...args: any[]) => any;
export declare type ArgumentsType<F extends (...args: any[]) => any> = F extends (...args: infer A) => any ? A : never;
