import './Pages.css';
import { Project } from '../components/project';

function Pages() {

    const cosmereTools = ["/skill-logo/react.png", "/skill-logo/tailwindcss.png"];
    const discordTools = ["/skill-logo/html-5.png", "/skill-logo/css-3.png", "/skill-logo/js.png"];

    return (
        <>
            <div className='pages' id='projects'>
                <div className='start-pages'>
                    <h1>My projects</h1>
                    <p>
                        The best way to learn is by doing. 🛠️ <br /> <br />
                        
                        That's why I'm constantly working on different projects, whether it's building a simple demo to learn something new, or creating a complex web application that excites me.
                    </p>
                </div>
                <div className='projects'>
                    <Project projectURL="https://cosmere-shop.vercel.app/" repo="https://github.com/Jalec/cosmere-shop" imgURL="/cosmere-shop-project.png" tools={cosmereTools} title="E-commerce Web App" desc="This project demonstrates my abilities in utilizing modern tools such as React and Tailwind CSS. It showcases my eagerness to learn and adopt cutting-edge technologies."/>
                    <Project projectURL="https://github.com/Jalec/discord-clone-website" repo="https://github.com/Jalec/discord-clone-website" imgURL="/discord-project.png" tools={discordTools} title="Discord clone" desc="The second project, a Discord clone, is built using HTML, CSS, and JavaScript, highlighting my strong foundation in web development fundamentals and the ability to create modern websites."/>
                </div>
            </div>
        </>
    );
}

export { Pages }; 