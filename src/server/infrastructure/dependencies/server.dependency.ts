import { Server } from '../../domain/server';

import { ApplicationServerAdapter } from '../express/application-server.adapter';
import { WinstonAdapter } from '../../../common/infrastructure/log/winston.adapter';

const applicationServerAdapter = new ApplicationServerAdapter();
const winstonAdapter = new WinstonAdapter();

export const server = new Server(applicationServerAdapter, winstonAdapter);
