import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../components/Calculator'

describe("Calculator component tests", () => {
  it("Renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
