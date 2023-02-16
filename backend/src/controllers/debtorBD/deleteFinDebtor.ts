import { Request, Response } from 'express';
import { debtorBD } from '../../model/debtorBD';

export async function deleteFinDebtor(req: Request, res: Response) {
  const id = req.params.id;

  if (id) {
    const fin = await debtorBD.findById(id);

    if (!fin)
      return res.status(404).json({ msg: 'Arquivo inexistent' });
  }

  await debtorBD.findByIdAndDelete(id);

  return res.json({ msg: 'Deletion successful' });
}
