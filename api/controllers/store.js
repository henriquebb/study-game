import Store from '../models/store.js';

const getStore = (req, res) => {
    Store.findById(req.params.id, (err, store) => {
        if (err) {
            res.status(404).json();
        } else {
            res.send(store).json();
            res.status(200).json();
        }
    });
};

const createStore = (req, res) => {
    const store = new Store({});
    store.save((err) => {
        if (err) {
            res.status(404).json();
        } else {
            res.status(200).json();
        }
    });
};

const addItemsToStore = (req, res) => {
    const items = req.body.items;
    Store.findById(req.params.id, (err, store) => {
        if (err) {
            res.status(404).json();
        } else {
            store.items = items;
            store.save((err) => {
                if (err) {
                    res.status(404).json();
                } else {
                    res.status(200).json();
                }
            });
        }
    });
};

export { addItemsToStore, getStore, createStore };