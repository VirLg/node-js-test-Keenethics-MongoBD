import { Schema, model } from 'mongoose';
import Joi from 'joi';

export const addBikeJoiSchema = Joi.object({
  name: Joi.string().required('Required'),
  type: Joi.string().required('Required'),
  color: Joi.string().required('Required'),
  wheelSize: Joi.number().required('Required'),
  price: Joi.number().required('Required'),
  description: Joi.string().required('Required'),
  id: Joi.number().required('Required'),
  stat: Joi.string(),
});

const bikeSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    wheelSize: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    id: { type: Number, required: true },
    stat: { type: String, default: 'selected' },
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
