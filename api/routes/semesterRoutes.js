import Router from 'express';
import { createSemester, addNoteToSemester, editSemester, getSemester } from '../controllers/semester.js';

const semesterRoute = Router();
semesterRoute.post("/semesters", createSemester);
semesterRoute.patch("/semesters/:id", editSemester);
semesterRoute.patch("/semesters/:id/add-note", addNoteToSemester);
semesterRoute.get("/semesters/:id", getSemester);

export default semesterRoute;