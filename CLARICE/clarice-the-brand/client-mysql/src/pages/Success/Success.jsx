import React from 'react';
import { useLocation } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isSuccess = query.get('success') === 'true';

  return (
    <div>
      {isSuccess ? (
        <div>
          <h1>Thank you for your purchase!</h1>
          <p>Your order has been processed successfully.</p>
          {/* You can add more details like order summary, etc. here */}
        </div>
      ) : (
        <div>
          <h1>Transaction Cancelled</h1>
          <p>Your order was not completed. Please try again.</p>
        </div>
      )}
    </div>
  );
}

export default Success;
