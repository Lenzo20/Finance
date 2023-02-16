import { Request, Response } from 'express';
import { PayDB } from '../../model/PayBD';

export async function deleteFinPay(req: Request, res: Response) {
  const id = req.params.id;

  if (id) {
    const fin = await PayDB.findById(id);

    if (!fin)
      return res.status(404).json({ msg: 'Arquivo inexistent' });
  }

  await PayDB.findByIdAndDelete(id);

  return res.json({ msg: 'Deletion successful' });
}
