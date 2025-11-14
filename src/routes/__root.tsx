import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from '../components/NavBar'
import '../styles/default.css'

const RootLayout = () => (
  <>
    <NavBar items={[
      'Home',
      'Projects',
      'About',
    ]}></NavBar>
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })