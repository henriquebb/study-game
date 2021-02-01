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

const addNoteToSemester = (req, res) => {
    Semester.findById(req.params.id, (err, semester) => {
        if (err) {
            res.status(404).json();
        } else {
            semester.notes.push(req.body.note);
            semester.save((err) => {
                if (err) {
                    res.status(500).json();
                } else {
                    res.status(200).json();
                }
            })
        }
    });
};

const editSemester = (req, res) => {
    Semester.findByIdAndUpdate(req.params.id, req.body ,(err) => {
        if (err) {
            res.status(404).json();
        } else {
            res.status(200).json();
        }
    });
}

export { createSemester, addNoteToSemester, editSemester };