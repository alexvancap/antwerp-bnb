import useSWR from 'swr';
import './../../../styles/components/calendar/calendar.scss';
import ChangeMonthButton from './ChangeMonthButton';
import Grid from './Grid';
import MonthsHeader from './MonthsHeader';
import { useSelector } from 'react-redux';
import moment from 'moment';

export default function Calendar(props) {
  const selectedMonth = useSelector(state => state.book.selectedMonth);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/calendar', fetcher);
  const getMonthName = () => {
    const month = moment(selectedMonth, 'YYYY-M-D')
    return month.format('MMMM YYYY')
  }

  if(!data) return <div>loading...</div>
  
  return (
    <div className='calendar'>
      <div id='calendar-header'>
        <ChangeMonthButton direction='left'/>
          <p id='current-month'>{getMonthName()}</p>
        <ChangeMonthButton direction='right'/>
      </div>
      <MonthsHeader />
      <Grid selectedMonth={selectedMonth} />

    </div>
  )
}