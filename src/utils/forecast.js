const request = require('request');


const forecast = (latitude, longitude, callback) => {

    const url = `https://api.darksky.net/forecast/a6d0a127a7c88ca0e99ee34c9cdd74c3/${latitude},${longitude}?units=si`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service');
        } else if (body.error) {
            callback('Unable to find location');

        }
        else {
            callback(undefined, body);
        }
    })
}

module.exports = forecast