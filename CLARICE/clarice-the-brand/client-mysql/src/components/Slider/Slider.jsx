import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    '/img/ClariceGlitz&GlamourCollectionWEBP/fav closeup cheetah y vino.webp',
    '/img/ClariceGlitz&GlamourCollectionWEBP/cheetah closeupp.webp',
  ];

  useEffect(() => {
    const preloadImage = document.createElement('link');
    preloadImage.rel = 'preload';
    preloadImage.as = 'image';
    preloadImage.href = data[0];
    document.head.appendChild(preloadImage);

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(preloadImage);
    };
  }, [data]);

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} loading={index === 0 ? 'eager' : 'lazy'} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
