import { ReturningFunction } from './types';
export default function wrap<F extends ReturningFunction, N extends number>(func: F, l?: N): any;
