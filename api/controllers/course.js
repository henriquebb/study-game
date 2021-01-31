import { Course } from '../models/course.js';

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

export { addNotesToCourse };