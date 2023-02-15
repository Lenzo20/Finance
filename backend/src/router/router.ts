import { Router } from 'express';
import { addFinDebtor } from '../controllers/debtorBD/addFinDebtor';
import { deleteFinDebtor } from '../controllers/debtorBD/deleteFinDebtor';
import { findFinDebtor } from '../controllers/debtorBD/findFinDebtor';
import { findFinPay } from '../controllers/payBD/findFinPay';
import { addFinPay } from '../controllers/payBD/addFinPay';
import { deleteFinPay } from '../controllers/payBD/deleteFinPay';

const router = Router();

router.get('/test', (req, res) => {
  res.send('Hello World!');
});

// Routas Para o Banco Pagar/Pay

// Ver arquivos do banco
router.get('/findFinPay', findFinPay);

// Cadrastar
router.post('/addFinPay', addFinPay);

// Deletar
router.delete('/deleteFinPay', deleteFinPay);


// Rotas Para o Banco Devedor/debtor

// Ver arquivos do banco
router.get('/findFinDebtor', findFinDebtor);

// Cadrastar
router.post('/addFinDebtor', addFinDebtor);

// Deletar
router.delete('/deleteFinDebtor', deleteFinDebtor);


export default router;
