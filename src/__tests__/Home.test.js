import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home'

describe("Home page tests", () => {
  it("Renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
