import mongoose from 'mongoose';
import Course from 'course';

const { Schema } = mongoose;

const semesterSchema = new Schema({
    title: String,
    grade: Number,
    classes: [Course],
    notes: [String]
});

const Semester = mongoose.model('Semester', semesterSchema);

export default Semester;