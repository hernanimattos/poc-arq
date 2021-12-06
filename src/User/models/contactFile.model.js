import { Mongoose, Schema, model } from 'mongoose';

const FormSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: 'text',
  },
});

const form = model('form', FormSchema);

export { form };
