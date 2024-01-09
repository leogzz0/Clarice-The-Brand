import React from 'react';
import './About.scss';

const About = () => {
  const images = [
    '/img/EditorialClariceWebp/31-SAM_0469.webp',
  ];

  return (
    <>
      <div className='navbar-spacer'></div>
      <div className="about-container">
        <div className="about-text">
          <h1>ABOUT US.</h1>
          <br />
          <p>
            Clarice The Brand stands for all those fashionistas out there who are willing to step up their looks.

            We help you elevate your style and become the most confident version of yourself through your shoes so that you can be your true, most fashion self. 

            Marylin Monroe once said, “Give a woman the right shoes and she can conquer the world” and we couldn’t agree more! 
          </p>
          <br />
          <p>
            We believe in your power to accomplish anything your heart desires and we are here to help you step out in style, step up in power.

            In Clarice The Brand, we create It shoes for It girls
            We limit our pieces to offer you exclusiveness so that you can continue to elevate your authentic self.


            Welcome to the Clarice The Brand community, we’re glad you’re here
          </p>
        </div>
        <div className="about-image">
          <img src={images[0]} alt="About Us" />
          <div className="quote">
            <p>Give a woman the right shoes and she can conquer the world.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
