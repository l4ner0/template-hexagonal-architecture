import { ApplicationServerPort } from "./application-server.port";

export class Server {
  constructor(
    private app: ApplicationServerPort,
    private readonly host: string,
    private readonly port: string
  ) {
    this.app.configRouters();
    this.app.configMiddlewares();
  }

  async run(): Promise<void> {
    try {
      await this.app.listen(this.host, this.port);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
