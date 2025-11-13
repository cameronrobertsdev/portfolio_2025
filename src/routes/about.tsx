import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <div className='aboutCover'>
        <h1>About</h1>
        <p>
          Cameron Roberts is a developer living in the Pacififc Northwest. He recieved his Bachelor's in Media Arts from
          Corban University. He has worked as an online tutor at iD tech camps teaching technology and programming concepts to
          young learners and worked as developer at Hothouse Enterprises creating eBook prototypes using Unity.

          Cameron has also created many videogames and taken part in a variety of game jams building prototypes quickly in short
          time frames and working on personal projects.
        </p>
        <a href="/">View Resume</a>
        <h3>Skils</h3>
        <ul>
          <li>Programming</li>
          <li>3D Design</li>
          <li>Development</li>
        </ul>
        <h3>Tools, Frameworks, and Libraries</h3>
        <ul>
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>Godot</li>
          <li>React</li>
        </ul>
        <h3>Languages</h3>
        <ul>
          <li>C#</li>
          <li>C++</li>
          <li>Python</li>
          <li>Javascript</li>
        </ul>


      </div>
    </>

  )
}