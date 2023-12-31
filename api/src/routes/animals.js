import express from 'express';
import animalsController from '../controllers/animalsController.js';
import checkTonken from '../authentication/token.js';

const router = express.Router();

router
  .get('/animals/search', animalsController.searchByState)
  .get('/animals/query', animalsController.searchByProfileId)
  .get('/animals', animalsController.getAllAnimals)
  .get('/animals/:id', checkTonken, animalsController.getAnimal)
  .get('/animals/exist/:id', checkTonken, animalsController.exist)
  .post('/animals/register', animalsController.register)
  .delete('/animals/search', animalsController.deleteAll)
  .delete('/animals/:id', checkTonken, animalsController.deleteOne)
  .put('/animals/:id', checkTonken, animalsController.update)

export default router;
