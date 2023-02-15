import { Router } from 'express';

import { findFinPay } from '../controllers/payBD/findFinPay';
import { addFinPay } from '../controllers/payBD/addFinPay';
import { deleteFinPay } from '../controllers/payBD/deleteFinPay';
import { findFinDebtor } from '../controllers/debtorBD/findFinDebtor';
import { addFinDebtor } from '../controllers/debtorBD/addFinDebtor';
import { deleteFinDebtor } from '../controllers/debtorBD/deleteFinDebtor';
import { findFinBead } from '../controllers/beadBD/findFinBead';
import { addFinBead } from '../controllers/beadBD/addFinBead';
import { deleteFinBead } from '../controllers/beadBD/deleteFinBead';

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


// Rotas Para o Banco Contas/Bead

// Ver arquivos do banco
router.get('/findFinBead', findFinBead);

// Cadrastar
router.post('/addFinBead', addFinBead);

// Deletar
router.delete('/deleteFinBead', deleteFinBead);

export default router;
