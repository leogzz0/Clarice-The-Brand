import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FifteenCollage from './FifteenCollage';

describe('FifteenCollage', () => {
  const mockPhotos = Array.from({ length: 22 }, (_, index) => `photo ${index}`);

  it('renders without crashing', () => {
    render(<FifteenCollage photos={mockPhotos} />);
    expect(screen.getByAltText('photo 0')).toBeInTheDocument();
  });

  it('renders all photos correctly', () => {
    render(<FifteenCollage photos={mockPhotos} />);
    mockPhotos.forEach((photo, index) => {
      const image = screen.getByAltText(`photo ${index}`);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', photo);
    });
  });
});