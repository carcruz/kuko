import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import InvestigacionesPage from './pages/InvestigacionesPage'
import AcercaDePage from './pages/AcercaDePage'
import DatosPage from './pages/DatosPage'
import ContextoPage from './pages/ContextoPage'
import PropuestasPage from './pages/PropuestasPage'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/articulo/:slug', element: <ArticlePage /> },
  { path: '/investigaciones', element: <InvestigacionesPage /> },
  { path: '/acerca-de', element: <AcercaDePage /> },
  { path: '/datos', element: <DatosPage /> },
  { path: '/contexto-internacional', element: <ContextoPage /> },
  { path: '/propuestas', element: <PropuestasPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
