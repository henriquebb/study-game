import mongoose from 'mongoose';
import { courseSchema } from './course.js';

const { Schema } = mongoose;

const semesterSchema = new Schema({
    title: String,
    grade: {
        type: Number,
        default: 0
    },
    classes: [courseSchema],
    notes: [String]
});

const Semester = mongoose.model('Semester', semesterSchema);

export { Semester, semesterSchema };