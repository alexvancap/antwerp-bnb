import Slider from './../components/Slider/Slider';
import sliderConfig from "./../../config/IndexSlider.config";

import './../styles/pages/index/index.scss';

const Index = () => (
  <div>
    <Slider images={sliderConfig} />
    <div id='content'>
      <div className='indexCard'>
        <img src='index-slider/1.jpg'></img>
        <div className='indexCardContent'>
          <div className='indexCardText'>
            <h1>About the B&B</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            </p>
          </div>
        </div>
      </div>
      <div className='indexCard'>
        <div className='indexCardContent'>
          <div className='indexCardText'>
            <h1>About the B&B</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            </p>
          </div>
        </div>
        <img src='index-slider/2.jpg'></img>
      </div>
      <div className='indexCard'>
      <img src='index-slider/3.jpg'></img>
        <div className='indexCardContent'>
          <div className='indexCardText'>
            <h1>About the B&B</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;