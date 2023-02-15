import { model, Schema } from 'mongoose';

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
    }
  })
);
