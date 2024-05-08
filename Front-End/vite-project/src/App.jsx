
import Home from './routes/Home/Home'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import List from "./routes/Listpage/List"
import Layout from './routes/layout/layout'
import Singlepage from './routes/singlepage/Singlepage';
import Log from './routes/login/Log';
import Profile from './routes/profile/Profile';
import Register from './routes/register/Register';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/list",
          element:<List/>
        },
        {
          path:"/singlepage",
          element:<Singlepage/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/login",
          element:<Log/>
        },
        {
          path:"/register",
          element:<Register/>
        },
      ]
    },
  ]);
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
