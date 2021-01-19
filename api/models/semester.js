import mongoose from 'mongoose';
import Course from 'course';

const { Schema } = mongoose;

const semesterSchema = new Schema({
    title: String,
    classes: [Course]
})

const Semester = mongoose.model('Semester', semesterSchema);

export default Semester;