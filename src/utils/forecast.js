const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const access_key = "ceeb3e7ad84def88f0b871aef0d787df"
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${latitude}%20${longitude}`


    request({ url, json: true }, (error, response) => {

        const { body } = response;
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. ')
        }
    })
}

module.exports = forecast