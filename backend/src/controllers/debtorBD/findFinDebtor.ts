import { Request, Response } from 'express';
import { debtorBD } from './../../model/debtorBD';

export async function findFinDebtor(_req: Request, res: Response) {
  const fin = await debtorBD.find().populate('categoria.categoriaId').sort('name');

  return res.status(200).json(fin);
}
