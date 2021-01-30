import mongoose from 'mongoose';
import Item from 'item';

const { Schema } = mongoose;

const storeSchema = new Schema({
    items: [Item]
});

const Store = mongoose.model('Store', storeSchema);

export default Store;