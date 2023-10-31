import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="list">
      {loading
        ? 'loading'
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

List.propTypes = {
  subCats: PropTypes.arrayOf(PropTypes.number).isRequired,
  maxPrice: PropTypes.number.isRequired,
  sort: PropTypes.string.isRequired,
  catId: PropTypes.number.isRequired,
};

export default List;