const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (address) {
  geocode(address, (rej, res) => {
    if (rej) {
      console.log('Error:', rej);

      return;
    }

    forecast(res, (rej, res) => {
      if (rej) {
        console.log('Error:', rej);

        return;
      }

      console.log(
        `${res.weather_descriptions[0]}. It is currently ${res.temperature} degrees out. It feels like ${res.feelslike} degrees out.`
      );
    });
  });
} else {
  console.log('No address!');
}
