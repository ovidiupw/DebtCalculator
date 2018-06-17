import DebtCalculator from '../src/debt-calculator';
import {Container} from "typedi";

describe('Debt Calculator', () => {
  it('Should log the message passed into the constructor', () => {
    Container.set([
      {id: 'DebtCalculator.Message', value: 'Hello world! DI is working!'}
    ])
    Container.get(DebtCalculator);
  });
});
