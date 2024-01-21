import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';

jest.mock('../Card/Card', () => {
  // eslint-disable-next-line react/prop-types
  const MockCard = ({ item }) => <div>{item.title}</div>;
  MockCard.displayName = 'MockCard';
  return MockCard;
});


describe('Carouse; Component', () => {
  const mockProducts = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
  ];

  it('renders without crashing', () => {
    render(<Carousel products={mockProducts} />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('shows next product on next button click', () => {
    render(<Carousel products={mockProducts} />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('shows previous product on prev button click', () => {
    render(<Carousel products={mockProducts} />);
    fireEvent.click(screen.getByText('Prev'));
    expect(screen.getByText('Product 3')).toBeInTheDocument();
  });

  it('displays no products message when there are no products', () => {
    render(<Carousel products={[]} />);
    expect(screen.getByText('No products available')).toBeInTheDocument();
  });
});