import { createFileRoute } from '@tanstack/react-router'
import Project from '../../components/Project'
import type { projectInterface } from '../../interfaces/projectInterface'

export const Route = createFileRoute('/projects/ogre')({
  component: RouteComponent,
})

const projectInfo: projectInterface = {
  cover: "/",
  name: 'Vampire Ogre',
  tagline: 'A cartoony, retro FPS game',
  framework: 'Unity',
  language: 'C#',
  release: 'cancelled',
  screenshot: '/',
  description: 'A Unity project that aimed to combine Banjo-Kazooir with Quake. Unfortunately, it was never finished',
  url: 'https://dude-the-hero.itch.io/bugaboo-badlands'
}

function RouteComponent() {
  return (
    <Project project={projectInfo}></Project>
  )
}
