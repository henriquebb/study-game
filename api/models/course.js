import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema({
    title: String,
    grade: Number,
    professor: String,
});

const Course = mongoose.model('Course', courseSchema);

export default Course;