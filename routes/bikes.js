import { Router } from 'express';
import routeBikes from '../controllers/bike-controller.js';
const { getAllBikes, addBike, deleteById } = routeBikes;
const router = Router();

router.get('/', getAllBikes);
router.post('/add', addBike);
router.delete('/:contactId', deleteById);
export default router;

// повинні бути такі маршрути: “/” - домашня сторінка з загальним описом послуг, що надає компанія “/catalog” - сторінка, що містить каталог автівок різної комплектації “/favorites” - сторінка з оголошеннями, які були
