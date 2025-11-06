interface ProjectParameters {
    name: string;
    summary: string;
    description: string;
    images?: [string];
    logo?: string;
   // thumbnail?: string;
}

function Project({ name, summary, description, images, logo }: ProjectParameters) {
    return (
        <>
            <img src={logo}></img>
            <h1 className="projectName">{name}</h1>
            <h5 className="projectSummary">{summary}</h5>
            <ul>
                {images}.map(image => <li><img src="image" alt="a screenshot from a developer portfolio"></img></li> )
            </ul>
            <p>{description}</p>

        </>
    )
}

export default Project;