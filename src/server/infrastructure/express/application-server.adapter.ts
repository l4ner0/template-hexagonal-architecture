import express, { Express, Router } from "express";
import { json, urlencoded } from "body-parser";
import { xssFilter, noSniff, hidePoweredBy, frameguard } from "helmet";
import compress from "compression";
import { registerRoutes } from "./routes";
import { Server } from "http";
import { ApplicationServerPort } from "../../domain/ports/application-server.port";

export class ApplicationServerAdapter implements ApplicationServerPort {
  private app: Express;

  constructor() {
    this.app = express();
  }

  configRouters(): void {
    const router = Router();
    this.app.use(router);
    registerRoutes(router);
  }

  configMiddlewares(): void {
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(xssFilter());
    this.app.use(noSniff());
    this.app.use(hidePoweredBy());
    this.app.use(frameguard({ action: "deny" }));
    this.app.use(compress());
  }

  listen(host: string, port: string, callback: Function): Promise<Server> {
    return new Promise((resolve) => {
      const httpServer = this.app.listen(port, () => {
        callback();
        resolve(httpServer);
      });
    });
  }
}
