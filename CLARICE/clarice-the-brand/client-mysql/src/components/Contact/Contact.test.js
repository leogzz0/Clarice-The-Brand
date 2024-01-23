import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
  it('renders Contact component without crashing', () => {
    render(<Contact />);
    expect(screen.getByText('Be in touch with us:')).toBeInTheDocument();
  });

  it('contains input fiels, button, and social media icons', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('Enter your e-mail...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /join us/i })).toBeInTheDocument();
    expect(screen.getByTestId('FacebookIcon')).toBeInTheDocument();
    expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument();
  });

  it('allows input to be entered', () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText('Enter your e-mail...');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('social media icons have correct links', () => {
    render(<Contact />);
    const facebookIconLink = screen.getByTestId('FacebookIcon').closest('a');
    const instagramIconLink = screen.getByTestId('InstagramIcon').closest('a');
    expect(facebookIconLink).toHaveAttribute('href', 'https://www.facebook.com/profile.php?id=100090770750687');
    expect(instagramIconLink).toHaveAttribute('href', 'https://www.instagram.com/claricethebrand/');
  });
});