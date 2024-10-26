import React from 'react';
import PropTypes from 'prop-types';
import './FifteenCollage.scss';

const FifteenCollage = ({ photos }) => {
  return (
    <div className="type-one-collage">
      <img src={photos[0]} alt="photo 0" className="full-width" />
      <div className="half-width">
        <img src={photos[1]} alt="photo 1" />
        <img src={photos[2]} alt="photo 2" />
      </div>
      <img src={photos[3]} alt="photo 3" className="full-width" />
      <div className="half-width">
        <img src={photos[4]} alt="photo 4" />
        <img src={photos[5]} alt="photo 5" />
      </div>
      <div className="half-width">
        <img src={photos[6]} alt="photo 6" />
        <img src={photos[7]} alt="photo 7" />
      </div>
      <img src={photos[8]} alt="photo 8" className="full-width" />
      <div className="half-width">
        <img src={photos[9]} alt="photo 9" />
        <img src={photos[10]} alt="photo 10" />
      </div>
      <img src={photos[11]} alt="photo 11" className="full-width" />
      <div className="half-width">
        <img src={photos[12]} alt="photo 12" />
        <img src={photos[13]} alt="photo 13" />
      </div>
      <img src={photos[14]} alt="photo 14" className="full-width" />
      <div className="half-width">
        <img src={photos[15]} alt="photo 15" />
        <img src={photos[16]} alt="photo 16" />
      </div>
      <div className="half-width">
        <img src={photos[17]} alt="photo 17" />
        <img src={photos[18]} alt="photo 18" />
      </div>
      <img src={photos[19]} alt="photo 19" className="full-width" />
      <div className="half-width">
        <img src={photos[20]} alt="photo 20" />
        <img src={photos[21]} alt="photo 21" />
      </div>
    </div>
  );
};

FifteenCollage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FifteenCollage;
