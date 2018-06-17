import {values as getObjectValues} from 'lodash';

/**
 * Defines types of data. These may be interpreted differently based on the context
 * (i.e. whether read from CSV or JSON).
 */
const FieldType = {
  String: "String",
  Number: "Number"
};

export default {
  ...FieldType,
  Values: getObjectValues(FieldType)
};
