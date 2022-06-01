import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Display from '../components/Display';

describe('Display component tests', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Display />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
