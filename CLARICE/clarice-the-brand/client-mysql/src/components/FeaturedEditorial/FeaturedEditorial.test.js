import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FeaturedEditorial from './FeaturedEditorial';
import '@testing-library/jest-dom';

describe('FeaturedEditorial Component', () => {
  it('render without crashing', () => {
    render(
      <Router>
        <FeaturedEditorial imageUrl='test.jpg' season='ctb-season' launchTitle='ctb-launch' />
      </Router>
    );
    expect(screen.getByText('ctb-season')).toBeInTheDocument();
  });

  it('displays correct props', () => {
    render(
      <Router>
        <FeaturedEditorial imageUrl='test.jpg' season='ctb-season' launchTitle='ctb-launch' />
      </Router>
    );
    expect(screen.getByAltText('ctb-launch')).toHaveAttribute('src', 'test.jpg');
    expect(screen.getByText('ctb-season')).toBeInTheDocument();
    expect(screen.getByText('ctb-launch')).toBeInTheDocument();
  });

  it('link navigates to the correct route', () => {
    render(
      <Router>
        <FeaturedEditorial imageUrl="test.jpg" season="ctb-season" launchTitle="ctb-launch" />
      </Router>
    );
    expect(screen.getByRole('link', { name: /discover more/i })).toHaveAttribute('href', '/editorial/ctb-season');
  });
});