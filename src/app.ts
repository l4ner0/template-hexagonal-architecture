import dotenv from 'dotenv';
import { ApplicationServer } from './server/application-server';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const host: string = process.env.HOST || '0.0.0.0';
const port: string = process.env.PORT || '3000';

try {
     new ApplicationServer(host, port).listen();
} catch (error) {
    console.log(error);
    process.exit(1);
}