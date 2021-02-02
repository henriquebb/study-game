import mongoose from 'mongoose';
import { semesterSchema } from './semester.js';
import { eventSchema } from './event.js';
import { questSchema } from './quest.js';
import { itemSchema } from './item.js';

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
    semesters: [{
        type: Schema.Types.ObjectId,
        ref: 'Semester'
    }],
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    quests: [{
        type: Schema.Types.ObjectId,
        ref: 'Quest'
    }],
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }],
    stats: {
        hp: {
            type: Number,
            required: true,
            default: 100
        },
        mana: {
            type: Number,
            required: true,
            default: 100
        },
        exp: {
            type: Number,
            required: true,
            default: 0
        },
        coins: {
            type: Number,
            required: true,
            default: 0
        }
    },
    image: { data: Buffer, contentType: String }
});

const User = mongoose.model('User', userSchema);

export default User;