import freeze from './freeze';
import warning from 'warning';

/**
 * Returns a function that always returns the supplied value.
 *
 * Useful for replacing an object outright rather than merging it.
 *
 * @function
 * @sig a -> (* -> a)
 * @memberOf u
 * @param  {*} value what to return from returned function.
 * @return {function} a new function that will always return value.
 *
 * @example
 * var alwaysFour = u.constant(4);
 * expect(alwaysFour(32)).toEqual(4);
 *
 * @example
 * var user = {
 *   name: 'Mitch',
 *   favorites: {
 *     band: 'Nirvana',
 *     movie: 'The Matrix'
 *   }
 * };
 *
 * var newFavorites = {
 *   band: 'Coldplay'
 * };
 *
 * var result = u({ favorites: u.constant(newFavorites) }, user);
 *
 * expect(result).toEqual({ name: 'Mitch', favorites: { band: 'Coldplay' } });
 */
function constant(value) {
  warning(false, 'u.constant is going to be removed, please use `() => value` instead.');
  const frozen = freeze(value);
  return () => frozen;
}

export default constant;
