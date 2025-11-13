
import { createFileRoute } from '@tanstack/react-router'
import GridView from '../components/gridview'
import { projectList } from '../assets/data/projects'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <><div className="home">
      <h1>Cameron Roberts</h1>
      <h6>Developer Portfolio</h6>
    </div>
      <GridView items={projectList}></GridView>
    </>
  )
}
