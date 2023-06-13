import './project.css';


function Project(props) {
    return (
        <>
            <div className='project'>
                <a href={props.projectURL} target='_blank' rel='noreferrer'><img id='website-img' src={props.imgURL} alt="" /></a>
                <div className='project-description'>
                    <div className='project-info'>
                        <a href={props.projectURL} target='_blank' rel='noreferrer'><h1>{props.title}</h1></a>
                        <p>{props.desc}</p>
                    </div>
                    <div className='project-relevant'>
                        <div className='project-tools'>
                            {props.tools.map(tool => <img src={tool} alt="" />)}
                        </div>
                        <div className='project-repo'>
                            <a href={props.repo} target='_blank' rel='noreferrer'><i className="fa fa-github"></i></a>
                        </div>
                    </div>

                </div> 
            </div>
        </>
    );
}

export { Project }; 