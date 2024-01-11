import { Router } from 'express';
import routeBikes from '../controllers/bike-controller.js';
const { getAllBikes, addBike, deleteById, putStatus } = routeBikes;
const router = Router();

router.get('/', getAllBikes);
router.post('/add', addBike);
router.delete('/:contactId', deleteById);
router.put('/:contactId', putStatus);
export default router;
