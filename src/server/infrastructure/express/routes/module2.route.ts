import { Request, Response, Router } from 'express';

export const routes = (router: Router): void => {
    router.get('/modulo2/status', (req: Request, res: Response) => {res.status(200).send({message: 'Welcome to module2'})})
}