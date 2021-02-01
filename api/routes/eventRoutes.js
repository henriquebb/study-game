import Router from 'express';
import { editEvent } from '../controllers/event.js';

const eventRoute = Router();
eventRoute.patch("/events/:id", editEvent);

export default eventRoute;