import { Semester } from '../models/semester.js';

const createSemester = (req, res) => {
    const semester = new Semester({
        title: req.body.title,
        grade: req.body.grade,
        classes: req.body.classes,
        notes: req.body.notes
    });
    Semester.create(semester, (err) => {
        if (err) {
            res.status(500).json();
        } else {
            res.status(200).json();
        }
    });
};

export { createSemester };