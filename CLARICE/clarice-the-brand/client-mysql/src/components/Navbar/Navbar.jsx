import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import './Navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const getLinkClassName = (route) => {
    const whiteRoutes = ['/editorial', '/brand', '/collection', '/editorial/Clarice%20The%20Brand', '/collection/Clarice%20The%20Brand'];
    const isActive = location.pathname === route;
    const isWhite = whiteRoutes.includes(location.pathname);
    return `link${isActive ? ' active' : ''}${isWhite ? ' white' : ''}`;
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        {isMobile ? (
          <>
            <div className='burger-menu'>
              <button onClick={() => setOpen(!open)}>
                <MenuOutlinedIcon className='burger-icon'/>
              </button>
            </div>
            <div className="center-mobile">
              <Link className={getLinkClassName('/')} to="/">
                CLARICE THE BRAND
              </Link>
            </div>
            <div className="right-mobile">
              <SearchIcon className="icon" />
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingBagOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </div>
            {open && (
              <div className='mobile-menu'>
                <Link className={getLinkClassName('/products/1')} to='/products/1'>
                  SHOP
                </Link>
                <Link className={getLinkClassName('/collection')} to='/collection'>
                  COLLECTIONS
                </Link>
                <Link className={getLinkClassName('/editorial')} to='/editorial'>
                  EDITORIAL
                </Link>
                <Link className={getLinkClassName('/brand')} to='/brand'>
                  BRAND
                </Link>
                <Link className={getLinkClassName('/about')} to='/about'>
                  ABOUT
                </Link>
                <Link className={getLinkClassName('/contact')} to='/contact'>
                  CONTACT
                </Link>
                <Link className={getLinkClassName('/stores')} to='/stores'>
                  STORES
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="left">
              <div className="item">
                <Link className={getLinkClassName('/products/1')} to="/products/1">
                  SHOP
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/collection')} to="/collection">
                  COLLECTIONS
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/editorial')} to="/editorial">
                  EDITORIALS
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/brand')} to="/brand">
                  BRAND
                </Link>
              </div>
            </div>
            <div className="center">
              <Link className={getLinkClassName('/')} to="/">
                CLARICE THE BRAND
              </Link>
              {/*<img src='./img/clarice.png' alt='' />*/}
            </div>
            <div className="right">
              <div className="item">
                <Link className={getLinkClassName('/about')} to="/about">
                  ABOUT
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/contact')} to="/contact">
                  CONTACT
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/stores')} to="/">
                  STORES
                </Link>
              </div>
              <div className="icons">
                <SearchIcon className={getLinkClassName('/searchIcon')}/>
                <PersonOutlineOutlinedIcon className={getLinkClassName('/profileIcon')}/>
                <FavoriteBorderOutlinedIcon className={getLinkClassName('/wishlistIcon')}/>
                <div className="cartIcon" onClick={() => setOpen(!open)}>
                  <ShoppingBagOutlinedIcon className={getLinkClassName('/cartIcon', true)}/>
                  <span>{products.length}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
