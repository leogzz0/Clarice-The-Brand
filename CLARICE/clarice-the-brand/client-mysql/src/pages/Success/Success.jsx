import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Success.scss';

function Success() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="success-page success">
      <CheckCircleIcon className="icon success-icon" />
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase! Your order has been processed successfully.</p>
      <p>You will receive an email with the order details shortly.</p>
      <button className="home-button" onClick={handleGoHome}>Keep Shopping</button>
    </div>
  );
}

export default Success;
