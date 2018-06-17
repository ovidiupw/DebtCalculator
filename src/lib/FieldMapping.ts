import {values as getObjectValues} from 'lodash';

/**
 * Defines the DebtCalculator specific mappings that should be used to map the input data to.
 */
const FieldMapping = {
  /**
   * TODO Link to the docs of the Payment object (to be created)
   */
  PaymentAmount: "Payment.Amount"
};

export default {
  ...FieldMapping,
  Values: getObjectValues(FieldMapping)
};
