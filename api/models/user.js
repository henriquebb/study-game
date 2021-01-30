import mongoose from 'mongoose';
import Semester from 'semester';
import Event from 'event';
import Quest from 'quest';

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
    email: String,
    name : {
        firstName: String,
        lastName: String
    },
    school: String,
    semesters: [Semester],
    events: [Event],
    quests: [Quest],
    items: [Item]
});

const User = mongoose.model('User', userSchema);

export default User;