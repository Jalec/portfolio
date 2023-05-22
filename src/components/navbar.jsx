import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNavBar = () => {
      setIsMenuOpen(!isMenuOpen);
    }
    return (
      <>
        <nav className="navbar">
            <button className='toggle-btn' onClick={toggleNavBar}>
              { isMenuOpen ? 
                <FaTimes size={40} color='white' className="hamburger-icon"/> 
                :
                <FaBars size={40} color='white' className="hamburger-icon"/> 
              }
            </button>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                  <li><a href="/">About Me</a></li>
                  <li><a href="/">Projects</a></li>
                  <li><a href="/">Skills</a></li>
                  <li><a href="/">Contact Me</a></li>
              </ul>
            </div>
        </nav>
      </>
    );
}
  
  export { Navbar };