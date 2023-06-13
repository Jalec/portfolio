import './Skills.css';
import { SkillElement } from '../components/skillElement';

function Skills() {
    return (
        <>
        <div className='skills-page-container'>
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
                <path fill="transparent" fill-opacity="1" stroke="black" stroke-width="2" stroke-dasharray="10 5" stroke-dashoffset="0" d="M0,160 C80,130 160,117 240,105 C320,93 400,83 560,97 C720,111 880,149 1040,160 C1200,171 1280,149 1360,122.7 C1400,109.3 1440,96 1440,96"></path>
            </svg>
            <div className='skills-page' id='skills'>
                <h1>My technical skills</h1>
                <p>Here are some of the technologies I use to build websites and web apps. However, I approach my learning with an open mind and I am always looking to learn new things and keep improving my skills.</p>
                <div className='skill-collection'>
                    <div className='skills-grid'>
                        <SkillElement name="HTML" imgURL="/skill-logo/html-5.png" />
                        <SkillElement name="CSS" imgURL="/skill-logo/css-3.png"/>
                        <SkillElement name="JavaScript" imgURL="/skill-logo/js.png" />
                        <SkillElement name="React" imgURL="/skill-logo/react.png"/>
                        <SkillElement name="jQuery" imgURL="/skill-logo/jquery.png"/>
                        <SkillElement name="Tailwind" imgURL="/skill-logo/tailwindcss.png"/>
                        <SkillElement name="SQL (Oracle, MySQL)" imgURL="/skill-logo/sql.png"/>
                        <SkillElement name="Git" imgURL="/skill-logo/git.png"/>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export { Skills }; 