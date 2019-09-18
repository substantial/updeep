import { MergedUpdate } from './types';
export declare function withDefault<D, U, O>(defaultValue: D, updates: U, object: O): MergedUpdate<U, O extends null | undefined ? D : O>;
interface CurriedWithDefault {
    <D, U, O extends any>(defaultValue: D, updates: U, object: O): MergedUpdate<U, O extends null | undefined ? D : O>;
    <D, U>(defaultValue: D, updates: U): <O>(obj: O) => MergedUpdate<U, O extends null | undefined ? D : O>;
}
declare const _default: CurriedWithDefault;
export default _default;
