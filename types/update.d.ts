import { MergedUpdate, UpdateReturnType } from './types';
export declare const omitted: (...args: any[]) => {
    __omitted: boolean;
};
/**
 * Recursively update an object or array.
 *
 * Can update with values:
 * update({ foo: 3 }, { foo: 1, bar: 2 });
 * // => { foo: 3, bar: 2 }
 *
 * Or with a function:
 * update({ foo: x => (x + 1) }, { foo: 2 });
 * // => { foo: 3 }
 *
 */
export declare function update<U>(updates: U extends object ? never : U, object: any): U;
export declare function update<U, O>(updates: U, object: O extends object ? never : O): UpdateReturnType<U>;
export declare function update<U, O>(updates: U, object: O, ...args: any[]): MergedUpdate<U, O>;
interface CurriedUpdate1<U> {
    <O>(object: O extends object ? never : O): UpdateReturnType<U>;
    <O>(object: O, ...args: any[]): MergedUpdate<U, O>;
}
interface CurriedUpdate {
    <U>(updates: U extends object ? never : U, object: any): U;
    <U, O>(updates: U, object: O extends object ? never : O): UpdateReturnType<U>;
    <U, O>(updates: U, object: O, ...args: any[]): MergedUpdate<U, O>;
    <U>(updates: U extends object ? never : U): (object: any) => U;
    <U>(updates: U): CurriedUpdate1<U>;
}
declare const _default: CurriedUpdate;
export default _default;
