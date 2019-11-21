const request = require('request');
const encodeURIComponent = (address) => address

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYXViaGFkZGFkIiwiYSI6ImNrMzR1a3BoejE0eGwzcXF1MDk4M3R5b3EifQ.gAGC_-ZeVdM3sRdiTnrLbw&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services !')
        } else if (body.features.length === 0) {
            callback('Unable to find location . try another search')
        } else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const location = body.features[0].place_name
            callback(undefined, { latitude, longitude, location })
        }
    })

}

module.exports = geocode