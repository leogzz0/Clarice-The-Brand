import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FeaturedCollection from './FeaturedCollection';
import '@testing-library/jest-dom';

describe('FeaturedCollection Component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <FeaturedCollection imageUrl='test.jpg' season='ctb' collection='ctb' />
      </Router>
    );
    expect(screen.getByText('ctb')).toBeInTheDocument();
  });

  test('displays correct props', () => {
    render(
      <Router>
        <FeaturedCollection imageUrl='test.jpg' season='ctb' collection='ctb' />
      </Router>
    );
    expect(screen.getByAltText('ctb')).toHaveAttribute('src', 'test.jpg');
    expect(screen.getByText('ctb')).toBeInTheDocument();
  });

  test('link navigates to the correct route', () => {
    render(
      <Router>
        <FeaturedCollection imageUrl="test.jpg" season="ctb" collection="ctb" />
      </Router>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/collection/ctb');
  });
});