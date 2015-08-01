import update from './update';

export default function withDefault(defaultValue, updates) {
  return (value) => {
    if (typeof value === 'undefined') {
      return update(updates, defaultValue);
    }

    return update(updates, value);
  };
}
