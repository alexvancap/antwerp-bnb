import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './../../styles/components/Slider/SliderButton.scss';

const SliderButton = function(props) {
  const dispatch = useDispatch();
  const isDisabled = useSelector(state => state.disabled);
  const currentIndex = useSelector(state => state.currentIndex);

  const handleButtonClick = (type) => {
    if(!isDisabled)
      props.handleImgChange(currentIndex + type)
  }

  return (
    <div 
      onClick={() => handleButtonClick(props.direction === 'left' ? -1 : 1)}
      className={`sliderButton ${props.direction} ${isDisabled ? 'disabled' : ''}`}
    >
      <FontAwesomeIcon className='Icon noselect' icon={props.direction === 'left' ? faAngleLeft : faAngleRight} />
    </div>
  )
}

export default SliderButton;