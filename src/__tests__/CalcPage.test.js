import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CalcPage from '../components/CalcPage';

describe("Calculator Page tests", () => {
  it("Renders correctly", () => {
    const tree = renderer 
      .create(
        <MemoryRouter>
          <CalcPage />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
