const update = require('app/utils/update/update');

module.exports = function withDefault(defaultValue, updates) {
  return (value) => {
    if (typeof value === "undefined") {
      return update(updates, defaultValue);
    }

    return update(updates, value);
  };
};
