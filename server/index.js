const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Tweet! 🐣'
  });
});

app.listen(5000, () => {
  console.log('listening on http://localhost:5000');
})
