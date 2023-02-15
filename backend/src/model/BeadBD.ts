import { Schema, model } from 'mongoose';

export const BeadDB = model('Bead',
  new Schema({
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true
    },
    dueDate: String,
    name: String,
    createdAt: {
      type: Date,
      default: new Date(),
    }
  })
);
