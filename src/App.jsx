import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Layout from "./components/Layout"
import Shop from './pages/Shop';
import ProductDetails from "./pages/PruductDetails"
import Cart from './pages/Cart';
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
    },{
      path:"/shop/:id",
      element:<ProductDetails/>,
    },{
      path: "/cart",
      element:<Cart/>
    }
  ],
  },
  ])


  return (
    <div className="bg-[#090909] text-white">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
