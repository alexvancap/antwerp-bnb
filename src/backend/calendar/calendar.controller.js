import connectToGoogle from './googleCalendar/createConnection'
import getCalendar from './googleCalendar/getCalendar'
import getBookings from './googleCalendar/getBookings'

module.exports = function () {
  return new Promise((resolve, reject) => {
    connectToGoogle()
      .then(connection => getCalendar(connection))
      .then(calendar => getBookings(calendar))
      .then(bookings => resolve(bookings))
  })
}