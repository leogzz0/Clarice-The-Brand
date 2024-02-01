import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.scss';

const ComingSoon = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="coming-soon-container">
      <h1>Coming Soon</h1>
      <p>We are currently working on enhancing your user experience. Our team is dedicated to bringing you the best features. Stay tuned!</p>
      <button className="home-button" onClick={handleGoHome}>Keep Shopping</button>
    </div>
  );
};

export default ComingSoon;
