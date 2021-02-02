import Router from 'express';
import { editEvent, createEvent } from '../controllers/event.js';

const eventRoute = Router();
eventRoute.patch("/events/:id", editEvent);
eventRoute.post("/events", createEvent);

export default eventRoute;