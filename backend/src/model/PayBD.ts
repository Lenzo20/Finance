import { model, Schema } from 'mongoose';
import { CategoriaDB } from './CategoriaDB';

export const PayDB = model('Pay',
  new Schema({
    value: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    categoria: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: CategoriaDB,
      }]
    }
  })
);
