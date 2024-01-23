import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import List from './List';
import useFetch from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('List Component', () => {
  it('renders without crashing', () => {
    useFetch.mockReturnValue({ data: [], loading: false, error: null });
    render(<List subCats={[]} maxPrice={null} sort={null} catId={null} searchQuery={null} />);
    expect(screen.queryByText('LOADING...')).not.toBeInTheDocument();
  });

  it('displays loading state', () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });
    render(<List subCats={[]} maxPrice={null} sort={null} catId={null} searchQuery={null} />);
    expect(screen.getByText('LOADING...')).toBeInTheDocument();
  });

  it('displays error state', () => {
    useFetch.mockReturnValue({ data: null, loading: false, error: { message: 'Error message' } });
    render(<List subCats={[]} maxPrice={null} sort={null} catId={null} searchQuery={null} />);
    expect(screen.getByText('Error: Error message')).toBeInTheDocument();
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
        <List subCats={[]} maxPrice={null} sort={null} catId={null} searchQuery={null} />
      </Router>
    );

    mockData.forEach((item) => {
      expect(screen.getByText(item.attributes.title)).toBeInTheDocument();
      expect(screen.getByText(`$${item.attributes.price}`)).toBeInTheDocument();
    });
  });

});
