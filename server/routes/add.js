const User = require('../models/User');

module.exports = (app) => {
  app.post('/addamount', (req, res) => {
    if (req.body) {
      User.findOne({ email: req.body.user.email }, async (err, user) => {
        if (user && !user.amount) {
          User.findOneAndUpdate(
            { email: req.body.user.email },
            { amount: req.body.user.amount },
          );
          res.status(200).send({
            status: true,
          });
        } else if (user) {
          const amount = parseFloat(user.amount) + parseFloat(req.body.user.amount);

          User.findOneAndUpdate(
            { email: req.body.user.email },
            {
              amount,
            },
          );
          res.status(200).send({
            status: true,
          });
        }
      });
    }
  });
};
