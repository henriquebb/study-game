import mongoose from 'mongoose';

const { Schema } = mongoose;

const semesterSchema = new Schema({
    title: String,
    grade: {
        type: Number,
        default: 0
    },
    classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    notes: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Semester = mongoose.model('Semester', semesterSchema);

export { Semester, semesterSchema };