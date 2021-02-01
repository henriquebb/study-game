import User from '../models/user.js';
import { Item } from '../models/item.js';

const createUser = (req, res) => {
    const user = new User(
        { username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          name: req.body.name,
          school: req.body.school,
          semesters: [],
          events: [],
          quests: [],
          items: []
        });
    User.findOne({ username: req.body.username }, (err, currentUser) => {
        if (err) {
            res.status(500).json();
        }
        else if (currentUser) {
            res.status(404).json();
        } else {
            user.save((err) => {
                if (err) {
                    res.status(500).json();
                }
                else {
                    res.status(200).json();
                }
            });
        }
    });
};

const addItemToUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.status(404).json();
        } else {
            Item.findById(req.query.id, (err, item) => {
                if (err) {
                    res.status(404).json();
                } else {
                    user.items.push(item);
                    user.save((err) => {
                        if (err) {
                            res.status(404).json();
                        } else {
                            res.status(200).json();
                        }
                    });
                }
            });
        }
    });
};

const getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.status(404).json();
        } else {
            res.send(user).json();
            res.status(200).json();
        }
    });
};

const editUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            res.status(404).json();
        } else {
            res.status(200).json();
        }
    });
};

export { createUser, addItemToUser, getUser, editUser };