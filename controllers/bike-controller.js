import BikeModel from '../models/bikeModelsMongoose.js';
const getAllBikes = async (req, res) => {
  const result = await BikeModel.find();
  return res.json(result);
};
const addBike = async (req, res) => {
  const result = await BikeModel.create(req.body);
  return res.json(result);
};
const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await BikeModel.findByIdAndDelete(contactId);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  } catch (error) {
    console.log('result', error.status);
    next(error);
  }
};
const putStatus = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await BikeModel.findByIdAndUpdate(contactId, req.body, {
    stat: req.body,
  });
  console.log('req.body', req.body);
  res.json(result);
};

export default { getAllBikes, addBike, deleteById, putStatus };
