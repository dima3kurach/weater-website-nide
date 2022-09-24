console.log('Client side JS file is loaded!');

const form = document.querySelector('form');
const input = document.querySelector('input');

const place = document.querySelector('p#place');
const weather = document.querySelector('p#weather');

const getWeather = async (location) => {
  try {
    const geocodeResult = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        location
      )}.json?access_token=pk.eyJ1IjoiZGltYTNrdXJhY2giLCJhIjoiY2w2emdyaXp6MDQ5ZzNycGdyNjRmaXh3aCJ9.JIZUZuhLdFDfo8s-9SkZ0Q&limit=1`
    );
    const coordinates = (await geocodeResult.json()).features[0].center;

    const weatherResult = await fetch(
      `http://api.weatherstack.com/current?access_key=466cb1970e3efbba6ae1beabf1297abb&query=${coordinates.join(
        ','
      )}&units=f`
    );
    const weather = (await weatherResult.json()).current;

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

    place.textContent = location;
    weather.textContent = forecast;
  } catch (e) {
    place.textContent = e;
    weather.textContent = '';
  }
});
