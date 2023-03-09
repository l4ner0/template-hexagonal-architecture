import { LogPort } from "./log.port";
const { createLogger, format, transports } = require("winston");

export class LogWinstonAdapter implements LogPort {
  private tsFormat(): string {
    return `${new Date().toLocaleDateString("en-US", {
      timeZone: "America/Lima",
    })} - ${new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Lima",
    })}`;
  }

  info(message: string): void {
    const logger = createLogger({
      format: format.combine(
        format.colorize(),
        format.printf(
          (info: any) => `${this.tsFormat()} - ${info.level}: ${info.message}`
        )
      ),
      transports: [new transports.Console()],
    });
    logger.info(message);
  }

  error(message: string): void {
    console.log(message);
  }
}
