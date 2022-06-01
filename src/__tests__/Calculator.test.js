import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component tests', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('User click interaction with calculator buttons', () => {
    render(<Calculator />);
    const display = screen.getByText('00');
    const button = screen.getByText('8')

    fireEvent.click(button);

    expect(display.innerHTML).toBe("8");
  });
});
