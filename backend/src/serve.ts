import app from './app';
import mongoose from 'mongoose';

const Port = 8080;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/financeiro').then(() => {
  app.listen(Port, () => {
    console.log('Listening on port ' + Port);
    console.log('Conect the BD');

  });
}).catch(err => console.error(err));
