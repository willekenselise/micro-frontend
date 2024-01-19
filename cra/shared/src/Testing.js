import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders welcome message', () => {
  render(<App />);
  const textElement = screen.getByText(/welcome to remote app/i);
  expect(textElement).toBeInTheDocument();
});