import './Pages.css';
import { Project } from '../components/project';

function Pages() {
    return (
        <>
            <div className='pages'>
                <div className='start-pages'>
                    <h1>My projects</h1>
                    <p>Lorem ipsum</p>
                </div>
                <h2>These are some of those things I've built</h2>
                <div className='projects'>
                    <Project />
                    <Project />
                </div>
            </div>
        </>
    );
}

export { Pages }; 