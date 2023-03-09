import { LogPort } from '../../domain/ports/log.port';
import { log } from '../../../libs/logs/winston';

export class LoggerAdapter implements LogPort {
  info(message: string): void {
    log.info(message);
  }
  error(message: string): void {
    log.error(message);
  }
}
