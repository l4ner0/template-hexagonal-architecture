import { Request, Response, Router } from 'express';

export const routes = (router: Router): void => {
    router.get('/modulo3/status', (req: Request, res: Response) => {res.status(200).send({message: 'Welcome to module3'})})
    router.post('/modulo3/status', (req: Request, res: Response) => {res.status(200).send({message: 'POST Welcome to module3'})})
}