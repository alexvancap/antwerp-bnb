import moment from 'moment';
import DayCard from './DayCard';
moment().format();

export default function (props) {
  
  const selectedMonth = moment(props.selectedMonth, 'YYYY-M');

  const generateGrid = () => {
    const lengthOfMonth = moment(selectedMonth, 'YYYY-M').daysInMonth();
    let days = Array.from(
      Array(lengthOfMonth), 
      (_, i) => {
        const newDate =  {
          date: selectedMonth.format('YYYY-M-D'),
          occupied: 0,
          dayOfWeek: selectedMonth.day()
        }
        selectedMonth.add(1, 'days');
        return newDate;
      }
    )
    days = fillEmptyWeeks(days);
    return days
  }

  const fillEmptyWeeks = (days) => {
    const firstDate = moment(days[0].date, 'YYYY-M-D');
    const firstDateDay = firstDate.day()

    for(let i=0; i < firstDateDay; i++){
      firstDate.subtract(1, 'days')

      const newDay = {
        date: firstDate.format('YYYY-M-D'),
        occupied: 0,
        dayOfWeek: firstDate.day()
      }
      days = [newDay, ...days]
    }

    const lastDay = moment(days[days.length -1].date, 'YYYY-M-D');

    for(let i=days.length; i < 42; i++){
      lastDay.add(1, 'days')
      const newDay = {
        date: lastDay.format('YYYY-M-D'),
        occupied: 0,
        dayOfWeek: lastDay.day()
      }
      days = [...days, newDay]
    }
    return days
  }


  return (
    <div id='grid-container'>
      {
        generateGrid().map( day => (
          <DayCard key={`day ${day.date}`} day={day} />
        ))
      }
    </div>
  )
}