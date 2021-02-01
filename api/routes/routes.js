import Router from 'express';
import homeRoute from './homeRoutes.js';
import userRoute from './userRoutes.js';
import semesterRoute from './semesterRoutes.js';
import courseRoutes from './courseRoutes.js';
import eventRoutes from './eventRoutes.js';

const routes = Router();
routes.use('/', homeRoute);
routes.use('/', userRoute);
routes.use('/', semesterRoute);
routes.use('/', courseRoutes);
routes.use('/', eventRoutes);

export default routes;