import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/project_default')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
      <div className="project">
        <img src="" alt="the logo image for a game" />
        <h1 className='projectName'>Default Project Page</h1>
        <h6 className='projectTagline'>This is the default tagline for the project.</h6>
        <div className='projectDetails'>
          <ul>
            <li>Framework: Unity</li>
            <li>Language: C#</li>
            <li>Release: 2021</li>
          </ul>
        </div>
        <p>This is the default project page content.</p>
        <img src="" alt="a screenshot of the game" />
        <p>More details about the default project can be added here.</p>
        <img src="" alt="another screenshot of the game" />
        <Link to="/">Back to Home</Link>
      </div>
    </>
  )
}
