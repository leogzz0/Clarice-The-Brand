/* eslint-disable no-undef */
import React from 'react';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Product.scss';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [ selectedSize, setSelectedSize ] = useState('');
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data); 

  return (
    <>
      <div className='navbar-spacer'></div>
      <div className="product">
        {loading ? (
          <div>LOADING</div>
        ) : error ? (
          <div>SOMETHING WENT WRONG!</div>
        ) : (
          <>
            <div className="left">
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
                          `size-box ${selectedSize === sizeEntry.attributes.size 
                            ? 'selected' 
                            : ''} 
                          ${sizeEntry.attributes.quantity === 0 ? 'out-of-stock' : ''}`
                        }
                        onClick={() => sizeEntry.attributes.quantity > 0 && setSelectedSize(sizeEntry.attributes.size)}
                      >
                        {sizeNumber}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              </div> */}
              <button
                className="add"
                onClick={() => {
                  if (selectedSize) {
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        description: data.attributes.description,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        size: selectedSize,
                        quantity: 1,
                      })
                    );
                  } else {
                    alert('Please select a size before adding to cart.');
                  }
                }}
              >
                <AddShoppingCartIcon /> ADD TO CART
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
    </>
  );
};

export default Product;
