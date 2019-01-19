import { Path } from './types';
export declare function updateIn(path: Path, value: any, object: any): any;
interface Curry2 {
    (value: any, object: any): any;
    (value: any): (object: any) => any;
}
interface CurriedUpdateIn {
    (path: Path, value: any, object: any): any;
    (path: Path): Curry2;
}
declare const _default: CurriedUpdateIn;
export default _default;
