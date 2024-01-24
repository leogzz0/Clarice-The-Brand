import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavbarProvider, useNavbarVisibility } from './NavbarContext';

const MockNavbarConsumer = () => {
  const { isVisible, showNavbar, hideNavbar } = useNavbarVisibility();

  return (
    <div>
      <div data-testid="visibility">{isVisible ? 'Visible' : 'Hidden'}</div>
      <button onClick={showNavbar} data-testid="show-button">Show</button>
      <button onClick={hideNavbar} data-testid="hide-button">Hide</button>
    </div>
  );
};

describe('NavbarContext', () => {
  it('provides and updates context values correctly', () => {
    render(
      <NavbarProvider>
        <MockNavbarConsumer />
      </NavbarProvider>
    );
    expect(screen.getByTestId('visibility')).toHaveTextContent('Visible');
    fireEvent.click(screen.getByTestId('hide-button'));
    expect(screen.getByTestId('visibility')).toHaveTextContent('Hidden');
    fireEvent.click(screen.getByTestId('show-button'));
    expect(screen.getByTestId('visibility')).toHaveTextContent('Visible');
  });
});
