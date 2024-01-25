import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Editorial from './Editorial';
import { BrowserRouter as Router } from 'react-router-dom';

const EditorialData = [
  {
    imageUrl: '/img/Editorial Clarice/DSC_1426.JPG',
    season: 'Clarice The Brand',
    launchTitle: 'La Beauté Collection',
    link: '/',
  },
];

jest.mock('../../contexts/NavbarContext', () => ({
  useNavbarVisibility: () => ({
    setIsVisible: jest.fn(),
  }),
}));

describe('Editorial Page', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Editorial />
      </Router>
    );

    EditorialData.forEach((item) => {
      expect(screen.getByText(item.season)).toBeInTheDocument();
      expect(screen.getByAltText(item.launchTitle)).toBeInTheDocument();
    });
  });
});
