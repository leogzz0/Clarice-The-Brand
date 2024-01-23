import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import FeaturedProducts from './FeaturedProducts';
import useFetch from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('FeaturedProducts Component', () => {
  it('renders without crashing', async () => {
    useFetch.mockReturnValue({ data: [], loading: false, error: null });

    render(<FeaturedProducts type="test" />);
    await waitFor(() => expect(screen.getByText(/test products/i)).toBeInTheDocument());
  });

  it('displays loading state', () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });

    render(<FeaturedProducts type="test" />);
    expect(screen.getByText('LOADING')).toBeInTheDocument();
  });

  it('displays error state', () => {
    useFetch.mockReturnValue({ data: null, loading: false, error: 'Error message' });

    render(<FeaturedProducts type="test" />);
    expect(screen.getByText('SOMETHING WENT WRONG!')).toBeInTheDocument();
  });

  it('renders data when fetched', async () => {
    const mockData = [
      {
        id: 1,
        attributes: {
          isNew: true,
          title: 'Product 1',
          price: 100,
          img: {
            data: {
              attributes: {
                url: '/img1.jpg'
              }
            }
          },
          img2: {
            data: {
              attributes: {
                url: '/img2.jpg'
              }
            }
          }
        },
        oldPrice: 120
      },
      {
        id: 2,
        attributes: {
          isNew: false,
          title: 'Product 2',
          price: 200,
          img: {
            data: {
              attributes: {
                url: '/img3.jpg'
              }
            }
          },
          img2: {
            data: {
              attributes: {
                url: '/img4.jpg'
              }
            }
          }
        },
        oldPrice: 220
      },
    ];
    useFetch.mockReturnValue({ data: mockData, loading: false, error: null });

    render(
      <Router>
        <FeaturedProducts type="test" />
      </Router>
    );

    await waitFor(() => {
      mockData.forEach((item) => {
        expect(screen.getByText(item.attributes.title)).toBeInTheDocument();
        expect(screen.getByText(`$${item.attributes.price}`)).toBeInTheDocument();
      });
    });
  });

});
