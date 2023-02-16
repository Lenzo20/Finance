import { Request, Response } from 'express';
import { CategoriaDB } from '../../model/CategoriaDB';

export async function findFinCategoria(req: Request, res: Response) {
  const fin = await CategoriaDB.find();

  return res.status(200).json(fin);
}
