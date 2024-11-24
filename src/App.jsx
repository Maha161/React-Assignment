import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Portfolio from "./pages/Portfolio/Portfolio"
import Home from "./pages/Home/Home"
import Conatct from "./pages/Contact/Conatct"
import About from "./pages/About/About"
import Layout from "./components/Layout/Layout"

function App(){
  const router = createBrowserRouter([
    {path: "/" , element: <Layout/> , children: [
      {path: "/" , element: <Home/>},
      {path: "/portfolio" , element: <Portfolio/>},
      {path: "/contact" , element: <Conatct/>},
      {path: "/about" , element: <About/>},
    ]}
  
  ])
  return  <>
     <RouterProvider router={router} />
    </>
  
}

export default App