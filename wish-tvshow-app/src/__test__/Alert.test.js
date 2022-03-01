import { render, screen } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert', () => {
  it('displays type and message', () => {
    render(<Alert type="warning" message={'Try again later'} />);
    expect(screen.getByText('Try again later')).toBeInTheDocument();
  });
});
