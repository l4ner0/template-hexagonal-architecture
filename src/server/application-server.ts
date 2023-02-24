import express, { Express, Router } from 'express';
import { json, urlencoded } from 'body-parser';
import { xssFilter, noSniff, hidePoweredBy, frameguard } from 'helmet';
import compress from 'compression';
import { Server }from 'http';
import { registerRoutes } from './routes';

export class ApplicationServer {

    private app: Express;
    private host: string;
    private port: string;
    private httpServer?: Server;

    constructor(_host: string, _port: string) {
        this.app = express();
        this.host = _host;
        this.port = _port;
        
        /* Configure routes  */
        const router = Router();
        this.app.use(router);
        registerRoutes(router);

        /* Configure middlewares */
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use(xssFilter());
        this.app.use(noSniff());
        this.app.use(hidePoweredBy());
        this.app.use(frameguard({ action: 'deny' }));
        this.app.use(compress());      
    }

    public listen(): Promise<void> {
        return new Promise(resolve  => {
            this.httpServer =  this.app.listen(this.port, () => {
                console.log(`MS is running at http://${this.host}:${this.port} in ${process.env.ENVIRONMENT} mode`);
                console.log('  Press CTRL-C to stop\n');
                resolve();
            })
        })
    }

    public stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if(this.httpServer) {
                this.httpServer.close(error => {
                    if(error) {
                        return reject(error);
                    }
                    return resolve();
                })
            }
            return resolve();
        })
    }
}