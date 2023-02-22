import express, { Express } from 'express';
import Router from 'express-promise-router';
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

        /* Config Middelware */
        const router = Router();
        this.app.use(router);
        registerRoutes(router);
    }

    public async listen(): Promise<void> {
        return new Promise(resolve  => {
            this.httpServer =  this.app.listen(this.port, () => {
                console.log(`MS is running at http://${this.host}:${this.port} in ${process.env.ENVIRONMENT} mode`);
                console.log('  Press CTRL-C to stop\n');
                resolve();
            })
        })
    }

    public async stop(): Promise<void> {
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