import express from 'express';
import { questionController } from '../../../controllers/question.controller';
const Router = express.Router();
Router.post('/', questionController.create)
Router.get('/',questionController.findWithConditon)
Router.get('/:id/answer',questionController.findByIdWithAnswer)
Router.get('/:id',questionController.findById)
Router.get('/',questionController.findAll)

export default Router;