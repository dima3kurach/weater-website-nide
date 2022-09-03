const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZGltYTNrdXJhY2giLCJhIjoiY2w2emdyaXp6MDQ5ZzNycGdyNjRmaXh3aCJ9.JIZUZuhLdFDfo8s-9SkZ0Q&limit=1`;

  request({ url, json: true }, (rej, { body }) => {
    if (rej) {
      return callback('Something went wrong!');
    }

    if (!body.features.length) {
      return callback('No matching results!');
    }

    callback(undefined, body.features[0].center);
  });
};

module.exports = geocode;
