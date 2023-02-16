import { Request, Response } from 'express';
import { CategoriaDB } from '../../model/CategoriaDB';

export async function deleteFinCategoria(req: Request, res: Response) {
  const id = req.params.id;

  if (id) {
    const fin = await CategoriaDB.findById(id);

    if (!fin)
      return res.json({ msg: 'Categoria inexistent' });
  }

  await CategoriaDB.findByIdAndDelete(id);

  return res.json({ msg: 'Deletion successful' });
}
