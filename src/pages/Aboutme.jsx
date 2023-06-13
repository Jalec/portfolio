import './Aboutme.css';
//import { useState } from 'react';

function Aboutme() {
  return (
    <>  
      <div className='about-me-container'>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
          <path id="path" fill="transparent" fill-opacity="1" d="M0,96L120,96C240,96,480,96,720,128C960,160,1200,224,1320,256L1440,288" stroke="black" stroke-width="2" stroke-dasharray="10 5" stroke-dashoffset="0"></path>
        </svg>
        <div className='about-me' id='aboutme'>
            <h1>About Me</h1>
            <p>
            Welcome to my portfolio! I'm Jordi Alejandre, a passionate and dedicated web developer with a primary focus on FrontEnd development and solid fundamentals in BackEnd. <br />
            With a degree in Computer Science specializing in Information Technologies, I have acquired a strong foundation in coding languages, frameworks, and industry best practices. <br /> <br />
            During my time at SIGMA, a software company specializing in solutions for universities, I have been working as a SQL developer. I gained invaluable experience in the database field, strengthening my expertise in backend development. <br />
            In addition to my professional experience, I have undertaken independent projects, below, you can explore two of my most relevant ones. 
            </p>
        </div>
      </div>
    </>
  );
}

export { Aboutme };