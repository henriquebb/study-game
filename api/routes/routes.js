import Router from 'express';
import homeRoute from './homeRoutes.js';
import userRoute from './userRoutes.js';
import semesterRoute from './semesterRoutes.js';
import courseRoutes from './courseRoutes.js';

const routes = Router();
routes.use('/', homeRoute);
routes.use('/', userRoute);
routes.use('/', semesterRoute);
routes.use('/', courseRoutes);

export default routes;