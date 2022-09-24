const request = require('postman-request');

const forecast = (coordinates, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=466cb1970e3efbba6ae1beabf1297abb&query=${coordinates.join(
    ','
  )}&units=f`;

  request({ url, json: true }, (rej, { body }) => {
    if (rej) {
      return callback('Something went wrong!');
    }

    if (body.error) {
      return callback('Unable to find location!');
    }

    callback(undefined, body.current);
  });
};

module.exports = forecast;
