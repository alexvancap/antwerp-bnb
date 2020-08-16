import moment from 'moment';
moment().format();

export default function(props) {
  const day = props.day
  return (
    <div className='day-box day-box-size'><p>{moment(day.date, 'YYYY-M-D').format('D')}</p></div>
  )
}