import './Pages.css';
import { Project } from '../components/project';

function Pages() {
    return (
        <>
            <div className='pages' id='projects'>
                <div className='start-pages'>
                    <h1>My projects</h1>
                    <p>
                        The best way to learn is by doing. 🛠️
                    </p>
                    <p>
                        That's why I'm constantly working on different projects, whether it's building a simple demo to learn something new, or creating a complex web application that excites me.
                    </p>
                </div>
                <h2>These are some of those things I've built:</h2>
                <div className='projects'>
                    <Project imgURL="/cosmere-shop-project.png" title="Cosmere Books E-commerce" desc="Lorem Ipsum"/>
                    <Project imgURL="/discord-project.png" title="Discord clone" desc="Lorem Ipsum"/>
                </div>
            </div>
        </>
    );
}

export { Pages }; 