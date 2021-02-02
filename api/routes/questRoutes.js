import Router from 'express';
import { changeStatus, getQuest } from '../controllers/quest.js';

const questRoute = Router();
questRoute.patch("/quests/:id/change-status", changeStatus);
questRoute.get("/quests/:id", getQuest);

export default questRoute;