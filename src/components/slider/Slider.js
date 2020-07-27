import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import rmClassName from '../../helperFunctions/rmClassName';
import './../../styles/components/slider/slider.scss';
import SliderButton from './SliderButton';
import Indicator from './Indicator';


const Slider = (props) => {

  const dispatch = useDispatch();
  const currentIndex = useSelector(state => state.currentIndex);

  useEffect(() => {
    const firstImage = document.getElementById('slider-img-0');
    firstImage.style.zIndex = 2;
  }, [])

  const handleImgChange = function(type, e) {
    let nextIndex = currentIndex + type;
    
    const currentEl = document.getElementById(`slider-img-${currentIndex}`);
    const nextEl = document.getElementById(`slider-img-${nextIndex}`);

    nextEl.style.zIndex = 1;
    currentEl.className += ' fadeOut';
    nextEl.className += ' fadeIn';

    if (nextIndex > props.images.length -1)
      nextIndex = 0;
    else if (nextIndex < 0)
      nextIndex = props.images.length -1;
    
    dispatch({
      type: 'SLIDER_UPDATE_CURR_INDEX', 
      index: nextIndex
    })

    setTimeout(() => {
        rmClassName(currentEl, 'fadeOut');
        rmClassName(nextEl, 'fadeIn');
        currentEl.style.zIndex = 0;
        dispatch({type: 'SLIDER_HANDLE_DISABLE'});
    }, 500)
  }
  return (
    <div className='slider'>
      <Indicator images={props.images}/>
      <div className='imgContainer'>
        {
          props.images.map((image, index) => 
            <img
              key={`slider-img-${index}`}
              alt='main image' 
              id={`slider-img-${index}`}
              className={'sliderImg'}
              src={image.path} 
            />
          )
        }
      </div>
      <SliderButton direction='left' handleImgChange={handleImgChange} />
      <SliderButton direction='right' handleImgChange={handleImgChange} />
    </div>
  )
}

export default Slider;