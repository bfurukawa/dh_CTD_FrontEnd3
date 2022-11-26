import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import { Login } from './pages/Login'
import { SegundaAula } from './aulas/SegundaAula'
import { TerceiraAula } from './aulas/TerceiraAula'
import { QuartaAula } from './aulas/QuartaAula'
import { QuintaAula } from './aulas/QuintaAula'
import {SetimaAula} from './aulas/SetimaAula'
// import {Menu} from './components/menu'
import {DesafioJSONPosts} from './aulas/DesafioJSONPosts'
import {JSONpostsComments} from './aulas/JSONpostComments'

function App() {

  const listaMenu = [
    "Login",
    "SegundaAula",
    "TerceiraAula",
    "QuartaAula",
    "QuintaAula",
    "SetimaAula"
  ]

  const appRouter = createBrowserRouter([
    {path:'Login',element:<Login/>},
    {path:'SegundaAula',element:<SegundaAula/>},
    {path:'TerceiraAula',element:<TerceiraAula/>},
    {path:'QuartaAula',element:<QuartaAula/>},
    {path:'QuintaAula',element:<QuintaAula/>},
    {path:'SetimaAula',element:<SetimaAula/>},
    {path:'JSON', element:<DesafioJSONPosts/>},
    {path: 'JSONPostComments/:id', element:<JSONpostsComments/>}
  ])

  return (
    <>
    { <RouterProvider router={appRouter}/> }
    </>
    
    
  )
}

export default App
