import { Request, Response } from 'express';
import { FinanceBD } from '../model/FinanceBD';

export async function deleteFin(req: Request, res: Response) {
  const id = req.params.id;

  const fin = await FinanceBD.findOne({ _id: id });

  if (!fin)
    return res.status(404).json({ msg: 'Arquivo inexistent' });

  fin.delete();
}
