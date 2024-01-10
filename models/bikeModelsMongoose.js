import { Schema, model } from 'mongoose';
import Joi from 'joi';

export const addBikeJoiSchema = Joi.object({
  name: Joi.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  type: Joi.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  color: Joi.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  wheelSize: Joi.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  price: Joi.number()
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
  description: Joi.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  id: Joi.number()
    .max(2000, 'Must be 2000 characters or less')
    .required('Required'),
});

const bikeSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    wheelSize: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    id: { type: Number, required: true },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
// post save hook
bikeSchema.post('save', (error, data, next) => {
  error.status = 400;
  next();
});
const BikeModel = model('bike', bikeSchema);
// car - назва кластеру в однині!

export default BikeModel;
