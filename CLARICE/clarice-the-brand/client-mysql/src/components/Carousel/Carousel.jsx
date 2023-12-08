import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    if (products && products.length) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }
  };

  const prevProduct = () => {
    if (products && products.length) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    }
  };

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="carousel-container">
      <button onClick={prevProduct}>Prev</button>
      <div className="carousel-item">
        <Card item={products[currentIndex]} />
      </div>
      <button onClick={nextProduct}>Next</button>
    </div>
  );
};

Carousel.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Carousel;
