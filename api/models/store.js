import mongoose from 'mongoose';

const { Schema } = mongoose;

const storeSchema = new Schema({
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

const Store = mongoose.model('Store', storeSchema);

export default Store;