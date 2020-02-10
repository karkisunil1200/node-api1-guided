const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Oh hello there');
});

const port = 5000;
server.listen(port, () => console.log('Server running on http://localhost:5000'));
