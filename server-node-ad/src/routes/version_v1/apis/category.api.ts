import express from 'express';
import { categoryController } from '../../../controllers/category.controller';

const Router = express.Router();
Router.post('/', categoryController.create)
Router.get('/:id',categoryController.findById)
Router.get('/',categoryController.findAll)

export default Router;