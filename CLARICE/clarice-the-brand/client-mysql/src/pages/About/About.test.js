import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About Component', () => {
  it('renders the about page', () => {
    render(<About />);

    // check for the main heading
    expect(screen.getByRole('heading', { name: /about us\./i })).toBeInTheDocument();

    // check for the presence of paragraphs
    expect(screen.getByText(/clarice the brand stands for/i)).toBeInTheDocument();
    expect(screen.getByText(/we believe in your power/i)).toBeInTheDocument();

    // check for the image
    const image = screen.getByAltText('About Us');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('img/EditorialClariceWebp/31-SAM_0469.webp'));

    // check for the quote
    expect(screen.getByText(/give a woman the right shoes and she can conquer the world\./i)).toBeInTheDocument();
  });
});
