import freeze from './freeze';

export default function constant(object) {
  const frozen = freeze(object);
  return () => frozen;
}
