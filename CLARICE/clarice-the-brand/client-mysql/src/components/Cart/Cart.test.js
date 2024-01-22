import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../redux/cartReducer';
import Cart from './Cart';
import * as makeRequestModule from '../../makeRequest';

jest.mock('@stripe/stripe-js', () => ({
  loadStripe: jest.fn().mockResolvedValue({
    redirectToCheckout: jest.fn().mockResolvedValue({}),
  }),
}));

jest.mock('../../makeRequest', () => ({
  makeRequest: {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  },
}));


const mockStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      products: [
        { id: 1, title: 'Product 1', price: 100, img: 'img1.jpg', quantity: 1, color: 'silver', size: 'size23' },
      ],
    },
  },
});

const renderComponent = (props = {}) =>
  render(
    <Provider store={mockStore}>
      <Cart {...props} />
    </Provider>
  );

describe('Cart Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText('SHOPPING CART')).toBeInTheDocument();
  });

  it('displays products in cart', () => {
    renderComponent();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('handles remove item from cart', () => {
    renderComponent();
    const deleteButton = screen.getByTestId('DeleteOutlinedIcon');
    const firstItemTitle = 'Product 1';
    expect(screen.getByText(firstItemTitle)).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(screen.queryByText(firstItemTitle)).not.toBeInTheDocument();
  });

  it('handles payment process', async () => {
    renderComponent();
    const checkoutButton = screen.getByTestId('checkout-button');
    fireEvent.click(checkoutButton);

    await waitFor(() => {
      expect(makeRequestModule.makeRequest.post).toHaveBeenCalled();
    });
  });
});