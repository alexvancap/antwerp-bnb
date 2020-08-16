const { google } = require('googleapis')
const credentials = require('./../../../private/antwerpBnB-google-credentials')

const scopes = ['https://www.googleapis.com/auth/calendar']

module.exports = function () {
    return google.auth.getClient({
        credentials,
        scopes,
    })
}
  