const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;
const PUBLIC = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(PUBLIC));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    user: 'Admin',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'User message',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'not found',
    forecast: 'hot as in hell',
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
