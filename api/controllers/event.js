import { Event } from '../models/event.js';
import User from '../models/user.js';

const editEvent = (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, (err, event) => {
        if (err) {
            res.status(500).json();
        } else if (!event) {
            res.status(404).json();
        } else {
            res.status(200).json();
        }
    });
};

const createEvent = (req, res) => {
    const event = new Event({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        grade: req.body.grade
    });
    User.findById(req.query.id, (err, user) => {
        if (err) {
            res.status(404).json();
        } else {
            event.user = user;
            event.save((err, event) => {
                if (err) {
                    res.status(404).json();
                } else {
                    user.events.push(event);
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

export { editEvent, createEvent };