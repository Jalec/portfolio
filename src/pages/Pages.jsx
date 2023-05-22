import './Pages.css';
import { Project } from '../components/project';

function Pages() {
    return (
        <>
            <div className='pages' id='projects'>
                <div className='start-pages'>
                    <h1>My projects</h1>
                    <p>Lorem ipsum</p>
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