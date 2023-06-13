import './navbar.css';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNavBar = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    return (
      <>
        <nav className="navbar">
            <h1>Jordi.dev</h1>
            <input type="checkbox" id="checkbox" onClick={toggleNavBar}></input>
              <label for="checkbox" class="toggle">
                <div class="bars" id="bar1"></div>
                <div class="bars" id="bar2"></div>
                <div class="bars" id="bar3"></div>
              </label>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                  <li><a href="#aboutme">About Me</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#contactme">Contact Me</a></li>
              </ul>
            </div>
        </nav>
      </>
    );
}
  
  export { Navbar };