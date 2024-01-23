import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText('Clarice The Brand')).toBeInTheDocument();
  });

  it('contains all the necessary links with correct paths', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const shopLink = screen.getByText('Shop');
    expect(shopLink.closest('a')).toHaveAttribute('href', '/products/1');
    const collectionLink = screen.getByText('Collection');
    expect(collectionLink.closest('a')).toHaveAttribute('href', '/collections');
    const editorialLink = screen.getByText('Editorial');
    expect(editorialLink.closest('a')).toHaveAttribute('href', '/editorial');
    const brandLink = screen.getByText('Brand');
    expect(brandLink.closest('a')).toHaveAttribute('href', '/brand');
    const contactLink = screen.getByText('Contact');
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
    const conditionsLink = screen.getByText('General Conditions');
    expect(conditionsLink.closest('a')).toHaveAttribute('href', '/conditions');
    const instagramLink = screen.getByText('Instagram');
    expect(instagramLink.closest('a')).toHaveAttribute('href', 'https://www.instagram.com/claricethebrand/');
    expect(instagramLink.closest('a')).toHaveAttribute('target', '_blank');
    expect(instagramLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
    const facebookLink = screen.getByText('Facebook');
    expect(facebookLink.closest('a')).toHaveAttribute('href', 'https://www.facebook.com/profile.php?id=100090770750687');
    expect(facebookLink.closest('a')).toHaveAttribute('target', '_blank');
    expect(facebookLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');

  });

  it('displays the correct text content', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText(/Clarice The Brand stands for all those fashionistas out there/i)).toBeInTheDocument();
    expect(screen.getByText(/© Copyright 2023. All Rights Reserved/i)).toBeInTheDocument();
  });
});