const { createLogger, format, transports } = require("winston");

const tsFormat = () =>
  `${new Date().toLocaleDateString("en-US", {
    timeZone: "America/Lima",
  })} - ${new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Lima",
  })}`;

module.exports = createLogger({
  format: format.combine(
    format.colorize(),
    format.printf(
      (info: any) => `${tsFormat()} - ${info.level}: ${info.message}`
    )
  ),
  transports: [new transports.Console()],
});
