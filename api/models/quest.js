import mongoose from 'mongoose';
import { Item } from 'item';

const { Schema } = mongoose;

const questSchema = new Schema({
    title: String,
    body: String,
    status: Boolean,
    rewards: { 
        coins: Number,
        items: [Item],
        exp: Number
    }
})

const Quest = mongoose.model('Quest', questSchema);

export default Quest;