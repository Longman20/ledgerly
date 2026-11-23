import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('displays the correct title', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /Ledgerly/i }),
    ).toBeInTheDocument();
  });
});
