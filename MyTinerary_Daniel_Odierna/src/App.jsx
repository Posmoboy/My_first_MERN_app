import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './app.css'
import Home from './Views/Home/Home'
import "./Views/Home/home.css"
import Cities from './Views/Cities/Cities'


const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/>,
    children: [
     
    { path: '/*', element: <h1><img src="\img\404error_page_background.png" alt="404page" /></h1> },

  
  ]
  },
  
  {
    path: '/cities',
    element: <Cities/>,
    children: [
     
      { path: '/cities/*', element: <h1><img src="\img\404error_page_background.png" alt="404page" /></h1> },
  
    
    ]
  }

  
     

])

function App() {
  return (
    
  <>
  <RouterProvider router={router}/> 
  

  </>
  )
}

export default App
