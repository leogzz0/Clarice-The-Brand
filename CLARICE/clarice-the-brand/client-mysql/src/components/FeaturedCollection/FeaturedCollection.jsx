import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FeaturedCollection.scss';

const FeaturedCollection = ({ imageUrl, season, collection }) => {
  return (
    <Link to={`/collection/${season}`} className='featured-collection-link'>
      <div className='featured-collection'>
        <img src={imageUrl} alt={collection} className='collection-image'/>
        <div className='overlay'></div> {/* Add an overlay for the hover effect */}
        <div className='content'>
          <h1 className='collection'>{collection}</h1>
        </div>
      </div>
    </Link>
  );
};

FeaturedCollection.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
};

export default FeaturedCollection;
