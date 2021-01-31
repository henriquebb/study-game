import Router from 'express';
import { createUser } from '../controllers/user.js';

const userRoute = Router();
userRoute.post("/users", createUser);

export default userRoute;