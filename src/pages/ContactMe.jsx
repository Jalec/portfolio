import './ContactMe.css';

function Contact() {
    return (
        <>
            <div className='contact' id='contactme'>
                <h1>Contact Me</h1>
                <p>I'm looking forward to start my professional career as a front-end developer, working with great people and building amazing products. <br></br>
                    If you are interested in my work, or you have any questions, please feel free to reach out.</p>
                {/* <div className='contact-links'>
                    <ul>
                        <li><a href="mailto:jordi.alejandre10@gmail.com">Send e-mail</a></li>
                        <li><a href="/">My LinkedIn</a></li>
                        <li><a href="/">My Github</a></li>
                    </ul>
                </div> */}
                <div className='info-buttons'>
                <a href='mailto:jordi.alejandre10@gmail.com' className='link-resume'>Send e-mail</a>
                <div className='relevant-links'>
                  <a href='https://www.linkedin.com/in/jordi-alejandre-camps-36a9401a7/' target='_blank' rel='noreferrer'><i className="fa fa-linkedin"></i></a>
                  <a href='https://github.com/Jalec' target='_blank' rel='noreferrer'><i className="fa fa-github"></i></a>
                </div>
              </div>
            </div>
        </>
    );
}

export { Contact }; 