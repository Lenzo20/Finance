import { Request, Response } from 'express';
import { debtorBD } from '../../model/debtorBD';

export async function addFinDebtor(req: Request, res: Response) {
  try {
    const { value, name } = req.body;

    if (!value)
      return res.status(400).json({ msg: 'value is required' });

    const fin = await debtorBD.create({ value });

    if (name)
      fin.name = name;

    fin.save();

    return res.status(201).json(fin);
  } catch (err) {
    console.error(err);

  }
}
