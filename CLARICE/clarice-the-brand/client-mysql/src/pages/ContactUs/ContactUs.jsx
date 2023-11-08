import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.scss';

const ContactUs = () => {
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
    <>
      <div className='navbar-spacer'></div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
