import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Collection from './Collection';
import { BrowserRouter as Router } from 'react-router-dom';

const CollectionData = [
  {
    imageUrl: '/img/Editorial Clarice/DSC_1415.JPG',
    season: 'Clarice The Brand',
    collection: 'La Beauté Collection',
    link: '/',
  },
];

jest.mock('../../contexts/NavbarContext', () => ({
  useNavbarVisibility: () => ({
    setIsVisible: jest.fn(),
  }),
}));

describe('Collection Component', () => {
  it('renders the collections correctly', () => {
    render(
      <Router>
        <Collection />
      </Router>
    );

    // check that collection data is visible
    CollectionData.forEach((item) => {
      expect(screen.getByText(item.collection)).toBeInTheDocument();
      expect(screen.getByAltText(item.collection)).toBeInTheDocument();
    });
  });
});
