import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from './Categories';

describe('Categories', () => {
  it('renders without crashing', () => {
    const { container } = render(<Categories />);
    expect(container).toBeDefined();
  });

  const imageSources = [
    './img/EditorialClariceWebp/68-SAM_0390.webp',
    './img/EditorialClariceWebp/163-SAM_0237.webp',
    './img/EditorialClariceWebp/88-SAM_0359.webp',
    './img/EditorialClariceWebp/20-SAM_0487.webp',
    './img/EditorialClariceWebp/121-SAM_0302.webp',
    './img/EditorialClariceWebp/DSC_1415.webp',
  ];
  
  const altTexts = [
    'image-collage-1',
    'image-collage-2',
    'image-collage-3',
    'image-collage-4',
    'image-collage-5',
    'image-collage-6',
  ];

  imageSources.forEach((source, index) => {
    it(`image at index ${index} has correct src and alt attributes`, () => {
      const { getByAltText } = render(<Categories />);
      const image = getByAltText(altTexts[index]);
      expect(image).toHaveAttribute('src', source);
      expect(image).toHaveAttribute('alt', altTexts[index]);
    });
  });

  it('has correct div structure for rows and columns', () => {
    const { container } = render(<Categories />);
    expect(container.querySelectorAll('.col').length).toBeGreaterThan(0);
    expect(container.querySelectorAll('.row').length).toBeGreaterThan(0);
  });
});