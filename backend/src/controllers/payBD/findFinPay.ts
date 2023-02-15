import { Request, Response } from 'express';
import { PayDB } from '../../model/PayBD';

export async function findFinPay(req: Request, res: Response) {
  const fin = await PayDB.find();

  return res.status(200).json(fin);
}
