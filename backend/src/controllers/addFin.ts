import { Request, Response } from 'express';
import { FinanceBD } from '../model/FinanceBD';

export async function addFin(req: Request, res: Response) {
  try {
    const { value, name } = req.body;

    if (!value)
      return res.status(400).json({ msg: 'value is required' });

    const fin = await FinanceBD.create({ value });

    if (name)
      fin.name = name;

    fin.save();

    return res.status(201).json(fin);
  } catch (err) {
    console.error(err);

  }
}
