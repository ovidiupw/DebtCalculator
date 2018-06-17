import "reflect-metadata"; // Configure the DI framework: https://github.com/typestack/typedi#usage-with-typescript
import {Service, Inject} from "typedi";

import logger from './lib/log/logger';

@Service("DebtCalculator")
class DebtCalculator {

  constructor(@Inject('DebtCalculator.Message') message: string) {
    logger.info(message);
  }

}

export default DebtCalculator;
