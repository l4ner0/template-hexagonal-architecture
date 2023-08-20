import dotenv from 'dotenv';
import { WinstonAdapter } from './libs/log/winston.adapter';
import { ApplicationServer } from './server/application-server';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const log = new WinstonAdapter();

const host: string = process.env.HOST || '0.0.0.0';
const port: string = process.env.PORT || '3000';

try {
  new ApplicationServer().run(host, port);
} catch (error: Error | unknown) {
  if (error instanceof Error) {
    log.error(error.message);
  }
  process.exit(1);
}
