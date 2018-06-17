import logger from './lib/log/logger';

class DebtCalculator {
  constructor(message: string) {
    logger.info(message);
  }
}

export default DebtCalculator;
