const Reply = require('../utils/reply');
const User = require('../models/User');
const Chat = require('../models/Chat');

module.exports = (app) => {
  app.post('/message', (req, res) => {
    if (req.body && req.body.end !== true) {
      const chatId = req.body.user.id;
      const { email } = req.body.user;
      Chat.findOne({ id: chatId }, async (err, chats) => {
        if (chats === null) {
          const chat = new Chat({
            id: chatId,
            user: email,
            engagement: true,
            dropoff: false,
            completion: false,
          });
          chat.save({});
        }
      });
      const reply = Reply.MessageReply(req.body.message);
      if (reply && reply.indexOf('come back') > -1) {
        Chat.findOneAndUpdate(
          { id: chatId },
          {
            completion: true,
          },
        );
        res.status(200).send({
          status: true,
          data: {
            message: reply,
          },
        });
      } else if (reply) {
        if (reply.indexOf('savings') > -1) {
          User.findOne({ email }, async (err, user) => {
            res.status(200).send({
              status: true,
              data: {
                message: user.amount
                  ? reply.replace('XXX', user.amount)
                  : reply.replace('XXX', '0.00'),
              },
            });
          });
        } else {
          res.status(200).send({
            status: true,
            data: {
              message: reply,
            },
          });
        }
      }
    } else if (req.body && req.body.end) {
      Chat.findOneAndUpdate(
        { id: req.body.user.id },
        {
          dropoff: true,
        },
      );
    }
  });
};
