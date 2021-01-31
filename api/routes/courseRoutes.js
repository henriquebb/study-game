import Router from 'express';
import { addNotesToCourse } from '../controllers/course.js';

const courseRoute = Router();
courseRoute.patch("/courses/:id/add-notes", addNotesToCourse);

export default courseRoute;