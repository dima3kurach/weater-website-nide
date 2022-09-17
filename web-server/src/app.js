const path = require('path');
const hbs = require('hbs');
const express = require('express');

const app = express();

// Define paths for Express config
const PORT = 3000;
const PUBLIC = path.join(__dirname, '../public');
const VIEWS = path.join(__dirname, '../templates/views');
const PARTIALS = path.join(__dirname, '../templates/partials');

// Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', VIEWS);
hbs.registerPartials(PARTIALS);

// Satic directory to serve
app.use(express.static(PUBLIC));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    user: 'Admin',
    developer: 'me',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    developer: 'me',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'User message',
    developer: 'me',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'not found',
    forecast: 'hot as in hell',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errMessage: 'Help article not found',
    developer: 'me',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errMessage: 'Page not found',
    developer: 'me',
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
