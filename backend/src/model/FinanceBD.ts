import { model, Schema } from 'mongoose';

export const FinanceBD = model('Finance',
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
    }
  })
);
