import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FeaturedCollection.scss';

const FeaturedCollection = ({ imageUrl, season, collection }) => {
  return (
    <div className='featured-collection'>
      <img src={imageUrl} alt={collection} className='collection-image'/>
      <div className='content'>
        <h2 className='season'>{season}</h2>
        <h1 className='collection'>{collection}</h1>
        <Link to={`/collection/${season}`} className='discover-more-btn'>
          Discover More
        </Link>
      </div>
    </div>
  );
};

FeaturedCollection.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
};

export default FeaturedCollection;