import Router from 'express';
import homeRoute from './homeRoutes.js';
import userRoute from './userRoutes.js';
import semesterRoute from './semesterRoutes.js';

const routes = Router();
routes.use('/', homeRoute);
routes.use('/', userRoute);
routes.use('/', semesterRoute);

export default routes;