import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('About', () => {
  it('test link to tvmaze', () => {
    render(<About />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.tvmaze.com/api'
    );
  });
});
