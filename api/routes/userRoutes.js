import Router from 'express';
import { createUser, addItemToUser } from '../controllers/user.js';

const userRoute = Router();
userRoute.post("/users", createUser);
userRoute.patch("/users/:id/add-item", addItemToUser);

export default userRoute;