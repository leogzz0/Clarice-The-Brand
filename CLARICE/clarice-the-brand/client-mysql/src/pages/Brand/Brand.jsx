import React, { useEffect } from 'react';
import { useNavbarVisibility } from '../../contexts/NavbarContext';
import './Brand.scss';

const Brand = () => {
  const images = [
    // '/img/Editorial Clarice/176-SAM_0211.jpg',
    '/img/Editorial Clarice/59-SAM_0410.jpg',
    // '/img/Editorial Clarice/169-SAM_0224.jpg',
    '/img/Editorial Clarice/57-SAM_0412.jpg',
  ];

  const slogan = 'Stand Out';

  const [current, setCurrent] = React.useState(0);

  const { setIsVisible } = useNavbarVisibility();

  useEffect(() => {
    setIsVisible(false);
    return () => {
      setIsVisible(true);
    };
  }, [setIsVisible]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % images.length);
    }, 400);  // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="brand">
      <div className="slider">
        <img src={images[current]} alt={`slide-${current}`} />
        <h1 className="slogan">{slogan}</h1>
      </div>
      <div className="welcome-message">
        <p>
          <strong>Clarice The Brand stands for all those fashionistas out there who are willing to step up their looks.</strong><br /><br />
          We help you elevate your style and become the most confident version of yourself through your shoes so that you can be your true, most fashion self.
        </p>
      </div>
      <div className="collage">
        <div className="row top">
          <div className="col">
            <img src="/img/Editorial Clarice/61-SAM_0405.jpg" alt="Boots from Clarice" />
          </div>
          <div className="col">
            <img src="/img/Editorial Clarice/200-SAM_0161.jpg" alt="Heels from Clarice" />
          </div>
        </div>
        <div className="row bottom">
          <div className="col">
            <img src="/img/Editorial Clarice/97-SAM_0346.jpg" alt="Heels from Clarice" />
          </div>
          <div className="col">
            <img src="/img/Editorial Clarice/28-SAM_0473.jpg" alt="Heels from Clarice" />
          </div>
          <div className="col">
            <img src="/img/Editorial Clarice/DSC_1361.JPG" alt="Boots from Clarice" />
          </div>
        </div>
      </div>
      <div className="welcome-message">
        <p>
          <strong>In Clarice The Brand, we create It shoes for It girls!</strong>
          <br />
          <br />
          We limit our pieces to offer you exclusiveness so that you can continue to elevate your authentic self. 
          As Marylin Monroe once said, “Give a woman the right shoes and she can conquer the world” and we couldn’t agree more! 
          We believe in your power to accomplish anything your heart desires and we are here to help you step out in style, step up in power.
          <br />
          Welcome to the Clarice The Brand community, it is lovely to have you here!
        </p>
      </div>
      <div className="collage2">
        <div className="row">
          <div className="col large">
            <img src="/img/Editorial Clarice/20-SAM_0487.jpg" alt="Two models" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="/img/Editorial Clarice/137-SAM_0272.jpg" alt="Champagne model" />
          </div>
          <div className="col">
            <img src="/img/Editorial Clarice/210-SAM_0148.jpg" alt="Heels" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
