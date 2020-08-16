import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/components/Slider/ScrollDownArrow.scss";
import { useEffect } from 'react';

const ScrollDownArrow = () => {
  const handleClick = () => {
    document.getElementById('content').scrollIntoView({behavior: 'smooth'});
  }

  let isDisabled = useSelector(state => state.slider.disabled);

  useEffect(() => {
    const scrollArrow = document.getElementById('scrollDown');
    if(isDisabled)
      scrollArrow.classList.add('disabled')
    else
      scrollArrow.classList.remove('disabled')
  },[isDisabled])
  
  return (
    <FontAwesomeIcon 
      id='scrollDown' 
      icon={faAngleDoubleDown}
      onClick={handleClick}
    />
  )
}

export default ScrollDownArrow;