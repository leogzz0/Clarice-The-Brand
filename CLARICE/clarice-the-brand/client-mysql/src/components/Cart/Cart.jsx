/* eslint-disable no-undef */
import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const Cart = () => {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => (
      total += item.quantity * item.price
    ));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    'pk_test_51NycZYFkkp11RfLBILkc3GDUYT9aQB8F5Snr5Pgq3ueQ86OASZkJKpj7kWETf9lwlBhmr2n00I3gDsHZ95CEBGUU00vdBeuw7a'
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
    <div className="cart">
      <h1>SHOPPING CART</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">Size: {item.size.replace('size', '')} (MX)</div>
            <div className="price">Quantity: {item.quantity}</div>
            <div className="price">${totalPrice()}</div>
            <p>{item.description?.substring(0,50)}</p>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

export default Cart;