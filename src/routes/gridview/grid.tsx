import { createFileRoute } from '@tanstack/react-router'
import { projectList } from '../../assets/data/projects'
import GridView from '../../components/gridview'

export const Route = createFileRoute('/gridview/grid')({
  component: ProjectGrid,
})

function ProjectGrid() {
  return (
    <GridView items={projectList}></GridView>

  )
}
