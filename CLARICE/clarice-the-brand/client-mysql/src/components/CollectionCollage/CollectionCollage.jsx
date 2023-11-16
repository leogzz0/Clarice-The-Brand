import React from 'react';
import PropTypes from 'prop-types';
import './CollectionCollage.scss';
// import Carousel from './Carousel'; // This should be your carousel component

const CollectionCollage = ({ photos }) => {
  return (
    <div className="collection-collage">
      {/* Full-width photo */}
      <img src={photos[0]} alt="Large cover" className="full-width" />

      {/* Text Block */}
      <div className="text-block">
        <p>a brief introduction to our amazing collection...</p>
        <p>a brief introduction to our amazing collection...</p>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <div className="carousel-title">
          <h2>La Beauté Collection</h2>
          <h2>La Beauté Collection</h2>
          <h2>La Beauté Collection</h2>
          {/* Navigation arrows or buttons */}
        </div>
        <div className="carousel">
          {/* <Carousel products={products} /> */}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="photo-row">
        <img src={photos[1]} alt="Photo 1" className="one-quarter" />
        <img src={photos[2]} alt="Photo 2" className="one-quarter" />
        <img src={photos[3]} alt="Photo 3" className="half" />
      </div>

      <div className="photo-row">
        <img src={photos[4]} alt="Photo 4" className="one-quarter" />
        <img src={photos[5]} alt="Photo 5" className="one-quarter" />
        <img src={photos[6]} alt="Photo 6" className="one-quarter" />
        <img src={photos[7]} alt="Photo 7" className="one-quarter" />
      </div>

      <div className="photo-row">
        <img src={photos[8]} alt="Photo 8" className="half" />
        <img src={photos[9]} alt="Photo 9" className="half" />
      </div>

      <div className="photo-row">
        <img src={photos[10]} alt="Photo 10" className="one-quarter" />
        <img src={photos[11]} alt="Photo 11" className="one-quarter" />
        <img src={photos[12]} alt="Photo 12" className="one-quarter" />
        <img src={photos[13]} alt="Photo 13" className="one-quarter" />
      </div>

      <div className="photo-row">
        <img src={photos[14]} alt="Photo 14" className="one-quarter" />
        <img src={photos[15]} alt="Photo 15" className="one-quarter" />
        <img src={photos[16]} alt="Photo 16" className="half" />
      </div>
    </div>
  );
};

CollectionCollage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  products: PropTypes.array.isRequired,
};

export default CollectionCollage;
