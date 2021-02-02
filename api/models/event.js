import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    grade: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Event = mongoose.model('Event', eventSchema);

export { Event, eventSchema };