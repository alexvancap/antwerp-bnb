import calendarConfig from './../../../../config/calendar.config'

module.exports = function (res) {
  const {google} = require('googleapis')
  
  return new Promise ((resolve, reject) => {
    res.subject = calendarConfig.calendarMail;
    const calendar = google.calendar({ version: 'v3', auth: res });
    return resolve(calendar);
  })
}