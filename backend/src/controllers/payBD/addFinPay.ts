import { Request, Response } from 'express';
import { PayDB } from '../../model/PayBD';

export async function addFinPay(req: Request, res: Response) {
  try {
    const { value, name, dueDate } = req.body;

    if (!value)
      return res.status(400).json({ msg: 'value is required' });

    const fin = await PayDB.create({ value });

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
