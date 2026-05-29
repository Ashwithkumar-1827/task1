import { render, screen } from '@testing-library/react';
import App from './App';

test('renders word counter component', () => {
  render(<App />);
  const counterElement = screen.getByText(/word counter/i);
  expect(counterElement).toBeInTheDocument();
});
