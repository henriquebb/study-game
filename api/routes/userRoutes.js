import Router from 'express';
import { createUser, addItemToUser, getUser, editUser, loginUser } from '../controllers/user.js';

const userRoute = Router();
userRoute.get('/users/:id', getUser);
userRoute.post("/users", createUser);
userRoute.patch("/users/:id/add-item", addItemToUser);
userRoute.patch("/users/:id", editUser);
userRoute.post("/users/login", loginUser);

export default userRoute;