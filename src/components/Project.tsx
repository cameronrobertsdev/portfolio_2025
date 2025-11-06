interface ProjectParameters {
    name: string;
    summary: string;
    description: string;
    images?: [string];
    logo?: string;
   // thumbnail?: string;
}

function Project({ name, summary, description, images, logo }: ProjectParameters) {
    
    const imageSet = images?.map(image => <li><img src={image} alt="an image from a web portfolio" /></li>)

    return (
        <>
            <img src={logo}></img>
            <h1 className="projectName">{name}</h1>
            <h5 className="projectSummary">{summary}</h5>
            <ul>
                {imageSet}
            </ul>
            <p>{description}</p>

        </>
    )
}

export default Project;