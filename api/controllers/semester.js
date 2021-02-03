import { Semester } from '../models/semester.js';
import User from '../models/user.js';

const createSemester = (req, res) => {
    const semester = new Semester({
        title: req.body.title,
        grade: req.body.grade,
        notes: req.body.notes
    });
    User.findById(req.query.id, (err, user) => {
        if (err) {
            res.status(404).json();
        } else {
            semester.user = user;
            semester.save((err, semester) => {
                if (err) {
                    console.log(err);
                    res.status(404).json();
                } else {
                    user.semesters.push(semester);
                    user.save((err) => {
                        if (err) {
                            console.log(err);
                            res.status(404).json();
                        } else {
                            res.status(200).json();
                        }
                    });
                }
            });
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

const getSemester = (req, res) => {
    Semester.findById(req.params.id, (err, semester) => {
        if (err) {
            res.status(404).json();
        } else {
            res.status(200).json(semester);
        }
    });
};

export { createSemester, addNoteToSemester, editSemester, getSemester };