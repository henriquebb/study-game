import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    body: String,
    date: Date
});

const Event = mongoose.model('Event', eventSchema);

export { Event, eventSchema };