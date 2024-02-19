import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
import PropTypes from 'prop-types';
import process from 'process';

const Cart = ({ isCartOpen, isMobile, onClose }) => {
  const cartClass = `cart ${isCartOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`;
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => (
      total +=  item.price * item.quantity
    ));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    'pk_live_51NycZYFkkp11RfLBLJJE1DrPFO1rvCeuvC6R3EtsUP7UIMBSfD7jPglxtUN1RPUJBEOfRcRspKoUjrjz5uJRIFp900qRM0xvFi'
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post('/orders', {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cartClass}>
      <CloseIcon className="close-icon" onClick={onClose} />
      <h1>SHOPPING CART</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="color">{item.color}</div>
            <div className="size">Size: {item.size.replace('size', '')} (MX)</div>
            <div className="quantity">Quantity: {item.quantity}</div>
            <div className="price">${item.price}</div>
          </div>
          <div className='delete-container'>
            <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button data-testid="checkout-button" onClick={handlePayment}>
        <span className="button-text">PROCEED TO CHECKOUT</span>
        <span className="button-text button-text-appear">PROCEED TO CHECKOUT</span>
      </button>
      <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

Cart.propTypes = {
  isCartOpen: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Cart;