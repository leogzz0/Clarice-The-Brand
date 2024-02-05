import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.scss';

const ContactUs = () => {
  const images = [
    '/img/EditorialClariceWebp/DSC_1410.webp',
    '/img/EditorialClariceWebp/DSC_1431.webp',
    '/img/EditorialClariceWebp/DSC_1415.webp',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, [images.length]);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pytinc', 'template_hv6t6ib', form.current, 'p7RmAtxPf3xRck2Yv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={images[currentImageIndex]} alt="Talk to Us" />
        <div className="quote-overlay">
          <p>Talk to Us</p>
        </div>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-field">
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" id="user_name" required />
          </div>
          <div className="form-field">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required />
          </div>
          <div className="form-field">
            <input type="submit" value="Send" className="submit-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
