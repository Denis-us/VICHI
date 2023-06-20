import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { ReactComponent as ArrowSlider } from '../../pictures/svg/btn-play-slider-two.svg';
import { ReactComponent as ArrowRight } from '../../pictures/svg/arrow-slider.svg';
// import PaginationSlider from '../PaginationSlider';
import BtnViewAll from '../BtnViewAll';
import './SliderNew.css';


const SliderNew = ({ onSlideChange, photos }) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  
  useEffect(() => {
    if (photos.length > 0) {
      onSlideChange(photos[0]);
    }
    
  // eslint-disable-next-line
  }, [photos]);

  useEffect(() => {
    const handleKeyboardNavigation = (event) => {
      if (swiper) {
        if (event.key === 'ArrowLeft') {
          swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {
          swiper.slideNext();
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardNavigation);

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [swiper]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setActiveSlide(activeIndex);

    if (photos.length > 0 && photos[activeIndex]) {
      onSlideChange(photos[activeIndex]);
    }
  };

  // const handleActiveSlideHover = (e) => {
  //   if (window.innerWidth >= 768) {
  //     const slide = e.currentTarget
  //     const picture = slide.querySelector('.picture-block');
  //     if (picture) {
  //       const descriptionElement = picture.querySelector('.description');
  //       const icoPlayElement = picture.querySelector('.icoPlay');

  //     if(slide.classList.contains('swiper-slide-active')) {
  //       if(e.type === 'mouseleave') {
  //         picture.style.width = '160px';
  //         descriptionElement.style.transform = 'translateY(100%)';
  //         icoPlayElement.style.opacity = '0';
  //       }
  //       if (e.type === 'mouseenter' || e.type === 'mouseover') {
  //         picture.style.width = '220px';
  //         descriptionElement.style.transform = 'translateY(0%)';
  //         icoPlayElement.style.opacity = '1';
  //       }
  //     }
  //     }
  //   }
  // };

  const slideReset = () => {
    const pictures = document.querySelectorAll('.picture-block');
    pictures.forEach((picture) => {
      picture.style.width = '160px';
    });
  }

  const handleSlideChangeAndReset = (swiper) => {
    
    setSwiper(swiper);
    handleSlideChange(swiper);
    slideReset();
  }

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={window.innerWidth >= 1440 ? 4 : (window.innerWidth >= 768 ? 2 : 1)}
      centeredSlides={window.innerWidth >= 768 ? false : true}
      navigation={{
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
        clickable: true
      }}
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
    >

      {/* <div className="swiper-pagination">
        {photos.map((slide, index) => (
          <PaginationSlider slide={slide} lastSlide={photos.length-1} index={index} activeSlide={activeSlide} key={slide._id} />
        ))}
      </div> */}

      {photos.map((slide, index) => (
        <SwiperSlide key={slide._id} className={`slide ${activeSlide === index ? 'swiper-slide-active' : ''}`}
            style={{transform: 'none'}}
            // onMouseOver={handleActiveSlideHover}
            // onMouseEnter={handleActiveSlideHover}
            // onMouseLeave={handleActiveSlideHover}
            >
          
          <div className='picture-block'>
            <div className='picture'>
              <p className='number'>{`0${index+1}`.padStart(2, '0')}</p>
              <img src={slide.image} alt={slide.alt} className='image'/>
              <p className='title'>СЛАЙД</p>
              <ArrowSlider className='icoPlay'/>
            </div>
            {activeSlide === index && (
            <div className='description'>
              <div className='descriptionStr'>
                <p className='name'>company</p>
                <p className='value'>JELLYFISH</p>
              </div>
              <div className='descriptionStr'>
                <p className='name'>name</p>
                <p className='value'>OCEAN</p>
              </div>
              <div className='descriptionStr'>
                <p className='name'>director</p>
                <p className='value'>MELNYK KOSTYA</p>
              </div>
            </div>
            )}
            
          </div>

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

    <BtnViewAll/>
    
    </Swiper>
  );
};

export default SliderNew