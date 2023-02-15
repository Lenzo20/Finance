import express from 'express';
import router from './router/router';
import { addFin } from './controllers/debtorBD/addFinDebtor';
import { deleteFin } from './controllers/debtorBD/deleteFinDebtor';

const app = express();

app.use(express.json());
app.use(router);

// Criacao

router.post('/addFin', addFin);

// Delete

router.delete('/deleteFin', deleteFin);


export = app;
