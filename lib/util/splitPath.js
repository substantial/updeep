import reject from 'lodash/reject';
import toString from 'lodash/toString';

export default function splitPath(path) {
  return Array.isArray(path) ?
    path :
    reject(toString(path).split('.'), x => !x);
}
