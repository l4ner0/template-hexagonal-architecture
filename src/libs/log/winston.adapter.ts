import { createLogger, format, transports, Logger } from 'winston';
import { LogPort } from './log.port';

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

  info(message1: unknown, message2?: unknown): void {
    this.logger.info(this.formatMessage(message1, message2));
  }

  error(message1: unknown, message2?: unknown): void {
    this.logger.error(this.formatMessage(message1, message2));
  }

  formatMessage(message1: unknown, message2?: unknown): unknown {
    let finalMessage: unknown;
    if (message2) {
      finalMessage = this.isObject(message2) ? `${message1}${JSON.stringify(message2)}` : `${message1}${message2}`;
    } else {
      finalMessage = this.isObject(message1) ? JSON.stringify(message1) : message1;
    }
    return finalMessage;
  }

  isObject(value: unknown): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Error);
  }
}
