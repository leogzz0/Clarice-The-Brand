import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch';
import PropTypes from 'prop-types';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>This are some {type} products that are fan favorite.</p>
      </div>
      <div className="bottom">
        {error
          ? 'Something went wrong!'
          : loading
            ? 'loading'
            : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

FeaturedProducts.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FeaturedProducts;
