import { Request, Response } from 'express';
import { BeadDB } from '../../model/BeadBD';

export async function addFinBead(req: Request, res: Response) {
  try {
    const { value, name, description, dueDate, categoria } = req.body;

    if (!value)
      return res.status(400).json({ msg: 'value is required' });

    const fin = await BeadDB.create({ value, description });

    if (name)
      fin.name = name;

    if (dueDate)
      fin.dueDate = dueDate;

    if (categoria)
      fin.categoria = categoria;

    fin.save();

    return res.status(201).json(fin);
  } catch (err) {
    console.error(err);

    return res.sendStatus(404);
  }
}
