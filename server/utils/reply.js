exports.MessageReply = (message) => {
  const msg = message.toLowerCase();
  if (
    msg.indexOf('hello') > -1
    || msg.indexOf('hi') > -1
    || msg.indexOf('hey') > -1
  ) return 'How can I help you today';
  if (
    msg.indexOf('check my balance') > -1
    || msg.indexOf('saving account') > -1
    || msg.indexOf('savings account') > -1
  ) {
    return `You have XXX in your savings account.
    Can I help you with anything else?`;
  }
  if (msg.indexOf('thank') > -1) {
    return 'Great, come back soon!';
  }
  return "Sorry I didn't understand";
};
