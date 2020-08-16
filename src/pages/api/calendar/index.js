const calendarController = require('../../../backend/calendar/calendar.controller')

export default async function (req, res) {
  if(req.method === 'GET'){
    return calendarController()
      .then(bookings => res.status(200).json(bookings))
      .catch(error => res.status(405).json(error))
  }
}