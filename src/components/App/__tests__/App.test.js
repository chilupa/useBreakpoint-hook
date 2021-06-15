import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/change your browser/i);
    expect(linkElement).toBeInTheDocument();
  });
});
