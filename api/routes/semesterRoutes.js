import Router from 'express';
import { createSemester, addNoteToSemester } from '../controllers/semester.js';

const semesterRoute = Router();
semesterRoute.post("/semesters", createSemester);
semesterRoute.patch("/semesters/:id/add-note", addNoteToSemester);

export default semesterRoute;