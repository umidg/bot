const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (app) => {
  app.post('/signup', async (req, res) => {
    if (req.body && req.body.email) {
      const { email, password, confPassword } = req.body;
      if (
        password === confPassword
        && password !== undefined
        && password !== null
      ) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          const user = new User({
            email,
            password: hashedPassword,
          });
          user.save({});
          res.redirect('/login');
        } catch (err) {
          console.log(err);
          res.status(401).send();
        }
      } else {
        res.status(401).send();
      }
    }
  });
  app.post('/login', (req, res) => {
    if (req.body && req.body.email) {
      const { email, password } = req.body;
      User.findOne({ email }, async (err, user) => {
        if (err) throw err;
        if (!user || !user.email) {
          res.status(200).send({
            status: false,
            data: {
              message: 'No user found',
            },
          });
          return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          res.status(200).send({
            status: true,
            data: {
              message: 'Authorized',
              user,
            },
          });
        } else {
          res.status(401).send();
        }
      });
    }
  });
};
