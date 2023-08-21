import dotenv from 'dotenv';
import { WinstonAdapter } from './libs/log/winston.adapter';
import { ApplicationServer } from './server/application-server';
import * as sentry from '@sentry/node'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const log = new WinstonAdapter();


// or use ESM import statements
// import * as Sentry from '@sentry/node';

sentry.init({
  dsn: "https://458869cf1e298b7de929a4be5da1c627@o4504001157267456.ingest.sentry.io/4505740874940416",
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

/* const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99); */

const host: string = process.env.HOST || '0.0.0.0';
const port: string = process.env.PORT || '3000';

try {
  new ApplicationServer().run(host, port);
} catch (error: Error | unknown) {
  sentry.captureException(error);
  if (error instanceof Error) {
    log.error(error.message);
  }
  process.exit(1);
}
