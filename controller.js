module.exports = {
  getTest: (req, res) => {
    res.status(200).send('test successful');
  },
  postTest: (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body.message);
  }
}