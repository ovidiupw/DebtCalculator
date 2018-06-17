import "reflect-metadata"; // Configure the DI framework: https://github.com/typestack/typedi#usage-with-typescript
import { Service, Inject } from "typedi";
import logger from './lib/log/logger';

/**
 * Used to calculate the debt between the various entities that are implicated in a payment.
 */
@Service("DebtCalculator")
class DebtCalculator {

  /**
   * Represents the path of the file that should be read in order to get the payment data.
   * Should be a valid path to an existing file.
   */
  paymentsFilePath: string;

  /**
   * Represents the path of the file that contains the payment configuration definition for the DebtCalculator.
   * See {@link PaymentConfigSchema} for the schema that the data that should be contained in the file.
   */
  paymentConfigFilePath: string;

  /**
   * Represents the path to the file that will be generated and which will contain the debt data between the
   * entities that are implicated in the payments defined in {@link paymentsFilePath}.
   */
  debtsFilePath: string;

  constructor(
    @Inject('Payments.File.Path') paymentsFilePath: string,
    @Inject('Payment.Config.File.Path') paymentConfigFilePath: string,
    @Inject('Debts.File.Path') debtsFilePath: string
  ) {
    //TODO validate inputs (i.e. if input files exist, if they are valid as of the data they contain etc.)

    this.paymentsFilePath = paymentsFilePath;
    this.paymentConfigFilePath = paymentConfigFilePath;
    this.debtsFilePath = debtsFilePath;

    logger.verbose('Payments.File.Path: %s', this.paymentsFilePath);
    logger.verbose('Payment.Config.File.Path: %s', this.paymentConfigFilePath);
    logger.verbose('Debts.File.Path: %s', this.debtsFilePath);
  }
}

export default DebtCalculator;
