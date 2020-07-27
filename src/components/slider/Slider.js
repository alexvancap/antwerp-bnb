import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import rmClassName from '../../helperFunctions/rmClassName';
import './../../styles/components/slider/slider.scss';
import SliderButton from './SliderButton';


const Slider = (props) => {

  const dispatch = useDispatch();
  const currentImg = useSelector(state => state.currentImg);
  const isDisabled = useSelector(state => state.disabled);

  useEffect(() => {
    const firstImage = document.getElementById('slider-img-0');
    firstImage.style.zIndex = 2;
    dispatch({type: 'SAVE_INDEX_SLIDER_IMAGES', images: props.images});
    dispatch({type: 'SLIDER_UPDATE_CURR_IMG', image: props.images[0]});
  }, [])

  const handleImgChange = function(type, e) {
    const currIndex = props.images.indexOf(currentImg);
    let nextIndex = currIndex + type;

    if (nextIndex > props.images.length -1)
      nextIndex = 0;
    else if (nextIndex < 0)
      nextIndex = props.images.length -1;

    let nextImg = props.images[nextIndex];
    
    const currentEl = document.getElementById(`slider-img-${currIndex}`);
    const nextEl = document.getElementById(`slider-img-${nextIndex}`);

    nextEl.style.zIndex = 1;
    currentEl.className += ' fadeOut';
    nextEl.className += ' fadeIn';
    
    dispatch({
      type: 'SLIDER_UPDATE_CURR_IMG', 
      image: nextImg
    })

    setTimeout(() => {
        rmClassName(currentEl, 'fadeOut');
        rmClassName(nextEl, 'fadeIn');
        currentEl.style.zIndex = 0;
        dispatch({type: 'SLIDER_HANDLE_DISABLE'});
    }, 1000)
  }

  if(currentImg)
    return (
      <div className='slider'>
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
  else
    return (
      <div className='slider'>
        <div className='imgContainer'>
          <div
            key='slider-img-0'
            alt='main image' 
            id='slider-img-0'
            className={'sliderImg'}
          />
          </div>
      </div>
    )
  }

export default Slider;