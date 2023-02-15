import { Request, Response } from 'express';
import { PayDB } from '../../model/PayBD';

export async function deleteFinPay(req: Request, res: Response) {
  const id = req.params.id;

  const fin = await PayDB.findOne({ id: id });

  if (!fin)
    return res.status(404).json({ msg: 'Arquivo inexistent' });

  fin.delete();

  return res.json({ msg: 'Deletion successful' });
}
