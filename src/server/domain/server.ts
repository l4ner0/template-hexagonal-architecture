import { ApplicationServerPort } from "./application-server.port";
import { LogPort } from "../../libs/log/log.port";

export class Server {
  constructor(
    private app: ApplicationServerPort,
    private readonly log: LogPort,

    private readonly host: string,
    private readonly port: string    
  ) {
    this.app.configRouters();
    this.app.configMiddlewares();
  }

  async run(): Promise<void> {
    try {
      await this.app.listen(this.host, this.port, () => {
        this.log.info(
          `MS is running at http://${this.host}:${this.port} in ${process.env.ENVIRONMENT} mode`
        );
        this.log.info("Press CTRL-C to stop\n");
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
