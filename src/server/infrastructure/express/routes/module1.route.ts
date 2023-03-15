import { Request, Response, Router } from 'express';

import httpStatus from 'http-status';
export const routes = (router: Router): void => {
  router.get('/modulo1/status', (req: Request, res: Response) => {
    res.status(httpStatus.OK).send({ message: 'Welcome to module1' });
  });
};
