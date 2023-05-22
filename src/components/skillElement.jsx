import './skillElement.css';

function SkillElement(props) {
    return (
        <>
            <div className='skill-element'>
                <img src={props.imgURL} alt="" />
                <h3>{props.name}</h3>
            </div>
        </>
    );
}

export { SkillElement }; 