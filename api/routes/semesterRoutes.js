import Router from 'express';
import { createSemester } from '../controllers/semester.js';

const semesterRoute = Router();
semesterRoute.post("/semesters", createSemester);

export default semesterRoute;