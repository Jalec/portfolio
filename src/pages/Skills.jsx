import './Skills.css';
import { SkillElement } from '../components/skillElement';

function Skills() {
    return (
        <>
            <img src="./arcoiris.png" alt="" id='arcoiris-skills' />
            <div className='skills-page' id='skills'>
                <h1>My technical skills</h1>
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

        </>
    );
}

export { Skills }; 