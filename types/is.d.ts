import { Path } from './types';
export declare function is(path: Path, predicate: any, object: any): boolean;
interface CurriedIs {
    (path: Path, predicate: any, object: any): boolean;
    (path: Path, predicate: any): (object: any) => boolean;
    (path: Path): (predicate: any) => (object: any) => boolean;
}
declare const _default: CurriedIs;
export default _default;
