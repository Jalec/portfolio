import './navbar.css';

function Navbar() {
    return (
      <>
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="/">About Me</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Linked In</a></li>
            </ul>
        </nav>
      </>
    );
  }
  
  export { Navbar };