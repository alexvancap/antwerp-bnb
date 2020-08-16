import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

export default function (props) {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(state => state.book.selectedMonth);
  const directionIsLeft = props.direction === 'left';

  const updateMonth = () => {
    let month = moment(selectedMonth, 'YYYY-M-D');
    if(directionIsLeft){
      month.subtract(1, 'M');
    }else
      month.add(1, 'M');
    return month.format('YYYY-MM-DD')
  }

  const buttonClick = () => {
    const newMonth = updateMonth()
    dispatch({type: 'CALENDAR_UPDATE_DATE', newMonth: newMonth})
  }

  return (
    <div onClick={buttonClick}
      className={`arrow ${directionIsLeft ? 'left' : 'right'}`}>
      <FontAwesomeIcon className='arrow-icon' icon={directionIsLeft ? faAngleLeft : faAngleRight}/>
    </div>
  )
}