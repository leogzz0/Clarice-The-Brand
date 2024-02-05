import React from 'react';
import { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Product.scss';
import useFetch from '../../hooks/useFetch';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { useSwipeable } from 'react-swipeable';
import process from 'process';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState({
    id: null,
    size: '',
  });
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const size = useWindowSize();
  const images = [data?.attributes?.img, data?.attributes?.img2, data?.attributes?.img3, data?.attributes?.img4];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const ImageIndicator = ({ currentIndex, total }) => {
    return (
      <div className="image-indicator">
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={currentIndex === index ? 'active' : ''}
          >•</span>
        ))}
      </div>
    );
  };

  ImageIndicator.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  };


  const isSmallScreen = size.width <= 768;

  return (
    <div className="product">
      {loading ? (
        <div></div>
      ) : error ? (
        <div>SOMETHING WENT WRONG!</div>
      ) : (
        <>
          <div className="left">
            {isSmallScreen ? (
              <>
                <div {...handlers} className="mainImg">
                  <img
                    src={process.env.REACT_APP_UPLOAD_URL + images[currentImageIndex]?.data?.attributes?.url}
                    alt=""
                  />
                </div>
                <ImageIndicator currentIndex={currentImageIndex} total={images.length} />
              </>
            ) : (
              <>
                <div className="images">
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                    onClick={() => setSelectedImg('img')}
                  />
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img2?.data?.attributes?.url
                    }
                    alt=""
                    onClick={() => setSelectedImg('img2')}
                  />
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img3?.data?.attributes?.url
                    }
                    alt=""
                    onClick={() => setSelectedImg('img3')}
                  />
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img4?.data?.attributes?.url
                    }
                    alt=""
                    onClick={() => setSelectedImg('img4')}
                  />
                </div>
                <div className="mainImg">
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.[selectedImg]?.data?.attributes?.url
                    }
                    alt=""
                  />
                </div>
              </>
            )}
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.description}</p>
            <div className="sizes">
              <h3>Size:</h3>
              <div className="size-options">
                {data?.attributes?.product_sizes?.data?.map((sizeEntry) => {
                  const sizeNumber = sizeEntry.attributes.size.replace('size', '');
                  return (
                    <div
                      key={sizeEntry.id}
                      className={
                        `size-box ${selectedSize.size === sizeEntry.attributes.size
                          ? 'selected'
                          : ''} 
                          ${sizeEntry.attributes.quantity === 0 ? 'out-of-stock' : ''}`
                      }
                      onClick={() => sizeEntry.attributes.quantity > 0 && setSelectedSize({
                        id: sizeEntry.id,
                        size: sizeEntry.attributes.size
                      })}
                    >
                      {sizeNumber}
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className="add"
              onClick={() => {
                if (selectedSize.size) {
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      description: data.attributes.description,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      color: data.attributes.color,
                      size: selectedSize.size,
                      sizeId: selectedSize.id,
                      quantity: 1,
                    })
                  );
                } else {
                  alert('Please select a size before adding to cart.');
                }
              }}
            >
              ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
            </div>
            <div className="info">
              <span>Collection: La Beauté Collection</span>
              <span>Color: {data?.attributes?.color}</span>
              <span>Material: {data?.attributes?.material}</span>
              <span>Handcrafted in Mexico</span>
            </div>
            <hr />
            <div className="info">
              <span>FIT</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
