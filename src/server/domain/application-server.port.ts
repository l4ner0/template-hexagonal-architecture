import { Server } from "http";
export interface ApplicationServerPort {
  listen(host: string, port: string, callaback?: Function): Promise<Server>;
  configRouters(): void;
  configMiddlewares(): void;
}
