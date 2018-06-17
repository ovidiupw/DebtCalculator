import { values as getObjectValues } from 'lodash';

/**
 * Represents a file format (e.g. JSON, CSV).
 */
const FileFormat = {
  CSV: 'csv',
  JSON: 'json'
}

export default {
  ...FileFormat,
  Values: getObjectValues(FileFormat)
};
