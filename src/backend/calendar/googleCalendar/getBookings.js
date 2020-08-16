import calendarConfig from './../../../../config/calendar.config'

module.exports = function (calendar) {
  const { addWeeks } = require('date-fns')
  
  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: calendarConfig.calendarId,
        timeMin: new Date().toISOString(),
        timeMax: addWeeks(new Date(), 1).toISOString(), // Let's get events for one week
        singleEvents: true,
        orderBy: 'startTime',
      },
      (err, res) => {
        if (err) return reject(err)
        const bookings = res.data.items.map((appointment) => ({
          start: appointment.start.dateTime || appointment.start.date,
          end: appointment.end.dateTime || appointment.end.date,
          id: appointment.id,
          status: appointment.status,
          creator: appointment.creator,
          description: appointment.description,
        }))
        return resolve(bookings)
      },
    )
  })
}