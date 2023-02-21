import dotenv from 'dotenv';
import { ApplicationServer } from './server/application-server';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

try {
    const host: string = '127.0.0.1';
    const port: string  = '3000';

    const server = new ApplicationServer(host, port);

    server.listen();
} catch (error) {
    console.log(error);
    process.exit(1);
}