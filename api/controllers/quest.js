import { Quest } from '../models/quest.js';

const changeStatus = (req, res) => {
    Quest.findByIdAndUpdate(req.params.id, { status: true }, (err) => {
        if (err) {
            res.status(404).json();
        } else {
            res.status(200).json();
        }
    });
};

export { changeStatus };