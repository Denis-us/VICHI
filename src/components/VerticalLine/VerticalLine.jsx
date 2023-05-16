import React, { useState, useEffect } from 'react';
import SocialMedia from '../SocialMedia'
import s from './VerticalLine.module.css'

function VerticalLine() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numSpans, setNumSpans] = useState(Math.floor(windowWidth / 200));

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setNumSpans(Math.floor(windowWidth / 200) + 1);
  }, [windowWidth]);

  return (
    <div>
        <div className={s.verticalLineBlock}>
            {Array.from(Array(numSpans)).map((_, index) => (
                <span key={index} className={s.verticalLine}></span>
            ))}
        </div>
        <SocialMedia/>
    </div>
    
  );
}

export default VerticalLine