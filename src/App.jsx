import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Layout from "./components/Layout"
import Shop from "./pages/Shop"
function App() {

  let router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
    {
      path:"/",
      element:<Home/>,
    },{
      path:"/shop",
      element:<Shop/>,
    },
  ],
  },
  ])


  return (
    <div className="">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
