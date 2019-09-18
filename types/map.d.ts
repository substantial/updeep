import { MergedUpdate } from './types';
declare type Mapped<I, O extends object> = {
    [K in keyof O]: MergedUpdate<I, O[K]>;
};
export declare function map<I, O extends object>(iteratee: I, object: O): Mapped<I, O>;
interface CurriedMap {
    <I, O extends object>(iteratee: I, object: O): Mapped<I, O>;
    <I, O extends object>(iteratee: I): (object: O) => Mapped<I, O>;
}
declare const _default: CurriedMap;
export default _default;
