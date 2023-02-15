import { Request, Response } from 'express';
import { BeadDB } from '../../model/BeadBD';

export async function addFinBead(req: Request, res: Response) {
  try {
    const { value, name, description, dueDate } = req.body;

    if (!value)
      return res.status(400).json({ msg: 'value is required' });

    const fin = await BeadDB.create({ value, description });

    if (name)
      fin.name = name;

    if (dueDate)
      fin.dueDate = dueDate;

    fin.save();

    return res.status(201).json(fin);
  } catch (err) {
    console.error(err);

  }
}
