import Router from 'express';
import { addNoteToCourse, createCourse } from '../controllers/course.js';

const courseRoute = Router();
courseRoute.post("/courses", createCourse);
courseRoute.patch("/courses/:id/add-note", addNoteToCourse);

export default courseRoute;