import { Server } from "http";
export interface ApplicationServerPort {
  listen(host: string, port: string): Promise<Server>;
  configRouters(): void;
  configMiddlewares(): void;
}
