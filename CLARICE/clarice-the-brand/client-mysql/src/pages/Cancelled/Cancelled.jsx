import React from 'react';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import './Cancelled.scss';

function TransactionCancelled() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="cancelled-page cancelled">
      <CancelIcon className="icon cancel-icon" />
      <h1>Transaction Cancelled</h1>
      <p>We are sorry, your order was not completed.</p>
      <button className="home-button" onClick={handleGoHome}>Keep Shopping</button>
    </div>
  );
}

export default TransactionCancelled;
