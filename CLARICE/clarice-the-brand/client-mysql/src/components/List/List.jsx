import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import useFetch from '../../hooks/useFetch';
import process from 'process';
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

  useEffect(() => {
    data?.forEach(item => {
      const imageUrl = `${process.env.REACT_APP_UPLOAD_URL}${item.attributes.img.data.attributes.url}`;
      const image2Url = `${process.env.REACT_APP_UPLOAD_URL}${item.attributes.img2.data.attributes.url}`;

      new Image().src = imageUrl;
      new Image().src = image2Url;
    });
  }, [data]);

  return (
    <div className="list">
      {loading ? '' : data?.map((item) => <Card item={item} key={item.id} />)}
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
