import { Server } from '../../domain/server';

import { ApplicationServerAdapter } from '../express/application-server.adapter';
import { LoggerAdapter } from '../logger/logger.adapter';

const applicationServerAdapter = new ApplicationServerAdapter();
const loggerAdapter = new LoggerAdapter();

export const server = new Server(applicationServerAdapter, loggerAdapter);
