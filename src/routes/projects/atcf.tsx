import { createFileRoute } from '@tanstack/react-router'
import Project from '../../components/Project'
import type { projectInterface } from '../../interfaces/projectInterface'

export const Route = createFileRoute('/projects/atcf')({
  component: RouteComponent,
})

const projectInfo: projectInterface = {
  cover: "/",
  name: 'As the Crow Flies',
  tagline: 'a game about crows',
  framework: 'Godot',
  language: 'GDScript',
  release: '2025',
  screenshot: '../../../public/images/game_images/atcf/atcf_01.png',
  description: 'A game made for a game jam. The game jam theme was: "everything is alive"',
  url: 'https://dude-the-hero.itch.io/as-the-crow-flies'
}

function RouteComponent() {
  return (
    <Project project={projectInfo}></Project>
  )
}
