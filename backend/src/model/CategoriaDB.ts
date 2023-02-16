import { model, Schema } from 'mongoose';

export const CategoriaDB = model('Categoria',
  new Schema({
    name: {
      type: String,
      required: true,
    },
  }));
