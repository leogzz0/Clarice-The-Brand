import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

const List = ({ subCats, maxPrice, sort, catId, searchQuery }) => {
  let queryString = '/products?populate=*';

  if (catId) {
    queryString += `&[filters][categories][id]=${catId}`;
    subCats.forEach(item => {
      queryString += `&[filters][sub_categories][id][$eq]=${item}`;
    });
  }

  if (searchQuery) {
    queryString += `&filters[title][$containsi]=${searchQuery}`;
  }

  if (maxPrice) {
    queryString += `&[filters][price][$lte]=${maxPrice}`;
  }

  if (sort === 'asc' || sort === 'desc') {
    queryString += `&sort=price:${sort}`;
  }

  const { data, loading, error } = useFetch(queryString);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="list">
      {loading ? 'LOADING...' : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

List.propTypes = {
  subCats: PropTypes.arrayOf(PropTypes.number),
  maxPrice: PropTypes.number,
  sort: PropTypes.string,
  catId: PropTypes.number,
  searchQuery: PropTypes.string,
};

export default List;
