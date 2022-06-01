import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe("Header component tests", () => {
  it("Renders correctly", () => {
    const tree = renderer 
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
