import { Request, Response } from 'express';
import { BeadDB } from '../../model/BeadBD';

export async function deleteFinBead(req: Request, res: Response) {
  const id = req.params.id;

  if (id) {
    const fin = await BeadDB.findById(id);

    if (!fin)
      return res.json({ msg: 'Categoria inexistent' });
  }

  await BeadDB.findByIdAndDelete(id);

  return res.json({ msg: 'Deletion successful' });
}
