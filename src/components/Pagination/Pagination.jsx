import React, { useEffect, useState } from 'react';
import s from './Pagination.module.css'

const Pagination = ({ slide, index, activeSlide }) => {
//   const isActive = activeSlide === index;
const isActive = (index === -1 && activeSlide === 0) || activeSlide === index;
  const [opacity, setOpacity] = useState(isActive ? 1 : 0.5);
  console.log(index)
  console.log(activeSlide)
  console.log(isActive)

  useEffect(() => {
    handleActiveClassChange()
    // eslint-disable-next-line
  }, [isActive])

  const handleActiveClassChange = () => {
    setOpacity(isActive ? 1 : 0.5);
  };

  return (
    <div
        className={`${s.paginationEl} ${isActive ? s.active : ''}`}
        style={{ opacity }}
        key={slide.id}
    >
      <span className={s.paginationNumber}>{slide.id}</span>
    </div>
  );
};

export default Pagination;