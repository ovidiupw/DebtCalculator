import FileFormat from '../FileFormat';
import FiledType from '../FiledType';
import FieldMapping from '../FieldMapping';

/**
 * Defines the JSON schema of the payment config file.
 *
 * The payment config file defines the type of the input file (i.e. CSV, JSON etc.) and the mappings between the fields
 * in the input file and their semantics as defined inside the DebtCalculator application.
 */
const PaymentConfigSchema = {
  "id": "/PaymentConfig",
  "type": "object",
  "properties": {
    "InputFileFormat": {
      "type": "string",
      "enum": FileFormat.Values
    },
    "InputMappings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "FieldName": {
            "type": "string"
          },
          "FieldType": {
            "type": "string",
            "enum": FiledType.Values
          },
          "FieldMapping": {
            "type": "string",
            "enum": FieldMapping.Values
          }
        },
        "required": ["FieldName", "FieldType", "FieldMapping"]
      }
    }
  },
  "required": ["InputFileFormat", "InputMappings"]
}

export default PaymentConfigSchema;
