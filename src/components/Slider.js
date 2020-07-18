import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import './../styles/components/Slider.scss';



const Slider = () => {
  return (
    <div className='slider'>
      <img alt='main image' className='sliderImg' src='https://a0.muscache.com/im/pictures/79b2200c-5797-435d-9ac2-3007b6f50c80.jpg?aki_policy=large'/>
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