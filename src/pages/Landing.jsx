//import './App.css';
import './Landing.css';
import { Navbar } from "../components/navbar";
import { useState } from 'react';

function Landing() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = () => {
    setIsHovered(!isHovered);
  }


  return (
    <>
      <Navbar />
      <div className='landing'>
        <div className='container-landing'>
          <div className="presentation">
            <div className='hello-message'>
              <h1>Hi, I'm Jordi,<br></br> <span>Web Developer</span></h1>
              <p>Front-end developer based in Spain.</p>
              <div className='info-buttons'>
                <a href='/' onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} className='download-btn'><span style={{ backgroundColor: isHovered ?  '#5e6072' : '#393B4E' }} className="material-symbols-outlined">download</span>Resume</a>
                <a href='/'>Contact</a>
              </div>
              <div className='skill-set'>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>CSS</li>              
                <li>HTML</li>
              </ul>
            </div>
            </div> 
            <img src="/me-modified.png" alt="Myself" />
          </div>
        </div>
      </div>

    </>
  );
}

export { Landing };