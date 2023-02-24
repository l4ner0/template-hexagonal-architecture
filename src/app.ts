import dotenv from "dotenv";
import { ApplicationServerAdapter } from "./server/infrastructure/application-server.adapter";
import { Server } from "./server/domain/server";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const host: string = process.env.HOST || "0.0.0.0";
const port: string = process.env.PORT || "3000";

try {
  const applicationServerAdapter = new ApplicationServerAdapter();
  new Server(applicationServerAdapter, host, port).run();
} catch (error) {
  console.log(error);
  process.exit(1);
}
