import mongoose from 'mongoose';
import Semester from 'semester';
import Event from 'event';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    semesters: [Semester],
    events: [Event]
})

const User = mongoose.model('User', userSchema);

export default User;