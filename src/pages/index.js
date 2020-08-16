import Slider from './../components/index/Slider/Slider';
import sliderConfig from "./../../config/IndexSlider.config";
import './../styles/pages/index/index.scss';
import indexConfig from './../../config/index.config';
import IndexCard from './../components/index/IndexCard';

const Index = () => (
  <div>
    <Slider images={sliderConfig} />
    <div id='content'>
      {
        indexConfig.map((slide, index) => <IndexCard data={slide} index={index} />)
      }
    </div>
  </div>
);

export default Index;