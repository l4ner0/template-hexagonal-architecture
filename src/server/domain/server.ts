import { ApplicationServerPort } from './ports/application-server.port';
import { LogPort } from '../../common/domain/log/log.port';

export class Server {
  constructor(private app: ApplicationServerPort, private readonly log: LogPort) {
    this.app.configRouters();
    this.app.configMiddlewares();
  }

  async run(host: string, port: string): Promise<void> {
    await this.app.listen(host, port, () => {
      this.log.info(`MS is running at http://${host}:${port} in ${process.env.ENVIRONMENT} mode`);
      this.log.info('Press CTRL-C to stop\n');
    });
  }
}
