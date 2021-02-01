import { Course } from '../models/course.js';
import { Semester } from '../models/semester.js';

const createCourse = (req, res) => {
    const course = new Course({
        title: req.body.title,
        grade: req.body.grade,
        professor: req.body.professor,
        className: req.body.className,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        daysOfWeek: req.body.daysOfWeek,
        notes: req.body.notes,
    });

    Semester.findById(req.query.id, (err, semester) => {
        if (err) {
            res.status(500).json();
        } else {
            course.save((err, createdCourse) => {
                if (err) {
                    res.status(500).json();
                } else {
                    semester.classes.push(createdCourse);
                    semester.save((err) => {
                        if (err) {
                            res.status(500).json();
                        } else {
                            res.status(200).json();
                        }
                    });
                }
            });
        }
    });
}

const addNoteToCourse = (req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if(err) {
            res.status(404).json();
        } else {
            course.notes.push(req.body.note);
            course.save((err) => {
                if (err) {
                    res.status(500).json();
                } else {
                    res.status(200).json();
                }
            });
        }
    });
};

export { addNoteToCourse, createCourse };