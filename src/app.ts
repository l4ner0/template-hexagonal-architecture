import dotenv from "dotenv";
import { ApplicationServerAdapter } from "./server/infrastructure/express/application-server.adapter";
import { LoggerAdapter } from "./server/infrastructure/logger/logger.adapter";
import { Server } from "./server/domain/server";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const host: string = process.env.HOST || "0.0.0.0";
const port: string = process.env.PORT || "3000";

try {
  const applicationServerAdapter = new ApplicationServerAdapter();
  const loggerAdapter = new LoggerAdapter();

  new Server(applicationServerAdapter, loggerAdapter, host, port).run();
} catch (error) {
  console.log(error);
  process.exit(1);
}
