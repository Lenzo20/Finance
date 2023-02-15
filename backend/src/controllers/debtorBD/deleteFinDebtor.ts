import { Request, Response } from 'express';
import { debtorBD } from '../../model/debtorBD';

export async function deleteFinDebtor(req: Request, res: Response) {
  const id = req.params.id;

  const fin = await debtorBD.findOne({ _id: id });

  if (!fin)
    return res.status(404).json({ msg: 'Arquivo inexistent' });

  fin.delete();

  return res.json({ msg: 'Deletion successful' });
}
