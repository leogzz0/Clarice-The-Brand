import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Collection from './pages/Collection/Collection';
import CollectionDetail from './pages/CollectionDetail/CollectionDetail';
import Editorial from './pages/Editorial/Editorial';
import EditorialDetail from './pages/EditorialDetail/EditorialDetail';
import Brand from './pages/Brand/Brand';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Success from './pages/Success/Success';
import Conditions from './pages/Conditions/Conditions';
import Search from './pages/Search/Search';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { NavbarProvider } from './contexts/NavbarContext';
import './app.scss';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <ScrollToTop />
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
        path:'/collection',
        element:<Collection/>
      },
      {
        path:'/collection/:season',
        element:<CollectionDetail/>
      },
      {
        path:'/editorial',
        element:<Editorial/>
      },
      {
        path:'/editorial/:season',
        element:<EditorialDetail/>
      },
      {
        path:'/brand',
        element:<Brand/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<ContactUs />
      },
      {
        path:'/conditions',
        element:<Conditions />
      },
      {
        path:'/search',
        element:<Search/>
      },
      {
        path:'/coming-soon',
        element:<ComingSoon/>
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
  {
    path:'/success',
    element:<Success/>
  }
]);

// define router
function App() {
  return (
    <NavbarProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </NavbarProvider>
  );
}

export default App;
