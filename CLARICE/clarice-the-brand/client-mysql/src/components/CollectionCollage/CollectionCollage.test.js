import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import CollectionCollage from './CollectionCollage';
import useFetch from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('CollectionCollage', () => {
  const mockPhotos = [
    'url1',
    'url2'
  ]; 

  beforeEach(() => {
    useFetch.mockClear();
  });

  it('renders without crashing', () => {
    useFetch.mockReturnValue({ data: null, loading: false, error: null });
    render(<CollectionCollage photos={mockPhotos} type="testType" />);

    const allTextElements = screen.getAllByText(/a brief introduction to our amazing collection/);
    allTextElements.forEach(element => {
      expect(element).toBeInTheDocument();
    });
  });


  it('displays loading state', () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });
    render(<CollectionCollage photos={mockPhotos} type="testType" />);
    expect(screen.getByText('LOADING')).toBeInTheDocument();
  });

  it('displays error state', () => {
    useFetch.mockReturnValue({ data: null, loading: false, error: 'Error message' });
    render(<CollectionCollage photos={mockPhotos} type="testType" />);
    expect(screen.getByText('SOMETHING WENT WRONG!')).toBeInTheDocument();
  });

  it('renders data when fetched', async () => {
    const mockData = [
      {
        id: 1,
        attributes: {
          title: 'Product 1',
          price: 100,
          img: { data: { attributes: { url: '/img1.jpg' } } },
          img2: { data: { attributes: { url: '/img2.jpg' } } },
          isNew: true
        }
      },
      {
        id: 2,
        attributes: {
          title: 'Product 2',
          price: 200,
          img: { data: { attributes: { url: '/img3.jpg' } } },
          img2: { data: { attributes: { url: '/img4.jpg' } } },
          isNew: false
        }
      }
    ];
    useFetch.mockReturnValue({ data: mockData, loading: false, error: null });

    render(
      <Router>
        <CollectionCollage photos={mockPhotos} type="testType" />
      </Router>
    );

    await waitFor(() => {
      mockData.forEach((item, index) => {
        expect(screen.getByText(item.attributes.title)).toBeInTheDocument();
        expect(screen.getByText(`$${item.attributes.price}`)).toBeInTheDocument();
        expect(screen.getAllByAltText('')[index * 2]).toHaveAttribute('src', `http://localhost:1337${item.attributes.img.data.attributes.url}`);
      });
    });
  });

});

