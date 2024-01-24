import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Brand from './Brand';

jest.mock('../../contexts/NavbarContext', () => ({
  useNavbarVisibility: () => ({
    setIsVisible: jest.fn(),
  }),
}));

describe('Brand Component', () => {
  it('renders the brand page with initial image and text', () => {
    render(
      <Router>
        <Brand />
      </Router>
    );

    // check for the initial image in the slider
    expect(screen.getByAltText('slide-0')).toBeInTheDocument();

    // check for the slogan
    expect(screen.getByText('Stand Out')).toBeInTheDocument();

    // check for welcome message and other text content
    expect(screen.getByText(/clarice the brand stands for/i)).toBeInTheDocument();
    expect(screen.getByText(/we limit our pieces to offer you exclusiveness/i)).toBeInTheDocument();
  });
});
