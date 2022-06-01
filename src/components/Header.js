import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header className="nav-bar">
    <h1>Math Magicians</h1>
    <div className="link-container">
      <Link to="/">Home</Link>
      <Link to="/Calculator" className="mid-b">Calculator</Link>
      <Link to="/Quote">Quote</Link>
    </div>
  </header>
);

export default Header;
