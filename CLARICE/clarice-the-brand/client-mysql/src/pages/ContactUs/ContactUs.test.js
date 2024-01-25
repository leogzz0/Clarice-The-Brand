import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from './ContactUs';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn().mockResolvedValue({ text: 'OK' }),
}));

describe('ContactUs Component', () => {
  it('renders without crashing', () => {
    render(<ContactUs />);
    // Check if the form and image container are rendered
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByAltText('Talk to Us')).toBeInTheDocument();
  });

  it('sends email on form submission', async () => {
    emailjs.sendForm.mockResolvedValueOnce({ text: 'OK' });
    render(<ContactUs />);
    // fill in and submit the form
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello there!' } });
    fireEvent.click(screen.getByText('Send'));
    // expect emailjs.sendForm to have been called with correct arguments
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      'service_0pytinc', 'template_hv6t6ib', expect.anything(), 'p7RmAtxPf3xRck2Yv'
    );
  });
});
