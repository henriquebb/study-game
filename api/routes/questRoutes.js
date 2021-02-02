import Router from 'express';
import { changeStatus, getQuest, createQuest } from '../controllers/quest.js';

const questRoute = Router();
questRoute.patch("/quests/:id/change-status", changeStatus);
questRoute.get("/quests/:id", getQuest);
questRoute.post("/quests", createQuest);

export default questRoute;