//import './App.css';
import './Landing.css';
import { Navbar } from "../components/navbar";
import { FiDownload } from 'react-icons/fi';

function Landing() {
  return (
    <>
      <Navbar />
      <div className='landing'>
        <div className='container-landing'>
          <div className="presentation">
            <div className='hello-message'>
              <h1>Hi, I'm Jordi,<br></br> <span>Web Developer</span></h1>
              <p>Hi, I'm Jordi, a passionate Front-end developer. <br></br>Based in Barcelona, Spain. 📍</p>
              <div className='info-buttons'>
                <a href='/' className='link-resume'><FiDownload className='download-btn' />Resume</a>
                <div className='relevant-links'>
                  <a href='https://www.linkedin.com/in/jordi-alejandre-camps-36a9401a7/' target='_blank' rel='noreferrer'><i className="fa fa-linkedin"></i></a>
                  <a href='https://github.com/Jalec' target='_blank' rel='noreferrer'><i className="fa fa-github"></i></a>
                </div>
              </div>
              {/* <div className='skill-set'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li> 
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Tailwind</li>
                </ul>
              </div> */}
            </div> 
            <img src="/me-modified.png" alt="Myself" />
          </div>
        </div>
      </div>

    </>
  );
}

export { Landing };