import dotenv from 'dotenv';
import { server } from './server/infrastructure/dependencies/server.dependency';

const log = require('./libs/logs/winston');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const host: string = process.env.HOST || '0.0.0.0';
const port: string = process.env.PORT || '3000';

try {
  server.run(host, port);
} catch (error) {
  console.error(error);
  process.exit(1);
}
