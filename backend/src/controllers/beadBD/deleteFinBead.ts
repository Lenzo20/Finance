import { Request, Response } from 'express';
import { BeadDB } from '../../model/BeadBD';

export async function deleteFinBead(req: Request, res: Response) {
  const id = req.params.id;

  const fin = await BeadDB.findOne({ _id: id });

  if (!fin)
    return res.status(404).json({ msg: 'Arquivo inexistent' });

  fin.delete();
}
