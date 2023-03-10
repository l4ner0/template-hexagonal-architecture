/* eslint-disable  @typescript-eslint/no-explicit-any */
import dotenv from 'dotenv';
import { server } from './server/infrastructure/dependencies/server.dependency';
import { WinstonAdapter } from './common/infrastructure/log/winston.adapter';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const log = new WinstonAdapter();

const host: string = process.env.HOST || '0.0.0.0';
const port: string = process.env.PORT || '3000';

try {
  server.run(host, port);
} catch (error: Error | unknown) {
  if (error instanceof Error) {
    log.error(error.message);
  }

  process.exit(1);
}
