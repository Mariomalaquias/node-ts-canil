//fazemos 1 controller apenas para todos, Cahorros, Gatos, Peixes pq a pagina é a mesma  muda apenas os dados .

import {Request, Response} from 'express';

export const home = (req: Request, res: Response) => {
    res.send('home no controller!');
}

export const dogs = (req: Request, res: Response) => {
    
}

export const cats = (req: Request, res: Response) => {
    
}

export const fishes = (req: Request, res: Response) => {
    
}
