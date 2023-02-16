import { Schema, model } from 'mongoose';

export const BeadDB = model('Bead',
  new Schema({
    dueDate: String,
    name: String,
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true
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
