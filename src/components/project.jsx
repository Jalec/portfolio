import './project.css';


function Project(props) {
    return (
        <>
            <div className='project'>
                <img src={props.imgURL} alt="" />
                <div className='project-info'>
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    );
}

export { Project }; 