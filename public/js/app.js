console.log('Client side JS file is loaded!');

const form = document.querySelector('form');
const input = document.querySelector('input');

const place = document.querySelector('p#place');
const weather = document.querySelector('p#weather');

const getWeather = async (location) => {
  try {
    const url = `http://localhost:3000/weather?address=${location}`;

    const result = await fetch(url);
    const weather = (await result.json()).forecast;

    return `${weather.weather_descriptions[0]}. It is currently ${weather.temperature} degrees out. It feels like ${weather.feelslike} degrees out.`;
  } catch (e) {
    if (!location) throw 'You must provide an address';

    throw 'Incorrect written location';
  }
};

form.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();

    place.textContent = 'Loading ...';
    weather.textContent = '';

    const location = input.value;
    const forecast = await getWeather(location);

    place.textContent = location.charAt(0).toUpperCase() + location.slice(1);
    weather.textContent = forecast;
  } catch (e) {
    place.textContent = e;
    weather.textContent = '';
  }
});
