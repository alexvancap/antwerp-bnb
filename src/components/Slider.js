import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import './../styles/components/Slider.scss';

const Slider = (images) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  console.log(state)

  useEffect(() => {

    dispatch({type: 'SAVE_INDEX_SLIDER_IMAGES', images: images})
    
  }, [])

  return (
    <div className='slider'>
      <img alt='main image' className='sliderImg' src=''/>
      <div className='sliderButton left'>
        <FontAwesomeIcon className='Icon' icon={faAngleLeft} />
      </div>
      <div className='sliderButton right'>
        <FontAwesomeIcon className='Icon' icon={faAngleRight} />
      </div>
    </div>
  )
}

export default Slider;