import React, { useState } from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { ReactComponent as ArrowSlider } from '../../pictures/svg/play-button-slider.svg';
import { ReactComponent as ArrowRight } from '../../pictures/svg/icon-arrow-right-swiper.svg';
import Pagination from '../Pagination';
import './Slider.css';


const Slider = ({ slides, onSlideChange  }) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = (swiper) => {
      const activeIndex = swiper.realIndex;
      setActiveSlide(activeIndex);
      onSlideChange && onSlideChange(slides[activeIndex]);
  };

  const handleActiveSlideHover = (e) => {
    const slide = e.currentTarget
    const picture = slide.querySelector('.picture');
    const descriptionElement = slide.querySelector('.description');
    const icoPlayElement = slide.querySelector('.icoPlay');

    if(slide.classList.contains('swiper-slide-active')) {
      if(e.type === 'mouseleave') {
        picture.style.width = '25vh';
        descriptionElement.style.opacity = '0';
        icoPlayElement.style.opacity = '0';
      }
      if (e.type === 'mouseenter' || e.type === 'mouseover') {
        picture.style.width = 'inherit';
        descriptionElement.style.opacity = '1';
        icoPlayElement.style.opacity = '1';
      }
    }
  };

  const slideReset = () => {
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((picture) => {
      picture.style.width = '20vh';
    });
  }

  const handleSlideChangeAndReset = (swiper) => {
    handleSlideChange(swiper);
    slideReset();
    setSwiper(swiper);
  }

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      navigation={{
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
        clickable: true
      }}
      // pagination={{ el: '.swiper-pagination', clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"coverflow"}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      onSlideChange={handleSlideChangeAndReset}
      onSwiper={(swiper) => handleSlideChangeAndReset(swiper)}
      className='swiper'
    >

      <div className="swiper-pagination">
        {slides.map((slide, index) => (
          <Pagination slide={slide} lastSlide={slides.length-1} index={index} activeSlide={activeSlide} key={slide.id} />
        ))}
      </div>

      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id} className={`slide ${activeSlide === index ? 'swiper-slide-active' : ''}`}
            onMouseOver={handleActiveSlideHover}
            onMouseEnter={handleActiveSlideHover}
            onMouseLeave={handleActiveSlideHover}>
          
          
          <div className='picture'>
            <p className='number'>{slide.id}</p>
            <img src={slide.image} alt={slide.alt} className='image'/>
            {activeSlide === index && (
              <ArrowSlider className='icoPlay'/>
            )}
          </div>
         
          
          {activeSlide === index && (
            <div className='description'>
              <p className='title'>DOCUMENTARY FILM</p>
              <p className='from'>from 599$</p>
              <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et scelerisque est, eu consequat
                tellus. Nunc eget lacinia massa.
              </p>
              <p className='director'>- director Melnyk Kostya</p>
              <button className='btnOrder'>ORDER</button>
            </div>
          )}
          
        </SwiperSlide>
      ))}
      
      <div className='slider-controler'>
        <div className='swiper-button-prev' onClick={() => swiper && swiper.slidePrev()}>
          <ArrowRight className='button-prev-slide'/>
        </div>
        <div className='swiper-button-next' onClick={() => swiper && swiper.slideNext()}>
          <ArrowRight className='button-next-slide'/>
        </div>
      </div>

    </Swiper>
  );
};

export default Slider