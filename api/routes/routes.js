import Router from 'express';
import homeRoute from './homeRoutes.js';
import userRoute from './userRoutes.js';

const routes = Router();
routes.use('/', homeRoute);
routes.use('/', userRoute);

export default routes;