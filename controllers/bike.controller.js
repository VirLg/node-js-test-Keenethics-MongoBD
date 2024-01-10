import CarModel from '../models/CarModelMongoose.js';

const getAllBikes = async (req, res) => {
  const result = await BikeModel.find();
  return res.json(result);
};
const addCar = async (req, res) => {
  const result = await CarModel.create(req.body);
  return res.json(result);
};
export const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await CarModel.findByIdAndDelete(contactId);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  } catch (error) {
    console.log('result', error.status);
    next(error);
  }
};

export default { getAllBikes, addCar, deleteById };
