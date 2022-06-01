import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import Header from '../components/Header';

describe('Header component tests', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('User clicks on page link', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const quoteLink = screen.getByText(/quote/i);
    fireEvent.click(quoteLink);
    const { pathname } = window.location;

    expect(pathname).toBe('/Quote');
  });
});
