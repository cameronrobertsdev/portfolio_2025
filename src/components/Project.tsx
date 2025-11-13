
import { type projectInterface } from "../interfaces/projectInterface";

interface projectParam{
    project: projectInterface;
}

function Project({project} : projectParam) {
    return (
        <>
            <img className="projectCover" src={project.cover} alt="the cover from an indie video game"></img>
            <h1 className="projectName">{project.name}</h1>
            <h5 className="projectTagline">{project.tagline}</h5>
            <div className="projectSpecs">
                <ul>
                    <li>Framework: {project.framework}</li>
                    <li>Language: {project.language}</li>
                    <li>Released: {project.release}</li>
                </ul>
            </div>
            <img src={project.screenshot} alt="a screenshot from an indie game" width="40%"></img>
            <p>{project.description}</p>
            <a href={project.url}>Project Page</a>
        </>
    )
}

export default Project;