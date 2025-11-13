import { createFileRoute } from '@tanstack/react-router'
import Project from '../../components/Project'
import type { projectInterface } from '../../interfaces/projectInterface'

export const Route = createFileRoute('/projects/project_default')({
  component: RouteComponent,
})

const projectInfo: projectInterface = {
  cover: "/",
  name: 'Bugaboo Badlands',
  tagline: 'a game about bugs',
  framework: 'Godot',
  language: 'GDScript',
  release: '2025',
  screenshot: '/',
  description: 'A game made for a game jam. The game jam theme was: "everything is alive".',
  url: 'https://dude-the-hero.itch.io/bugaboo-badlands'
}

function RouteComponent() {
  return (
    <Project project={projectInfo}></Project>
  )
}
