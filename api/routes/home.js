import Router from 'express';
import home from '../controllers/home.js';

const router = Router();
const homeRoute = router.get("/", home);

export default homeRoute;