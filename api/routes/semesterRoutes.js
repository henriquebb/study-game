import Router from 'express';
import { createSemester, addNoteToSemester, editSemester } from '../controllers/semester.js';

const semesterRoute = Router();
semesterRoute.post("/semesters", createSemester);
semesterRoute.patch("/semesters/:id", editSemester);
semesterRoute.patch("/semesters/:id/add-note", addNoteToSemester);

export default semesterRoute;