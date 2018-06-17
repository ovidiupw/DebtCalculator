import DebtCalculator from '../src/debt-calculator';

describe('Debt calculator', () => {
  it('Should log the message passed into the constructor', () => {
    new DebtCalculator('Hello world!');
  });
});
