const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let items = [];

app.get('/api/todos', async function(req, res) {
  await new Promise(r => setTimeout(r, 1000));
  res.json({
    ts: Date.now(),
    items
  })
});

app.post('/api/todos', function(req, res) {
  const { text } = req.body;

  if (Math.random() > 0.7) {
    res.status(500);
    res.json({
      message: 'Could not add item'
    })
    return;
  }
  items.push(text.toUpperCase());
  res.json(text.toUpperCase());
});

//start your server on port 3001
app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});