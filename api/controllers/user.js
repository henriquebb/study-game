import User from '../models/user.js';

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
        })
    User.findOne({ username: req.body.username }, (err, currentUser) => {
        if (currentUser || err) {
            res.status(404).json();
        } else {
            user.save((err) => {
                if (err) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json();
                }
            });
        }
    });
};

export { createUser };