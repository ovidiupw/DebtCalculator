import winston from 'winston';
import path from 'path';

const LOGS_DIRECTORY = 'output/logs';
const ERROR_LOGS_FILE_NAME = 'error.log';
const COMBINED_LOGS_FILE_NAME = 'application.log';

/**
 * This logger should be used for any log statements in the application in order to have a centralized logging config.
 * Docs: https://github.com/winstonjs/winston
 */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: path.join(LOGS_DIRECTORY, ERROR_LOGS_FILE_NAME), level: 'error' }),
    new winston.transports.File({ filename: path.join(LOGS_DIRECTORY, COMBINED_LOGS_FILE_NAME) })
  ]
});

switch (process.env.NODE_LOG_LEVEL) {
  case 'error': logger.level = 'error'; break;
  case 'warn': logger.level = 'warn'; break;
  case 'info': logger.level = 'info'; break;
  case 'verbose': logger.level = 'verbose'; break;
  case 'debug': logger.level = 'debug'; break;
  case 'silly': logger.level = 'silly'; break;
  default: /* Keep the configuration as defined in the logger creation statement */
}

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;
