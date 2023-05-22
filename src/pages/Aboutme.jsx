import './Aboutme.css';
//import { useState } from 'react';

function Aboutme() {
  return (
    <>  
        <svg className='separating-line' viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
            <path id="path" fill="transparent" fill-opacity="1" d="M0,96L120,96C240,96,480,96,720,128C960,160,1200,224,1320,256L1440,288" stroke="#393B4E" stroke-width="2" stroke-dasharray="10 5" stroke-dashoffset="0"></path>
        </svg>
        <div className='about-me' id='aboutme'>
            <h1>About Me</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </>
  );
}

export { Aboutme };