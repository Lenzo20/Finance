import { Request, Response } from 'express';
import { BeadDB } from '../../model/BeadBD';

export async function findFinBead(_req: Request, res: Response) {
  const fin = await BeadDB.find().populate('categoria.categoriaId').sort('name');

  return res.status(200).json(fin);
}
