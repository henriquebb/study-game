import Router from 'express';
import { changeStatus } from '../controllers/quest.js';

const questRoute = Router();
questRoute.patch("/quests/:id/change-status", changeStatus);

export default questRoute;