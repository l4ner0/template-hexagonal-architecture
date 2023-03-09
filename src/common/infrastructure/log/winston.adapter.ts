import { createLogger, format, transports, Logger } from 'winston';
import { LogPort } from '../../domain/log/log.port';

export class WinstonAdapter implements LogPort {
  private readonly logger: Logger;
  private readonly tsFormat: string = `${new Date().toLocaleDateString('en-US', {
    timeZone: 'America/Lima',
  })} - ${new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/Lima',
  })}`;
  constructor() {
    this.logger = createLogger({
      format: format.combine(
        format.colorize(),
        format.printf((info) => `${this.tsFormat} - ${info.level}: ${info.message}`),
      ),
      transports: [new transports.Console()],
    });
  }

  info(message: string): void {
    this.logger.info(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }
}
