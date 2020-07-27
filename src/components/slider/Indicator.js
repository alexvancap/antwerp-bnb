import { useSelector, useDispatch } from 'react-redux';
import './../../styles/components/Slider/Indicator.scss'

const Indicator = (props) => {
  const currentIndex = useSelector(state => state.currentIndex);
  const isDisabled = useSelector(state => state.disabled);

  const checkIfActive = (index) => index === currentIndex ? 'active' : 'unactive'

  const checkIfDisabled = () => isDisabled ? 'disabled' : ''

  const handleDotClick = (index) => {
    if(index !== currentIndex && !isDisabled)
      props.handleImgChange(index)
  }
  return (
    <div id='indicator'>

      {/* the background is a sibling of the dotContainer 
      because we don't want the active dot to be transparent. */}
      <div id='background' />
      <div id='dotContainer'>
        {
          props.images.map((img, index) => (
            <div
              onClick={() => handleDotClick(index)}
              key={`slider-indicator-${index}`} 
              className={`dot ${checkIfActive(index)} ${checkIfDisabled()}`}
              index={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Indicator;