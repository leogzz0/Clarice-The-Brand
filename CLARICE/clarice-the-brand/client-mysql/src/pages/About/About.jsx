import React from 'react';
import './About.scss';

const About = () => {
  const images = [
    '/img/Editorial Clarice/31-SAM_0469.jpg',
    '/img/Editorial Clarice/50-SAM_0426.jpg',
  ];

  return (
    <div className='about-us'>
      <div className='header'>
        <div className='left-side'>
          <div className='words'>
            <h2>About Us</h2>
            <h2>Team</h2>
            <h2>Vision</h2>
          </div>
        </div>
        <div className='right-side'>
          <h1>
            <h1>ABOUT US.</h1>
            <p>
              Clarice The Brand stands for all those fashionistas out there who are willing to step up their looks.

              We help you elevate your style and become the most confident version of yourself through your shoes so that you can be your true, most fashion self. 

              Marylin Monroe once said, “Give a woman the right shoes and she can conquer the world” and we couldn’t agree more! 
              We believe in your power to accomplish anything your heart desires and we are here to help you step out in style, step up in power.

              In Clarice The Brand, we create It shoes for It girls
              We limit our pieces to offer you exclusiveness so that you can continue to elevate your authentic self.

              Welcome to the Clarice The Brand community, we’re glad you’re here
            </p>
          </h1>
        </div>
      </div>
      {/* <div className="full-width-image">
        <img src={images[0]} alt="image1" />
      </div> */}
      
      <div className="quote-and-image">
        <div className="quote">
          <div className="comma top-left">“</div>
          <p>
            Give a woman the right shoes and she can conquer the world
          </p>
          <div className="comma bottom-right">”</div>
        </div>
        
        <div className="image">
          <img src={images[1]} alt="image2" />
        </div>
      </div>
    </div>
  );
};

export default About;
