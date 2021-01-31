import mongoose from 'mongoose';
import { itemSchema } from './item.js';

const { Schema } = mongoose;

const questSchema = new Schema({
    title: String,
    body: String,
    status: Boolean,
    rewards: { 
        coins: Number,
        items: [itemSchema],
        exp: Number
    }
});

const Quest = mongoose.model('Quest', questSchema);

export { Quest, questSchema };