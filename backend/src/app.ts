import express from 'express';
import router from './router/router';
import { addFin } from './controllers/addFin';
import { deleteFin } from './controllers/deleteFin';

const app = express();

app.use(express.json());
app.use(router);

// Criacao

router.post('/addFin', addFin);

// Delete

router.delete('/deleteFin', deleteFin);


export = app;
