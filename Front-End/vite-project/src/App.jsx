
import Home from './routes/Home/Home'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import List from "./routes/Listpage/List"
import {Layout, RequireAuth } from './routes/layout/layout'
import Singlepage from './routes/singlepage/Singlepage';
import Log from './routes/login/Log';
import Profile from './routes/profile/Profile';
import Register from './routes/register/Register';
import Update from './routes/profileupdate/Update';
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
          path:"/login",
          element:<Log/>
        },
        {
          path:"/register",
          element:<Register/>
        },
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/profile/update",
          element:<Update/>
        },
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
