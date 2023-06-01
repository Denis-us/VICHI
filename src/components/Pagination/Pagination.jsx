import React, { useEffect, useState } from 'react';
import s from './Pagination.module.css'

const Pagination = ({ slide, lastSlide, index, activeSlide }) => {
  const isActive = activeSlide === index;
  const [opacity, setOpacity] = useState(isActive ? 1 : 0.5);

  useEffect(() => {
    handleActiveClassChange()
    // eslint-disable-next-line
  }, [isActive])

  const handleActiveClassChange = () => {
    setOpacity(isActive ? 1 : 0.5);
  };

  const getPaginationClassName = () => {
    let className = s.paginationEl;
  
    if (index === lastSlide) {
      className += ` ${s.lastSlide}`;
    }
  
    if (index === activeSlide) {
      return `${className} ${s.active}`;
    } else if (index === activeSlide - 1 || index === activeSlide + 1) {
      return `${className} ${s.nearActive}`;
    }
  
    return className;
  };

  return (
    <div
        className={getPaginationClassName()}
        style={{ opacity }}
        key={slide._id}
    >
      <span className={s.paginationNumber}>{`0${index+1}`.padStart(2, '0')}</span>
    </div>
  );
};

export default Pagination;