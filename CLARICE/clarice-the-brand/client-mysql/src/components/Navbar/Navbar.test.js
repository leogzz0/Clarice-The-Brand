import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

jest.mock('../../contexts/NavbarContext', () => ({
  useNavbarVisibility: () => ({
    isVisible: true,
    showNavbar: jest.fn(),
    hideNavbar: jest.fn(),
  }),
}));

jest.mock('../Cart/Cart', () => {
  const MockedCart = () => <div data-testid="mockedCart">Mocked Cart</div>;
  MockedCart.displayName = 'Cart';
  return MockedCart;
});

const mockStore = createStore(() => ({
  cart: { products: [] },
  search: { searchQuery: '' },
}));

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('CLARICE THE BRAND')).toBeInTheDocument();
    expect(screen.getByTestId('mockedCart')).toBeInTheDocument();
  });

  it('navigates to correct paths', () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const shopLink = screen.getByText('SHOP');
    expect(shopLink.closest('a')).toHaveAttribute('href', '/products/1');
    const collectionsLink = screen.getByText('COLLECTIONS');
    expect(collectionsLink.closest('a')).toHaveAttribute('href', '/collection');
    const editorialLink = screen.getByText('EDITORIALS');
    expect(editorialLink.closest('a')).toHaveAttribute('href', '/editorial');
    const brandLink = screen.getByText('BRAND');
    expect(brandLink.closest('a')).toHaveAttribute('href', '/brand');
    const homeLink = screen.getByText('CLARICE THE BRAND');
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    const aboutLink = screen.getByText('ABOUT');
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    const contactLink = screen.getByText('CONTACT');
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });

  it('toggles search bar', () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const searchIcon = screen.getByTestId('searchIcon');
    fireEvent.click(searchIcon);
    expect(screen.getByPlaceholderText('SEARCH')).toBeInTheDocument();
  });
});
