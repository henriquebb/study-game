import Router from 'express';
import homeRoute from './homeRoutes.js';
import userRoute from './userRoutes.js';
import semesterRoute from './semesterRoutes.js';
import courseRoute from './courseRoutes.js';
import eventRoute from './eventRoutes.js';
import questRoute from './questRoutes.js';

const routes = Router();
routes.use('/', homeRoute);
routes.use('/', userRoute);
routes.use('/', semesterRoute);
routes.use('/', courseRoute);
routes.use('/', eventRoute);
routes.use('/', questRoute);

export default routes;