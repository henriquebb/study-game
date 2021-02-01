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

const addNotesToCourse = (req, res) => {
    Course.findByIdAndUpdate(req.params.id, { notes: req.body.notes } ,(err, course) => {
        if(err) {
            res.status(500).json();
        } else if (!course) {
            res.status(404).json();
        } else {
            res.status(200).json();
        }
    });
};

export { addNotesToCourse, createCourse };