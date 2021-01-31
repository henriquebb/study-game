import Router from 'express';
import home from '../controllers/home.js';

const homeRoute = Router();
homeRoute.get("/", home);

export default homeRoute;