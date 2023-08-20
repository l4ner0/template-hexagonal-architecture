import express, { Express, Router } from 'express';
import { json, urlencoded } from 'body-parser';
import { xssFilter, noSniff, hidePoweredBy, frameguard } from 'helmet';
import compress from 'compression';
import { registerRoutes } from './routes';
import { Server } from 'http';
import { WinstonAdapter } from '../libs/log/winston.adapter';

export class ApplicationServer {
  private app: Express;
  private log: WinstonAdapter;

  constructor() {
    this.app = express();
    this.log = new WinstonAdapter();
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(xssFilter());
    this.app.use(noSniff());
    this.app.use(hidePoweredBy());
    this.app.use(frameguard({ action: 'deny' }));
    this.app.use(compress());
    const router = Router();
    this.app.use(router);
    registerRoutes(router);
  }

  run(host: string, port: string): Promise<Server> {
    return new Promise((resolve) => {
      const httpServer = this.app.listen(port, () => {
        this.log.info(`MS is running at http://${host}:${port} in ${process.env.ENVIRONMENT} mode`);
        this.log.info('Press CTRL-C to stop\n');
        resolve(httpServer);
      });
    });
  }
}
