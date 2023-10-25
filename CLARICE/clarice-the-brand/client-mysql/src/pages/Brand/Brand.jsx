// Brand.jsx
import React from 'react';
import './Brand.scss';

const Brand = () => {
  const images = [
    "https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1596725668413-d91baf68d9ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1485518882345-15568b007407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1042&q=80",
  ];

  const slogan = 'Stand Out';

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % images.length);
    }, 500);  // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="brand">
      <div className="slider">
        <img src={images[current]} alt={`slide-${current}`} />
        <h1 className="slogan">{slogan}</h1>
      </div>
      <div className="welcome-message">
        <p>Welcome to Clarice The Brand</p>
      </div>
      {/* Other sections... */}
    </div>
  );
};

export default Brand;
