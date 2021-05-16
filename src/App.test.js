import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders a spinner if fetchState is processing', () => {});

test('renders an error message and a refetch button if fetchState is error', () => {});

test('renders a list of books if fetchState is complete', () => {});
