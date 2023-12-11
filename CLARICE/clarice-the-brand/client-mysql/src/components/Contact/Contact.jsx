import React from 'react';
import './Contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be in touch with us:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=100090770750687" target='_blank' rel='noreferrer'>
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/claricethebrand/" target='_blank' rel='noreferrer'>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
