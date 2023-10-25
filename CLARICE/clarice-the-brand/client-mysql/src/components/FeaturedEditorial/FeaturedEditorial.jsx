import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedEditorial.scss';

const FeaturedEditorial = ({ imageUrl, season, launchTitle, link }) => {
  return (
    <div className="featured-editorial">
      <img src={imageUrl} alt={launchTitle} className="editorial-image" />
      <div className="content">
        <h2 className="season">{season}</h2>
        <h1 className="launch-title">{launchTitle}</h1>
        <a href={link} className="discover-more-btn">Discover More</a>
      </div>
    </div>
  );
};

FeaturedEditorial.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  launchTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FeaturedEditorial;
