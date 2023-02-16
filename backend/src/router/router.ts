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
import { findFinCategoria } from '../controllers/categoriaDB/findFinCategoria';
import { deleteFinCategoria } from '../controllers/categoriaDB/deleteFinCategoria';
import { addFinCategoria } from '../controllers/categoriaDB/addFinCategoria';

const router = Router();

router.get('/test', (req, res) => {
  res.send('Hello World!');
});

// Routas Para o Banco Pagar/Pay

// Ver arquivos do banco
router.get('/findFinPay', /*findFinPay*/(req, res) => {
  return res.send('EM BREVE');
});

// Cadrastar
router.post('/addFinPay', /*addFinPay*/(req, res) => {
  return res.send('EM BREVE');
});

// Deletar
router.delete('/deleteFinPay', /*deleteFinPay*/(req, res) => {
  return res.send('EM BREVE');
});


// Rotas Para o Banco Devedor/debtor

// Ver arquivos do banco
router.get('/findFinDebtor', findFinDebtor);

// Cadrastar
router.post('/addFinDebtor', addFinDebtor);

// Deletar
router.delete('/deleteFinDebtor/:id', deleteFinDebtor);


// Rotas Para o Banco Contas/Bead

// Ver arquivos do banco
router.get('/findFinBead', findFinBead);

// Cadrastar
router.post('/addFinBead', addFinBead);

// Deletar
router.delete('/deleteFinBead/:id', deleteFinBead);


// Rota de Categoria

// Ver arquivos do banco
router.get('/findFinCategoria', findFinCategoria);

// Cadrastar
router.post('/addFinCategoria', addFinCategoria);

// Deletar
router.delete('/deleteFinCategoria/:id', deleteFinCategoria);

export default router;
