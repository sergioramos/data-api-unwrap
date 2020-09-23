const IsUndefined = require('lodash.isundefined');

const getValue = (record) => {
  const { isNull } = record;
  if (isNull) {
    return null;
  }

  const staticValueKey = [
    'booleanValue',
    'booleanValues',
    'doubleValue',
    'doubleValues',
    'longValue',
    'longValues',
    'stringValue',
    'stringValues',
    'blobValue',
  ].find((key) => !IsUndefined(record[key]));
  if (staticValueKey) {
    return record[staticValueKey];
  }

  const { arrayValue } = record;
  if (!IsUndefined(arrayValue)) {
    return getValue(arrayValue);
  }

  const { arrayValues } = record;
  if (!Array.isArray(arrayValues)) {
    return arrayValues.map(getValue);
  }
};

module.exports = ({ records = [], columnMetadata: metadata = [] }) => {
  const labels = metadata.map(({ label }) => label);
  return records.map((record) => {
    return record.reduce((record, column, index) => {
      return Object.assign(record, {
        [labels[index]]: getValue(column),
      });
    }, {});
  });
};
