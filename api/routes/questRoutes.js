import Router from 'express';
import { changeStatus, getQuest, createQuest, addItemsToQuest } from '../controllers/quest.js';

const questRoute = Router();
questRoute.patch("/quests/:id/change-status", changeStatus);
questRoute.get("/quests/:id", getQuest);
questRoute.post("/quests", createQuest);
questRoute.patch("/quests/:id/add-items", addItemsToQuest);

export default questRoute;