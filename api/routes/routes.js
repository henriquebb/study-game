import Router from 'express';
import homeRoute from './homeRoutes.js';
import userRoute from './userRoutes.js';
import semesterRoute from './semesterRoutes.js';
import courseRoute from './courseRoutes.js';
import eventRoute from './eventRoutes.js';
import questRoute from './questRoutes.js';
import itemRoute from './itemRoutes.js';
import storeRoute from './storeRoutes.js';

const routes = Router();
routes.use('/', homeRoute);
routes.use('/', userRoute);
routes.use('/', semesterRoute);
routes.use('/', courseRoute);
routes.use('/', eventRoute);
routes.use('/', questRoute);
routes.use('/', itemRoute);
routes.use('/', storeRoute);

export default routes;