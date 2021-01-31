import mongoose from 'mongoose';
import { itemSchema } from './item.js';

const { Schema } = mongoose;

const storeSchema = new Schema({
    items: [itemSchema]
});

const Store = mongoose.model('Store', storeSchema);

export default Store;