import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/Calculator">Calculator</Link>
      <Link to="/Quote">Quote</Link>
    </div>
  </header>
);

export default Header;
