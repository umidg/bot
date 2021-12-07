module.exports = (app) => {
  app.post('/message/:sessionid', (req, res) => {
    console.log('hey', req, res);
  });
};
