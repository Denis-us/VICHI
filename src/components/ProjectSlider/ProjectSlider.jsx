import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import jellyfishBlue from '../../pictures/jpg/jellyfish-blue.jpg';
import jellyfishRed from '../../pictures/jpg/jellyfish-red.jpg';
import jellyfishWhite from '../../pictures/jpg/jellyfish-white.jpg';
import { ReactComponent as PlaySlider } from '../../pictures/svg/play-button-slider.svg';
import { ReactComponent as ArrowSlider } from '../../pictures/svg/icon-arrow-right-swiper.svg';
import s from './ProjectSlider.module.css';


const CustomPrevArrow = ({ onClick }) => (
  <button onClick={onClick} className={s.btnArrow}>
    <ArrowSlider className={s.arrowSlider}/>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button onClick={onClick} className={s.btnArrow}>
    <ArrowSlider className={`${s.arrowSlider} ${s.rotated}`}/>
  </button>
);

const ProjectSlider = () => {
    const settings = {
      dots: true,
      dotsClass: s.customDots,
      customPaging: (index) => <div className={s.customDot}>
          <button className={s.dotBtn}>{`0${index+1}`}</button>
        </div>,
      appendDots: dots => (
        <ul>
          {dots.map((dot, index) => {
            const classNames = `${dot.props.className}`;
            const dotStyles = dot.props.className.includes('slick-active') ? {height: '50px', opacity: '1'} : {};
      
            return (
              <li key={index} className={classNames} style={dotStyles}>
                {dot.props.children}
              </li>
            );
          })}
        </ul>
      ),
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
        <PlaySlider className={s.playSlider}></PlaySlider>
      </div>
      
    );
}

export default ProjectSlider