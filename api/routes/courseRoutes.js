import Router from 'express';
import { addNotesToCourse, createCourse } from '../controllers/course.js';

const courseRoute = Router();
courseRoute.post("/courses", createCourse);
courseRoute.patch("/courses/:id/add-notes", addNotesToCourse);

export default courseRoute;