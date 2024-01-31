import categoryApi from './apis/category.api'
import questionApi from './apis/question.api'
import express from 'express';

const Router = express.Router();
Router.use('/categories', categoryApi);
Router.use('/questions', questionApi);
export default Router