import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FeaturedEditorial.scss';

const FeaturedEditorial = ({ imageUrl, season, launchTitle }) => {
  return (
    <div className="featured-editorial">
      <img src={imageUrl} alt={launchTitle} className="editorial-image" />
      <div className="content">
        <h2 className="season">{season}</h2>
        <h1 className="launch-title">{launchTitle}</h1>
        <Link to={`/editorial/${season}`} className="discover-more-btn">
          Discover More
        </Link>
      </div>
    </div>
  );
};

FeaturedEditorial.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  launchTitle: PropTypes.string.isRequired,
};

export default FeaturedEditorial;
