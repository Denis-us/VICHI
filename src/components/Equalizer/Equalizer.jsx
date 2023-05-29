import React, { useEffect, useState } from 'react';
import s from './Equalizer.module.css';

const Equalizer = () => {
  const [barHeight, setBarHeight] = useState([10, 25, 50]); // Начальные значения высоты столбиков

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeight = barHeight.map(() => Math.random() * 100); // Генерация случайных значений высоты
      setBarHeight(newHeight);
    }, 150); // Интервал обновления значений (в миллисекундах)

    return () => clearInterval(interval);
  }, [barHeight]);

  return (
    <div className={s.equalizerBlock}>
        <div className={s.equalizerHeader}>
            <div className={s.equalizerName}>JellyFish</div>
            <div className={s.equalizer}>
                {barHeight.map((height, index) => (
                    <div key={index} className={s.bar} style={{ height: `${height}%` }} />
                ))}
            </div>
            <div className={s.equalizerText}>OCEAN</div>
        </div>
        <div className={s.description}>
            <div className={s.production}>Production - VICHI</div>
            <div className={s.director}>Director - MELNYK KOSTYA</div>
        </div>
    </div>
    
  );
};

export default Equalizer;