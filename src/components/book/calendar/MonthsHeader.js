export default function() {
  const daysArray = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
  return (
    <div id='months-header'>
      {
        daysArray.map(day => 
          <p key={day + ' name'} className='month-name'>{day}</p>
        )
      }
    </div>
  )
}