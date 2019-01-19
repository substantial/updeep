export declare function reject<C extends object>(predicate: any, collection: C): C extends any[] ? C : object;
interface CurriedReject {
    <C extends any[]>(predicate: any, collection: C): C;
    <C extends object>(predicate: any, collection: C): Array<C[keyof C]>;
    <C extends any[]>(predicate: any): (collection: C) => C;
    <C extends object>(predicate: any): (collection: C) => Array<C[keyof C]>;
}
declare const _default: CurriedReject;
export default _default;
