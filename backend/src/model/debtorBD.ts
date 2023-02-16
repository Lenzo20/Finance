import { model, Schema } from 'mongoose';
import { CategoriaDB } from './CategoriaDB';

export const debtorBD = model('debtor',
  new Schema({
    value: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    categoria: {
      type: [{
        categoriaId: {
          type: Schema.Types.ObjectId,
          ref: 'Categoria',
        }
      }]
    }
  })
);
