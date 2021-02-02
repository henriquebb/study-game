import Router from 'express';
import { addItemsToStore, getStore, createStore } from '../controllers/store.js';

const storeRoute = Router();
storeRoute.get('/stores/:id', getStore);
storeRoute.post("/stores", createStore);
storeRoute.post("/stores/:id/add-items", addItemsToStore);

export default storeRoute;