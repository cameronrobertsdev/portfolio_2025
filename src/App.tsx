import './App.css'
import NavBar from './components/NavBar'
import Project from './components/Project'

function App() {

  return (
    <>
      <body>
        <NavBar items={['home', 'projects', 'about', 'contact']}></NavBar>
        <Project
          name='As the Crow Flies'
          summary='A game by Cameron Roberts'
          description='This game was made for fun'
        ></Project>
      </body>
    </>
  )
}

export default App
