import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/Login'
import Admin from './pages/admin'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export { router };