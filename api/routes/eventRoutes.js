import Router from 'express';
import { editEvent, createEvent, getEvent } from '../controllers/event.js';

const eventRoute = Router();
eventRoute.patch("/events/:id", editEvent);
eventRoute.post("/events", createEvent);
eventRoute.get("/events/:id", getEvent);

export default eventRoute;