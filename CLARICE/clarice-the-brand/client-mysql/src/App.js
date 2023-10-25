//import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Brand from "./pages/Brand/Brand";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss";

const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

// routes
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/brand",
        element:<Brand/>
      }
    ]
  },
  {
    path:"/products/:id",
    element:<Products/>
  },
  {
    path:"/product/:id",
    element:<Product/>
  },
])

// define router
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
