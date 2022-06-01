import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Quote from '../components/Quote'

describe("Quote page tests", () => {
  it("Renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Quote />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
