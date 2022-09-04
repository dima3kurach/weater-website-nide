const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;
const PUBLIC = path.join(__dirname, '../public');

app.use(express.static(PUBLIC));

app.get('/weather', (req, res) => {
  res.send({
    location: 'not found',
    forecast: 'hot as in hell',
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
