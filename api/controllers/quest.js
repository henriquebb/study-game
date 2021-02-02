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

const getQuest = (req, res) => {
    Quest.findById(req.params.id, (err, quest) => {
        if (err) {
            res.status(404).json();
        } else {
            res.send(quest).json();
            res.status(200).json();
        }
    });
};

export { changeStatus, getQuest };