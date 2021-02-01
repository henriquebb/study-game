import Router from 'express';
import { addNoteToCourse, createCourse, getCourse } from '../controllers/course.js';

const courseRoute = Router();
courseRoute.post("/courses", createCourse);
courseRoute.patch("/courses/:id/add-note", addNoteToCourse);
courseRoute.get("/courses/:id", getCourse);

export default courseRoute;