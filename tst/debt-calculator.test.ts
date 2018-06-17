import DebtCalculator from '../src/debt-calculator';
import {Container} from "typedi";
import {expect} from 'chai';

describe('Debt Calculator', () => {

  const PAYMENTS_CSV_FILE_PATH = './data/payments.csv';
  const PAYMENT_CONFIG_FILE_PATH = './data/payment-config.json';
  const DEBTS_FILE_PATH = '../output/debts.json';

  it('Should be successfully constructed when payments file and payment config file exist', () => {
    Container.set([
      {id: 'Payments.File.Path', value: PAYMENTS_CSV_FILE_PATH},
      {id: 'Payment.Config.File.Path', value: PAYMENT_CONFIG_FILE_PATH},
      {id: 'Debts.File.Path', value: DEBTS_FILE_PATH}
    ]);
    const debtCalculator = Container.get(DebtCalculator);

    expect(debtCalculator.paymentsFilePath).to.equal(PAYMENTS_CSV_FILE_PATH);
    expect(debtCalculator.paymentConfigFilePath).to.equal(PAYMENT_CONFIG_FILE_PATH);
    expect(debtCalculator.debtsFilePath).to.equal(DEBTS_FILE_PATH);
  });
});
