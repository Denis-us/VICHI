import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import jellyfishBlue from '../../pictures/jpg/jellyfish-blue.jpg';
import jellyfishRed from '../../pictures/jpg/jellyfish-red.jpg';
import jellyfishWhite from '../../pictures/jpg/jellyfish-white.jpg';
import { ReactComponent as ArrowSlider } from '../../pictures/svg/icon-arrow-right-swiper.svg';
import s from './ProjectSlider.module.css';


const CustomPrevArrow = ({ onClick }) => (
  <button onClick={onClick}>
    <ArrowSlider className={s.arrowSlider}/>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button onClick={onClick}>
    <ArrowSlider className={`${s.arrowSlider} ${s.rotated}`}/>
  </button>
);

const ProjectSlider = () => {
    const settings = {
      dots: true,
      dotsClass: s.customDots,
      customPaging: () => <div className={s.customDot}></div>,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };
  
    return (
      
      <div className={s.sliderBlock}>
        <Slider {...settings} className={s.slider}>
          <div className={s.slide}>
            <img src={jellyfishRed} className={s.slideImg} alt="jellyfish-red" />
          </div>
          <div className={s.slide}>
            <img src={jellyfishBlue} className={s.slideImg} alt="jellyfish-blue" />
          </div>
          <div className={s.slide}>
            <img src={jellyfishWhite} className={s.slideImg} alt="jellyfish-white" />
          </div>
        </Slider>
      </div>
      
    );
}

export default ProjectSlider