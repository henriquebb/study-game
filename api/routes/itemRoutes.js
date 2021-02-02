import Router from 'express';
import { getItem, createItem } from '../controllers/item.js';

const itemRoute = Router();
itemRoute.get("/items/:id", getItem);
itemRoute.post("/items", createItem);

export default itemRoute;