import Router from 'express';
import { createSemester, addClassesToSemester } from '../controllers/semester.js';

const semesterRoute = Router();
semesterRoute.post("/semesters", createSemester);
semesterRoute.patch("/semesters/:id/add-classes", addClassesToSemester);

export default semesterRoute;