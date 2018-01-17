const express = require('express'),
      bodyParser = require('body-parser')
      endpoints = require('./endpoints')
      PORT = 4040;

const app = express();
app.use(bodyParser.json());

endpoints(app);

app.listen(PORT, () => console.log(`Housten we have liftoff on port ${PORT}`)); 