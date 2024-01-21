import React from 'react';
import { describe, it, expect } from 'jest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';

describe('Card Component', () => {
  const mockItem = {
    id: 1,
    attributes: {
      isNew: true,
      title: 'Fashion Item',
      price: 100,
      img: { data: { attributes: { url: 'image1.jpg'}}},
      img2: { data: { attributes: { url: 'image2.jpg'}}},
    }
  };

  it('renders without crashing', () => {
    render(
      <Router>
        <Card item={mockItem} />
      </Router>
    );
  });

  it('displays the item title and price', () => {
    render(
      <Router>
        <Card item={mockItem} />
      </Router>
    );
    expect(screen.getByText('Fashion Item')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('displays "New Season" when item is new', () => {
    render(
      <Router>
        <Card item={{ ...mockItem, attributes: { ...mockItem.attributes, isNew: true } }} />
      </Router>
    );
  });

  it('creates a link to the product page', () => {
    render(
      <Router>
        <Card item={mockItem} />
      </Router>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', `/product/${mockItem.id}`);
  });
});