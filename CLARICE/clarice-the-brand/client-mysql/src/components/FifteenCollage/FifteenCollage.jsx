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
        <img src={photos[4]} alt="photo 5" />
        <img src={photos[5]} alt="photo 6" />
      </div>
      <div className="half-width">
        <img src={photos[6]} alt="photo 7" />
        <img src={photos[7]} alt="photo 8" />
      </div>
      <img src={photos[8]} alt="photo 9" className="full-width" />
      <div className="half-width">
        <img src={photos[9]} alt="photo 10" />
        <img src={photos[10]} alt="photo 11" />
      </div>
      <img src={photos[11]} alt="photo 12" className="full-width" />
      <div className="half-width">
        <img src={photos[12]} alt="photo 13" />
        <img src={photos[13]} alt="photo 14" />
      </div>
      <img src={photos[14]} alt="photo 15" className="full-width" />
      <div className="half-width">
        <img src={photos[15]} alt="photo 16" />
        <img src={photos[16]} alt="photo 17" />
      </div>
      <div className="half-width">
        <img src={photos[17]} alt="photo 18" />
        <img src={photos[18]} alt="photo 19" />
      </div>
      <img src={photos[19]} alt="photo 20" className="full-width" />
      <div className="half-width">
        <img src={photos[20]} alt="photo 21" />
        <img src={photos[21]} alt="photo 22" />
      </div>
    </div>
  );
};

FifteenCollage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FifteenCollage;
