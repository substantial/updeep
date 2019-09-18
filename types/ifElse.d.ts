import { Predicate, MergedUpdate, FalsePredicate, TruePredicate } from './types';
export declare function updateIfElse<S, TU, FU>(predicate: TruePredicate<S>, trueUpdates: TU, falseUpdates: FU, object: S): MergedUpdate<TU, S>;
export declare function updateIfElse<S, TU, FU>(predicate: FalsePredicate<S>, trueUpdates: TU, falseUpdates: FU, object: S): MergedUpdate<FU, S>;
interface CurriedIfElse {
    <S, TU, FU>(predicate: TruePredicate<S>, trueUpdates: TU, falseUpdates: FU, object: S): MergedUpdate<TU, S>;
    <S, TU, FU>(predicate: FalsePredicate<S>, trueUpdates: TU, falseUpdates: FU, object: S): MergedUpdate<FU, S>;
    <S, TU, FU>(predicate: Predicate<S>, trueUpdates: TU, falseUpdates: FU, object: S): MergedUpdate<TU, S> | MergedUpdate<FU, S>;
    <S, TU, FU>(predicate: TruePredicate<S>, trueUpdates: TU, falseUpdates: FU): (object: S) => MergedUpdate<TU, S>;
    <S, TU, FU>(predicate: FalsePredicate<S>, trueUpdates: TU, falseUpdates: FU): (object: S) => MergedUpdate<FU, S>;
    <S, TU, FU>(predicate: Predicate<S>, trueUpdates: TU, falseUpdates: FU): (object: S) => MergedUpdate<TU, S> | MergedUpdate<FU, S>;
}
declare const _default: CurriedIfElse;
export default _default;
