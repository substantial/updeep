export declare const _ = "@@updeep/placeholder";
interface SprawlingCurry<R, A extends any[]> {
    (...args: A): R;
    (): SprawlingCurry<R, A>;
}
export declare function curry1<R, A>(fn: (a: A) => R): SprawlingCurry<R, [A]>;
export declare function curry1<R, A>(fn: (a: A, ...args: any) => R): SprawlingCurry<R, [A, ...any[]]>;
export declare function curry2(fn: any): any;
export declare function curry3(fn: any): any;
export declare function curry4(fn: any): any;
export default function curry(fn: (...args: any[]) => any, length?: 1 | 2 | 3 | 4): any;
export {};
