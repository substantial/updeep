export declare function omit(predicate: string[] | string, collection: object): object;
interface CurriedOmit {
    (predicate: string[] | string, collection: object): object;
    (predicate: string[] | string): (collection: object) => object;
}
declare const _default: CurriedOmit;
export default _default;
