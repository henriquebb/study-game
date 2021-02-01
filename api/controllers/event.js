import { Event } from '../models/event.js';

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

export { editEvent };