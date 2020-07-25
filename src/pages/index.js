import Slider from './../components/Slider/Slider';
import sliderConfig from "./../../config/IndexSlider.config";

import './../styles/pages/index/index.scss';

const Index = () => (
  <Slider images={sliderConfig} />
);

export default Index;