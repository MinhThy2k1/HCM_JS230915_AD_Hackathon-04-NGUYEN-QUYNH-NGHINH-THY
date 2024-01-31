import express from 'express';
import version_v1 from './version_v1'
const Router = express.Router();
Router.use('/v1',version_v1)
export default Router