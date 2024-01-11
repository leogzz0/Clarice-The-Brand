import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './Success.scss';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const isSuccess = query.get('success') === 'true';

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={`success-page ${isSuccess ? 'success' : 'cancelled'}`}>
      {isSuccess ? (
        <>
          <CheckCircleIcon className="icon success-icon" />
          <h1>Payment Successful</h1>
          <p>Thank you for your purchase! Your order has been processed successfully.</p>
          <p>You would receive an email with the order details.</p>
        </>
      ) : (
        <>
          <CancelIcon className="icon cancel-icon" />
          <h1>Transaction Cancelled</h1>
          <p>We are sorry, your order was not completed.</p>
        </>
      )}
      <button className="home-button" onClick={handleGoHome}>Keep Shopping</button>
    </div>
  );
}

export default Success;
