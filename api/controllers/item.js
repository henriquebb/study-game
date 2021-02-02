import { Item } from '../models/item.js';

const createItem = (req, res) => {
    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        image: req.body.description,
        rewards: {
            hp: req.body.rewards.hp,
            mana: req.body.rewards.mana,
            exp: req.body.rewards.exp,
            coins: req.body.rewards.coins
        },
        price: req.body.price
    });

    item.save((err) => {
        if (err) {
            res.status(404).json();
        } else {
            res.status(200).json();
        }
    });
};

const getItem = (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) {
            res.status(404).json();
        } else {
            res.send(item).json();
            res.status(200).json();
        }
    });
};

export { getItem, createItem };