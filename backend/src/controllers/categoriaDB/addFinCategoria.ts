import { Request, Response } from 'express';
import { CategoriaDB } from '../../model/CategoriaDB';


export async function addFinCategoria(req: Request, res: Response) {
  try {
    const { name } = req.body;

    if (!name)
      return res.status(400).json({ msg: 'Name is required' });

    const fin = await CategoriaDB.create({ name });

    return res.status(201).json(fin);
  } catch (err) {
    console.error(err);

    return res.sendStatus(404);
  }
}
