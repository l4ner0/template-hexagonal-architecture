import { createLogger, format, transports } from 'winston';

const tsFormat = () =>
  `${new Date().toLocaleDateString('en-US', {
    timeZone: 'America/Lima',
  })} - ${new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/Lima',
  })}`;

export const log = createLogger({
  format: format.combine(
    format.colorize(),
    format.printf((info) => `${tsFormat()} - ${info.level}: ${info.message}`),
  ),
  transports: [new transports.Console()],
});
