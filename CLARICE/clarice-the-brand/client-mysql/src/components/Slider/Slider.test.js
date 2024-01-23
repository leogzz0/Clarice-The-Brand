import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slider from './Slider';
import { act } from 'react-dom/test-utils';

describe('Slider Component', () => {
  jest.useFakeTimers();

  it('renders the slider with initial slide', () => {
    render(<Slider />);
    const firstSlideImage = screen.getByAltText('Slide 0');
    expect(firstSlideImage).toBeInTheDocument();
    expect(firstSlideImage).toHaveAttribute('src', '/img/Editorial Clarice/169-SAM_0224_44378068.webp');
  });

  it('changes slide automatically after 3 seconds', async () => {
    render(<Slider />);
    const container = document.querySelector('.container');
    const initialTransform = container.style.transform;
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    await waitFor(() => {
      const updatedTransform = container.style.transform;
      expect(updatedTransform).not.toBe(initialTransform);
    });
  });


  it('preloads the first image', () => {
    render(<Slider />);
    const preloadLink = document.head.querySelector('link[rel="preload"]');
    expect(preloadLink).toBeInTheDocument();
    expect(preloadLink).toHaveAttribute('href', '/img/Editorial Clarice/169-SAM_0224_44378068.webp');
  });

  it('cleans up interval and preload link on unmount', () => {
    jest.spyOn(window, 'clearInterval').mockImplementation(() => { });
    const { unmount } = render(<Slider />);
    const preloadLink = document.head.querySelector('link[rel="preload"]');
    unmount();
    expect(window.clearInterval).toHaveBeenCalled();
    expect(preloadLink).not.toBeInTheDocument();
    window.clearInterval.mockRestore();
  });
});