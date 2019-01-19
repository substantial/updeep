import { Predicate, MergedUpdate, TruePredicate, FalsePredicate } from './types';
export declare function uIf<TU, O>(predicate: FalsePredicate<O>, trueUpdates: TU, object: O): O;
export declare function uIf<TU, O>(predicate: TruePredicate<O>, trueUpdates: TU, object: O): MergedUpdate<TU, O>;
interface CurriedIf {
    <TU, O>(predicate: TruePredicate<O>, trueUpdates: TU, object: O): MergedUpdate<TU, O>;
    <TU, O>(predicate: FalsePredicate<O>, trueUpdates: TU, object: O): O;
    <TU, O>(predicate: Predicate<O>, trueUpdates: TU, object: O): MergedUpdate<TU, O> | O;
    <TU, O>(predicate: TruePredicate<O>, trueUpdates: TU): (object: O) => MergedUpdate<TU, O>;
    <TU, O>(predicate: FalsePredicate<O>, trueUpdates: TU): (object: O) => O;
    <TU, O>(predicate: Predicate<O>, trueUpdates: TU): (object: O) => MergedUpdate<TU, O> | O;
}
declare const _default: CurriedIf;
export default _default;
