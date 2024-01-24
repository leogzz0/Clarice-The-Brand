import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Conditions from './Conditions';

describe('Conditions Component', () => {
  it('renders the about page', () => {
    render(<Conditions />);
    expect(screen.getByRole('heading', { name: /políticas de privacidad clarice the brand/i })).toBeInTheDocument();
  });
});