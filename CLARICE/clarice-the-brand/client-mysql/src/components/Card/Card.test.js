import React from 'react';
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
      img: { data: { attributes: { url: 'image1.jpg' } } },
      img2: { data: { attributes: { url: 'image2.jpg' } } },
    },
  };

  const renderCard = (item) => {
    render(
      <Router>
        <Card item={item} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderCard(mockItem);
    expect(screen.getByText('Fashion Item')).toBeInTheDocument();
  });

  it('displays the item title and price', () => {
    renderCard(mockItem);
    expect(screen.getByText('Fashion Item')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('displays "New Season" when item is new', () => {
    renderCard(mockItem);
    expect(screen.getByText('New Season')).toBeInTheDocument();
  });

  it('creates a link to the product page', () => {
    renderCard(mockItem);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/product/${mockItem.id}`);
  });
});
