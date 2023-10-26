import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Brand from './pages/Brand/Brand';
import Editorial from './pages/Editorial/Editorial';
import EditorialDetail from './pages/EditorialDetail/EditorialDetail';
import './app.scss';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

// routes
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
      {
        path:'/brand',
        element:<Brand/>
      },
      {
        path:'/editorial',
        element:<Editorial/>
      },
      {
        path:'/editorial/:season',
        element:<EditorialDetail/>
      }
    ]
  },
  {
    path:'/products/:id',
    element:<Products/>
  },
  {
    path:'/product/:id',
    element:<Product/>
  },
]);

// define router
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
