import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import process from 'process';
import PropTypes from 'prop-types';

export const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2 style={{ fontWeight: 'bold' }}>{item?.attributes.title}</h2>
        <div className="prices">
          {/* <h3>${item.oldPrice || item?.attributes.price + 30}</h3> */}
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      isNew: PropTypes.bool,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      img2: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    oldPrice: PropTypes.number,
  }).isRequired,
};

export default Card;
