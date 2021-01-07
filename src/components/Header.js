import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <nav>
        <img src="img/logo naz.png" className="logo" />
        <ul className="menu">
          <Link to="/"><span>Home</span></Link>
          <Link to="/about"><span>About</span></Link>
          <Link to="/contact"><span>Contact</span></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
